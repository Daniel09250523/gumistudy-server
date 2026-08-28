/* =========================================================
   scoring.js — the single, authoritative implementation of the
   경쟁 모드 scoring rule (spec sections 7–8). The client (script.js)
   has its own copy for instant local feedback, but this is the copy
   that actually decides what gets written to the shared leaderboard
   once SCORE_SERVER_URL is configured — never the client's number.
   ========================================================= */

const TOTAL_QUESTIONS = 10;
const POINTS_PER_QUESTION = 10; // 100점 만점 / 10문제
const TIME_LIMIT_SECONDS = 15 * 60; // 15분
const OVERTIME_PENALTY_PER_MINUTE = 5;

/**
 * @param {number} correctCount 0~10
 * @param {number} elapsedSeconds server-measured elapsed time (submittedAt - startedAt)
 * @returns {{ baseScore:number, timePenalty:number, finalScore:number, overtimeSeconds:number }}
 */
function computeScore(correctCount, elapsedSeconds) {
  const clampedCorrect = Math.max(0, Math.min(TOTAL_QUESTIONS, correctCount));
  const baseScore = clampedCorrect * POINTS_PER_QUESTION;

  const overtimeSeconds = Math.max(0, elapsedSeconds - TIME_LIMIT_SECONDS);
  // "초과한 1분마다 5점" — a partial minute over still counts as one full minute.
  const overtimeMinutes = overtimeSeconds > 0 ? Math.ceil(overtimeSeconds / 60) : 0;
  const timePenalty = overtimeMinutes * OVERTIME_PENALTY_PER_MINUTE;

  const finalScore = Math.max(0, baseScore - timePenalty);

  return { baseScore, timePenalty, finalScore, overtimeSeconds };
}

module.exports = { computeScore, TOTAL_QUESTIONS, TIME_LIMIT_SECONDS, OVERTIME_PENALTY_PER_MINUTE };
