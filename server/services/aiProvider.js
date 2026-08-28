/* =========================================================
   aiProvider.js — 서버 측에서만 실행되는 AI 문제 생성 호출부.
   AI_API_KEY는 이 파일(과 server/.env)에서만 사용되며, 클라이언트에는
   절대 전달되지 않는다 — 이것이 config.js의 AI_PROXY_URL이 있는 이유다
   (spec section 26).
   ========================================================= */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const AI_API_URL = process.env.AI_API_URL || "https://api.openai.com/v1/chat/completions";
const AI_API_KEY = process.env.AI_API_KEY || "";
const AI_MODEL = process.env.AI_MODEL || "gpt-4o-mini";

function trackLabel(key) {
  const map = {
    math1: "공통수학1", math2: "공통수학2", algebra: "대수",
    calculus: "미적분", geometry: "기하", probability: "확률과 통계"
  };
  return map[key] || key;
}

function buildPrompt({ track, difficulty, weakUnits }) {
  const weakList = Object.keys(weakUnits || {})
    .sort((a, b) => (weakUnits[b] || 0) - (weakUnits[a] || 0))
    .slice(0, 3);
  return [
    `당신은 구미고등학교 수학 교사입니다. "${trackLabel(track)}" 과목의 ${difficulty} 난이도 문제를 학교 내신/모의고사 수준으로 1개 새로 출제하세요.`,
    weakList.length ? `이 학생이 특히 약한 단원: ${weakList.join(", ")} — 가능하면 이 중 하나를 다루세요.` : "",
    `반드시 서술형(essay) 없이 객관식(mc, 5지선다) 또는 단답형(short) 중 하나로만 출제하세요.`,
    `실제 교재/기출을 그대로 베끼지 말고 새로 창작하세요. 수식은 \\( \\) 인라인 LaTeX로 작성하세요.`,
    `아래 JSON 형식으로만 답하세요 (설명 문장 없이 JSON만): `,
    `{"type":"mc"|"short","unit":"단원명","question":"...","choices":["...","...","...","...","..."]?,"answer":"..."|0,"explanation":"..."}`
  ].filter(Boolean).join("\n");
}

/** @returns {Promise<object|null>} 정규화된 문제 객체, 또는 실패 시 null */
async function generateQuestion({ track, difficulty, weakUnits, excludeIds }) {
  if (!AI_API_KEY) return null; // 키가 없으면 라우트/컨트롤러가 로컬 은행으로 안내
  try {
    const res = await fetch(AI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${AI_API_KEY}` },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: [{ role: "user", content: buildPrompt({ track, difficulty, weakUnits }) }],
        temperature: 0.9
      })
    });
    if (!res.ok) return null;
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) return null;
    const parsed = JSON.parse(content.trim().replace(/^```json|```$/g, ""));
    if (!parsed.question || !parsed.type) return null;
    return {
      id: `ai_${Date.now()}_${Math.floor(Math.random() * 1e6)}`,
      type: parsed.type, unit: parsed.unit || trackLabel(track),
      question: parsed.question, choices: parsed.choices, answer: parsed.answer,
      acceptableAnswers: parsed.acceptableAnswers || [], explanation: parsed.explanation || "",
      track, difficulty, source: "ai"
    };
  } catch (err) {
    console.warn("aiProvider: AI 호출 실패.", err);
    return null;
  }
}

module.exports = { generateQuestion };
