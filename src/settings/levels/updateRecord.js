import { saveRecords } from "./records.js";
// const recordScore = document.querySelector('.recordScoreNum')
export function updateRecord(records, level, score) {
  if (score > records[level]) {
    records[level] = score;
    // console.log(recordScore)
    // recordScore.textContent = score
    saveRecords(records);
  }
}