// 2탄 라우터 만들기 시작
// 1. 백엔드에 필요한 기능 정의하기
// 1-1. 프론트엔드에서 호출할 백앤드 주소를 정의
// 1-2. 한 주소당 하나의 기능

// 2. 주소 디자인 하기
// 2-1. rest API 방식: `Restful Route` 또는 `RestApi` 로 불림
/* 
  [rest API 방식]

  - 할일 추가       post /tasks
  - 할일 보여주기    get /tasks
  - 할일 수정하기    put /tasks/:id
  - 할일 삭제하기    delete /tasks/:id 
  
*/

// 3. 라우트 만들기
const express = require("express");
const router = express.Router();
const taskApi = require("./task.api");

// 라우트 코드 정리하는 법 ex) /tasks, /products
router.use("/tasks", taskApi);

module.exports = router;
