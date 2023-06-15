import dartIcon from "../assets/icons/dart.svg";
import gitIcon from "../assets/icons/git.svg";
import webIcon from "../assets/icons/html&css.svg";
import javaIcon from "../assets/icons/java.svg";
import jsIcon from "../assets/icons/javascript.svg";
import mathIcon from "../assets/icons/mathematics.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import nodejsIcon from "../assets/icons/nodejs.svg";
import pythonIcon from "../assets/icons/python.svg";

export interface ButtonConfig {
   name: string;
   size: number;
   color: string;
   icon: string;
   pos: number[];
   bgsize?: number;
}

export const configs: ButtonConfig[] = [
   {
      name: "Java",
      size: 10,
      color: "#f58219",
      icon: javaIcon,
      pos: [10, 20],
   },
   {
      name: "JavaScript (Front)",
      size: 10,
      color: "#9e8e11",
      icon: jsIcon,
      pos: [6, 10],
   },
   {
      name: "Node.js (Back)",
      size: 10,
      color: "#528a15",
      icon: nodejsIcon,
      pos: [16.5, 11.5],
   },
   {
      name: "MySQL",
      size: 6,
      color: "#2290af",
      icon: mysqlIcon,
      pos: [3.8, 19.5],
   },
   {
      name: "MongoDB",
      size: 6,
      color: "#95c57a",
      icon: mongodbIcon,
      pos: [4.5, 26],
      bgsize: 80,
   },
   {
      name: "Math",
      size: 6,
      color: "#75cae7",
      icon: mathIcon,
      pos: [20.5, 22],
   },
   {
      name: "HTML & CSS",
      size: 6,
      color: "#b1b1b1",
      icon: webIcon,
      pos: [18.5, 28.5],
      bgsize: 120,
   },
   {
      name: "Git",
      size: 6,
      color: "#e3aa83",
      icon: gitIcon,
      pos: [11, 30.5],
   },
   {
      name: "Dart",
      size: 4,
      color: "#79a3c0",
      icon: dartIcon,
      pos: [6.5, 32.5],
   },
   {
      name: "Python",
      size: 4,
      color: "#a3946c",
      icon: pythonIcon,
      pos: [16.6, 34],
   },
];

export const description: { [key: string]: string[] } = {
   Java: [
      "객체 지향 프로그래밍에 대한 이해도가 높습니다",
      "클래스 개념을 엑셀의 행에 비유하어 팀원의 이해를 도운 적이 있습니다",
      "디자인 패턴의 목적과 의미를 알고 잘 활용합니다",
      "MVC, 싱글톤, 빌더 등의 패턴 구조를 만들 수 있습니다",
      "소제목",
      "내용",
      "사용한 프레임워크 및 라이브러리",
      "Spring Boot 2.7.8, Spring Web, JPA, JJWT, Lombok 등",
   ],
   "JavaScript (Front)": [
      "비동기처리를 적절하게 핸들링할 수 있습니다",
      "Promise, async 함수 등을 활용하여 동기적/비동기적 처리를 할 수 있습니다",
      "여러 라이브러리를 활용하며, React사용에 능숙합니다",
      "React Hooks, Typescript을 비롯하여 많은 라이브러리를 사용해봤습니다",
      "소제목",
      "내용",
      "사용한 라이브러리",
      "React, Typescript, Axios, Colyseus(WebSocket), Styled Components, MUI, Phaser, Zustand 등",
   ],
   "Node.js (Back)": [
      "Express, WebSocket, MongoDB Client를 활용한 백엔드 구축이 가능합니다",
      "　",
      "Google OAuth 2.0와 JWT를 이용하여 보안된 계정관리가 가능합니다",
      "JWT의 해시코드 방식이나 RSA암호화 등의 이론적인 로직을 이해하고 있습니다",
      "소제목",
      "내용",
      "사용한 라이브러리",
      "Express, Passport, Colyseus, JsonWebToken 등",
   ],
   MySQL: [
      "관계형 데이터베이스에 대해 이해하고 있습니다",
      "정규화와 JOIN을 관계형 데이터베이스의 목적에 맞게 설계할 수 있습니다",
      "B-Tree 구조에서 시간복잡도가 적은 방향으로 쿼리문을 작성할 수 있습니다",
      "적절한 인덱싱으로 검색기능의 효율 향상에 기여할 수 있습니다",
      "소제목",
      "내용",
      "사용한 라이브러리",
      "라이브러리명",
   ],
   MongoDB: [
      "문서형 데이터베이스의 비정형화된 데이터를 다룰 수 있습니다",
      "데이터의 확장성이 중요할 때 NoSQL기반의 데이터베이스를 다룰 수 있습니다",
      "소제목",
      "내용",
      "소제목",
      "내용",
      "사용한 라이브러리",
      "라이브러리명",
   ],
   Math: [
      "수학과를 졸업하여 여러 수학적인 로직을 만들 수 있습니다",
      "미적분학, 암호학, 기하학, 통계학 등을 이수하여 프로그래밍에 접목할 수 있습니다",
      "소제목",
      "(현재 스택 버튼 요소의 움직임도 좌표평면의 Delta값을 기반으로 움직이게 구현하였습니다)",
      "소제목",
      "내용",
      "사용해본 언어",
      "R을 사용하여 통계모델을 만들고 발표한 적이 있습니다. MATLAB도 학사수준에서 사용해본 경험이 있습니다.",
   ],
   "HTML & CSS": [
      "스태틱한 웹페이지 제작이 가능합니다",
      "EJS, Bootstrap를 활용한 웹페이지도 제작할 수 있습니다",
      "소제목",
      "내용",
      "소제목",
      "내용",
      "사용한 라이브러리",
      "EJS, Bootstrap",
   ],
   Git: [
      "Git Bash를 활용한 형상관리를 할 수 있습니다",
      "팀프로젝트에서 팀원들이 Git에 대한 이해도가 부족할 때, Push시의 메뉴얼을 제공하고 Trunk based 전략으로 형상관리를 전담했습니다",
      "소제목",
      "내용",
      "소제목",
      "내용",
      "사용한 라이브러리",
      "라이브러리명",
   ],
   Dart: [
      "Flutter 기반의 크로스플랫폼 어플 개발에 대한 지식이 있습니다",
      "'오준석의 플러터 생존 코딩'이라는 책을 읽으며 여러 위젯의 테스트 코드를 작성했습니다",
      "소제목",
      "내용",
      "소제목",
      "내용",
      "사용한 라이브러리",
      "라이브러리명",
   ],
   Python: [
      "딥러닝 모델을 구축한 경험이 있습니다",
      "Pandas, TensorFlow, Numpy등을 사용하여 간단한 딥러닝 모델을 구축했습니다. '밑바닥부터 시작하는 딥러닝'책을 참고했습니다",
      "람다식을 활용한 함수형 프로그래밍이 익숙합니다",
      "수학적 지식을 바탕으로 하여 고급 언어로써의 람다식에 익숙합니다",
      "소제목",
      "내용",
      "사용한 라이브러리",
      "Pandas, TensorFlow, Numpy, Pickle 등",
   ],
};
