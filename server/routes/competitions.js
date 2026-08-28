const express = require("express");
const router = express.Router();
const { submitCompetition, getRankings } = require("../controllers/competitionController");

// POST /api/competitions — 원시 답안 제출 → 서버가 재채점 → 권위 있는 점수 반환
router.post("/", submitCompetition);

// GET /api/competitions — 저장된 모든 경쟁 기록 (관리자/디버깅용; 실제 랭킹은
// 기본적으로 SharedStore(Firebase/로컬)를 사용하며, 이 엔드포인트는 서버 채점
// 결과를 별도로 들여다볼 때 쓴다)
router.get("/", getRankings);

module.exports = router;
