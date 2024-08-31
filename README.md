# node-express-mongoose-commonjs-example

이 프로젝트는 Node.js 환경에서 Express와 MongoDB(Mongoose)를 사용하여 기본적인 CRUD(생성, 읽기, 수정, 삭제) 기능을 구현한 웹 애플리케이션입니다. CommonJS 모듈 시스템을 사용하여 모듈을 관리하며, 할 일을 관리하는 기능을 지원합니다. 이 예제를 통해 Node.js, Express, Mongoose의 핵심 개념을 학습하고 실습할 수 있습니다.

## 프로젝트 구조

```plaintext
node-express-mongoose-commonjs-example/
│
├── controllers/          # API 요청을 처리하는 컨트롤러 파일 저장 디렉토리
│   └── task.controller.js # 할 일(Task) 관련 로직을 처리하는 컨트롤러 파일
│
├── models/               # Mongoose 스키마 정의 파일 저장 디렉토리
│   └── Task.js            # 할 일(Task) 스키마 및 모델 정의 파일
│
├── routes/               # 라우트 파일 저장 디렉토리
│   ├── index.js           # 기본 라우트 파일
│   └── task.api.js        # 할 일(Task) 관련 라우트를 정의하는 파일
│
├── .env                  # 환경 변수 파일 (MongoDB 연결 URL 등)
├── server.js             # Express 서버 설정 및 실행 파일
├── package.json          # 프로젝트 메타데이터 및 의존성 관리 파일
├── package-lock.json     # 정확한 의존성 버전을 기록한 파일
└── README.md             # 프로젝트 설명서
```

## 기술 스택

- **Node.js**: 서버 사이드 JavaScript 런타임 환경으로, 비동기적이고 이벤트 기반의 애플리케이션을 개발할 수 있습니다.
- **Express**: Node.js 웹 애플리케이션 프레임워크로, 빠르고 간편하게 RESTful API 서버를 구축할 수 있습니다.
- **Mongoose**: MongoDB의 객체 데이터 모델링(ODM) 라이브러리로, MongoDB와의 데이터 조작을 쉽게 해줍니다.
- **MongoDB**: NoSQL 데이터베이스로, JSON과 유사한 도큐먼트를 사용하여 데이터를 저장합니다.
- **dotenv**: 환경 변수들을 파일에 저장하여 관리하고, 이를 Node.js 애플리케이션에 로드하는 모듈입니다.
- **cors**: 웹 애플리케이션에서 다른 출처의 리소스에 접근할 수 있도록 설정해주는 미들웨어입니다.
- **body-parser**: HTTP 요청의 본문을 해석하여 req.body 객체로 만들어주는 미들웨어입니다.
- **Nodemon**: 코드 변경 시 자동으로 서버를 재시작해주는 도구로, 개발 시 유용합니다.

## CommonJS 모듈 시스템

- **특징**: CommonJS는 Node.js의 기본 모듈 시스템으로, `require`와 `module.exports`를 사용하여 모듈을 가져오고 내보냅니다. 동기적 모듈 로딩을 지원하며, 간단하고 직관적인 방법으로 모듈을 관리할 수 있습니다.
- **예시**:
  ```javascript
  const express = require('express');
  module.exports = app;
  ```

## ESM(ECMAScript Module) 시스템

- **특징**: ESM은 ES6(ECMAScript 2015) 표준에 따라 모듈을 처리하는 현대적이고 모듈화된 방법입니다. import와 export를 사용하여 모듈을 가져오고 내보냅니다. 비동기적 모듈 로딩을 지원하며, 최신 JavaScript 표준을 따릅니다.
- **예시**:
  ```javascript
  import express from 'express';
  export default app;
  ```
  
### CommonJS vs ESM

- CommonJS는 동기적 모듈 로딩을 지원하여 간단하고 직관적이지만, ES Module(ESM)보다 유연성이 떨어집니다. ESM은 더 나은 모듈화와 비동기적 로딩을 지원하여 최신 JavaScript 프로젝트에서 많이 사용됩니다.
- ESM은 JavaScript의 최신 표준을 따르며, 모듈을 더 유연하고 모듈화된 방식으로 처리할 수 있습니다.

## 사용 방법

1. 프로젝트를 클론합니다:

   ```bash
   git clone <repository-url>

   ```

2. 프로젝트 디렉토리로 이동합니다:

   ```bash
   cd node-express-mongoose-commonjs-example

   ```

3. 필요한 의존성을 설치합니다:

   ```bash
   npm install

   ```

4. `.env` 파일을 생성하고 MongoDB 연결 URL을 설정합니다:

   ```bash
   MONGODB_LOCAL=mongodb://localhost:27017/your-database-name

   ```

5. 개발 서버를 실행합니다:

   ```bash
   npm start

   ```

   - 이 명령어는 nodemon을 사용하여 개발 서버를 실행하며, 코드 변경 시 자동으로 서버를 재시작합니다.

5. 브라우저에서 `http://localhost:5000`로 접근하여 프로젝트를 확인할 수 있습니다.

## API 엔드포인트

- `POST /api/tasks` - 새로운 할 일을 추가합니다.
- `GET /api/tasks` - 모든 할 일 목록을 조회합니다.
- `PUT /api/tasks/` - 특정 할 일을 업데이트합니다.
- `DELETE /api/tasks/` - 특정 할 일을 삭제합니다.

## 주요 파일 설명

- `server.js`: Express 서버 설정 및 MongoDB 연결을 설정하는 메인 파일입니다.
- `controllers/task.controller.js`: 할 일 추가, 조회, 수정 및 삭제 기능을 처리하는 로직을 포함합니다.
- `models/Task.js`: MongoDB 할 일 스키마를 정의하는 파일입니다.
- `routes/task.api.js`: API 경로와 컨트롤러 함수를 매핑하는 라우트 파일입니다.

## 참고 자료

- [Express 공식 문서](https://expressjs.com/)
- [Mongoose 공식 문서](https://mongoosejs.com/)
- [MongoDB 공식 문서](https://www.mongodb.com/ko-kr/docs/)
- [dotenv 공식 문서](https://www.npmjs.com/package/dotenv)
- [body-parser 공식 문서](https://www.npmjs.com/package/body-parser)
- [nodemon 공식 문서](https://www.npmjs.com/package/nodemon)

## License

[MIT License](LICENSE).