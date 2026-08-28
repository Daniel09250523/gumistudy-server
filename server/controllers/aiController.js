const { generateQuestion } = require("../services/aiProvider");

async function generate(req, res) {
  const { track, difficulty, weakUnits, excludeIds } = req.body || {};
  if (!track || !difficulty) return res.status(400).json({ ok: false, reason: "missing_fields" });

  const question = await generateQuestion({ track, difficulty, weakUnits, excludeIds });
  if (!question) return res.status(200).json(null); // 클라이언트가 로컬 은행으로 자연스럽게 폴백
  return res.json(question);
}

module.exports = { generate };
