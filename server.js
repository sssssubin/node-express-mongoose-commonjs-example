const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const indexRouter = require("./routes/index");
require("dotenv").config();

const app = express(); // express로 앱 만들기
// 앱에 필요한 세팅하기
app.use(cors()); // 코스 에러 막기
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //json 해석해주기

// 9. 테스트
app.use("/api", indexRouter);

const MONGOURL = process.env.MONGODB_URL;
mongoose
  .connect(MONGOURL)
  .then(() => console.log("몽구스 연결됨"))
  .catch((err) => console.log("몽구스 연결 실패", err));

app.listen(5000, () => console.log(`서버 실행 중: http://localhost:5000/api/tasks`));

module.exports = app; // Vercel에서 올바르게 서버를 인식하도록 app을 export합니다.
