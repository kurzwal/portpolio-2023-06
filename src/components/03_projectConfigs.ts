import webIcon from "../assets/icons/html&css.svg";
import javaIcon from "../assets/icons/java.svg";
import jsIcon from "../assets/icons/javascript.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import nodejsIcon from "../assets/icons/nodejs.svg";
import reactIcon from "../assets/icons/react.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import vscodeIcon from "../assets/icons/vscode.svg";
import muiIcon from "../assets/icons/mui.svg";
import postmanIcon from "../assets/icons/postman.svg";
import eclipseIcon from "../assets/icons/eclipse.svg";
import chatgptIcon from "../assets/icons/chatgpt.svg";

export interface EnvProps {
   name: string;
   icons: string[];
   contents: string[];
   sizes?: string[];
}

export const frontConfigs: EnvProps[] = [
   {
      name: "개발 언어",
      icons: [webIcon, jsIcon],
      contents: ["HTML & CSS", "JS"],
      sizes: ["20%", "100%"],
   },
   {
      name: "IDE",
      icons: [vscodeIcon],
      contents: ["VSCode"],
   },
   {
      name: "사용 툴",
      icons: [nodejsIcon, postmanIcon],
      contents: ["Node.js", "Postman"],
   },
   {
      name: "라이브러리",
      icons: [reactIcon, typescriptIcon, muiIcon, ""],
      contents: ["React", "TypeScript", "MUI", "Zustand"],
   },
   {
      name: "외부 API",
      icons: ["", ""],
      contents: ["카카오 맵 API", "DaumPostCode"],
   },
];

export const backConfigs: EnvProps[] = [
   {
      name: "개발 언어",
      icons: [javaIcon],
      contents: ["Java11"],
   },
   {
      name: "DB",
      icons: [mysqlIcon],
      contents: ["MySQL (workbench)"],
   },
   {
      name: "IDE",
      icons: [eclipseIcon],
      contents: ["Eclipse"],
   },
   {
      name: "라이브러리",
      icons: ["", "", ""],
      contents: ["SpringBoot", "SpringWeb", "Spring JPA"],
   },
   {
      name: "",
      icons: ["", "", ""],
      contents: ["Lombok", "jjwt", "JavaMailSender"],
   },
];

export const frontConfigs2: EnvProps[] = [
   {
      name: "개발 언어",
      icons: [webIcon, jsIcon],
      contents: ["HTML & CSS", "JS"],
      sizes: ["100%", "100%"],
   },
   {
      name: "IDE",
      icons: [vscodeIcon],
      contents: ["VSCode"],
   },
   {
      name: "라이브러리",
      icons: [reactIcon, typescriptIcon, muiIcon, ""],
      contents: ["React", "TypeScript", "MUI", "axios"],
   },
   {
      name: "",
      icons: ["", "", ""],
      contents: ["Colyseus", "Phaser3", "React-oauth/google"],
   },
];

export const backConfigs2: EnvProps[] = [
   {
      name: "개발 언어",
      icons: [jsIcon],
      contents: ["JavaScript"],
   },
   {
      name: "DB",
      icons: [mongodbIcon],
      contents: ["MongoDB (Atlas)"],
      sizes: ["10%"],
   },
   {
      name: "사용 툴",
      icons: [nodejsIcon, chatgptIcon],
      contents: ["Node.js", "ChatGPT"],
   },
   {
      name: "라이브러리",
      icons: [typescriptIcon, "", ""],
      contents: ["TypeScript", "Colyseus", "Express"],
   },
   {
      name: "",
      icons: ["", "", ""],
      contents: ["JWT", "MongoDBClient", "Nodemon"],
   },
];
