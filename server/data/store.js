/* =========================================================
   store.js — 아주 단순한 파일 기반 저장소 (spec에서 요구한 "서버 채점/검증"을
   실제로 동작하게 만들기 위한 최소 구현). 프로덕션에서는 실제 DB(Firestore,
   PostgreSQL 등)로 교체해야 한다 — README에서 이 한계를 명시한다.
   ========================================================= */
const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "competitions.json");

function readAll() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch (err) {
    console.warn("store: failed to read, starting empty.", err);
    return [];
  }
}

function writeAll(records) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2));
  } catch (err) {
    console.error("store: failed to write.", err);
  }
}

function append(record) {
  const all = readAll();
  all.push(record);
  writeAll(all);
  return record;
}

module.exports = { readAll, writeAll, append };
