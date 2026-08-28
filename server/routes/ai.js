const express = require("express");
const router = express.Router();
const { generate } = require("../controllers/aiController");

// POST /api/ai/generate — config.js의 AI_PROXY_URL이 가리키는 엔드포인트.
// 클라이언트는 이 경로로만 AI 문제 생성을 요청하므로 AI_API_KEY가 브라우저에
// 노출될 일이 없다.
router.post("/generate", generate);

module.exports = router;
