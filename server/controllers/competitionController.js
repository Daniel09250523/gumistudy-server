/* =========================================================
   competitionController.js — 경쟁 모드 제출을 서버가 직접 채점한다.
   클라이언트가 보낸 finalScore/correctCount는 절대 신뢰하지 않고,
   원시 답안(questionIds + answers)과 startedAt/submittedAt 타임스탬프만
   근거로 questionBank.gradeAnswers() + scoring.computeScore()를 다시
   실행한다 — devtools로 점수를 조작할 수 없도록 하는 것이 spec 33의
   핵심 요구사항이다.
   ========================================================= */
const { gradeAnswers } = require("../services/questionBank");
const { computeScore } = require("../services/scoring");
const store = require("../data/store");

function submitCompetition(req, res) {
  const { username, nickname, level, track, answers, startedAt, submittedAt } = req.body || {};

  if (!username || !track || !answers || !startedAt || !submittedAt) {
    return res.status(400).json({ ok: false, reason: "missing_fields" });
  }

  const elapsedSeconds = Math.max(0, Math.round((Number(submittedAt) - Number(startedAt)) / 1000));
  const { correctCount, total } = gradeAnswers(answers);
  if (total === 0) return res.status(400).json({ ok: false, reason: "no_answers" });

  const { baseScore, timePenalty, finalScore, overtimeSeconds } = computeScore(correctCount, elapsedSeconds);

  const record = {
    username, nickname: nickname || "익명", level: level || 1,
    track, score: finalScore, correctCount, elapsedSeconds,
    baseScore, timePenalty, overtime: overtimeSeconds > 0,
    date: new Date().toISOString()
  };
  store.append(record);

  return res.json({ ok: true, record });
}

function getRankings(req, res) {
  const all = store.readAll();
  return res.json({ ok: true, records: all });
}

module.exports = { submitCompetition, getRankings };
