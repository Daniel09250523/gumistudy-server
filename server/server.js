/* =========================================================
   server.js — 선택적으로 실행하는 경쟁 모드 채점 검증 + AI 프록시 서버.
   실행하지 않아도 앱은 완전히 동작한다(클라이언트 자체 채점 + 로컬 문제
   은행으로 자동 대체). 이 서버를 실행하고 config.js의 SCORE_SERVER_URL /
   AI_PROXY_URL을 채워 넣으면, spec 33이 요구하는 "서버가 최종 권위를 갖는
   채점"과 "AI 키를 브라우저에 노출하지 않는 프록시"가 실제로 동작한다.

   실행 방법:
     cd server
     npm install
     cp .env.example .env   # AI_API_KEY 등을 채워 넣기 (선택)
     npm start
   ========================================================= */
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const competitionsRouter = require("./routes/competitions");
const aiRouter = require("./routes/ai");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true, service: "gumistudy-server" }));

app.use("/api/competitions", competitionsRouter);
app.use("/api/ai", aiRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`gumistudy-server listening on http://localhost:${PORT}`);
  console.log(`  - 경쟁 모드 채점: POST http://localhost:${PORT}/api/competitions`);
  console.log(`  - AI 문제 생성 프록시: POST http://localhost:${PORT}/api/ai/generate`);
});
