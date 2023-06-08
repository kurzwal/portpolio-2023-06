import { useState } from "react";
import styled from "styled-components";
import {
   FlexColumnDiv,
   H2Template,
   H3Template,
   TextTemplate,
} from "./00_SCTemplate";
import {
   EnvProps,
   backConfigs,
   backConfigs2,
   frontConfigs,
   frontConfigs2,
} from "./03_projectConfigs";

import mvcImg from "../assets/mvcdesc.png";
import cpzGif from "../assets/cpztest.gif";

interface PosProps {
   posX: string;
   trans: string;
}
const ContentWrap = styled.div<PosProps>`
   width: 70%;
   height: 25vh;
   top: 17vh;
   left: ${({ posX }) => posX};
   position: absolute;
   overflow: hidden;
   transition: ${({ trans }) => trans};
`;

type ColorProps = {
   bgcolor: string;
};

type HoverProps = {
   onMouseEnter: Function;
   onMouseLeave: Function;
   hovered: string;
};

const HalfTemplate = styled(FlexColumnDiv)<ColorProps>`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   transition: all 0.3s ease;
   padding: 4vh;
   box-sizing: border-box;
   align-items: center;
   background-color: ${({ bgcolor }) => bgcolor};
`;

const Front = styled(HalfTemplate)<HoverProps>`
   clip-path: ${(props) =>
      props.hovered === "front"
         ? "polygon(0% 0%, 160% 0%, 0% 160%)"
         : props.hovered === "back"
         ? "polygon(0% 0%, 40% 0%, 0% 40%)"
         : "polygon(0% 0%, 100% 0%, 0% 100%)"};
   justify-content: baseline;
`;

const FrontTitle = styled(H3Template)`
   position: absolute;
   top: 0;
   left: 1vw;
   line-height: 1.4rem;
   cursor: default;
`;

const Back = styled(HalfTemplate)<HoverProps>`
   clip-path: ${(props) =>
      props.hovered === "front"
         ? "polygon(100% 60%, 100% 100%, 60% 100%)"
         : props.hovered === "back"
         ? "polygon(100% -60%, 100% 100%, -60% 100%)"
         : "polygon(100% 0%, 100% 100%, 0% 100%)"};
   justify-content: end;
`;

const BackTitle = styled(H3Template)`
   position: absolute;
   bottom: 0;
   right: 1vw;
   line-height: 1.4rem;
   cursor: default;
`;

const EnvContainer = styled.div`
   display: flex;
   justify-content: baseline;
   width: 70%;
   margin-bottom: 0.5vh;
`;

const EnvName = styled.div`
   font-weight: bold;
   width: 25%;
`;

const EnvDetail = styled.div`
   display: flex;
   width: 75%;
`;

const EnvTagWrap = styled.div`
   display: flex;
   margin-bottom: 0.5vh;
`;

interface EnvTagProps {
   icon?: string;
   size?: string;
   children?: string;
}

const EnvIcon = styled.div<EnvTagProps>`
   width: ${({ icon }) => (icon ? "1.3rem" : "0")};
   height: ${({ icon }) => (icon ? "1.3rem" : "0")};
   margin-right: 0.2rem;
   display: inline-block;
   vertical-align: bottom;
   background-image: ${({ icon }) => (icon ? `url(${icon})` : "none")};
   background-position: center;
   background-repeat: no-repeat;
   background-size: ${({ size }) => (size ? `${size}` : "100%")};
`;

const EnvText = styled.div`
   margin-right: 0.5rem;
   white-space: nowrap;
`;

const PageSmallTitle = styled(H3Template)`
   margin: 0;
`;
const ContentLabel = styled.div`
   font-weight: bold;
   width: 15%;
   font-size: 1.1rem;
`;
const ContentValue = styled.div`
   width: 85%;
   font-size: 1.1rem;
`;
export const Pj1Page1 = (props: PosProps) => {
   const contents = [
      { 기간: "2023.01 ~ 2023.02 (약 2개월)" },
      { 인원: "5명" },
      { 담당: "프로젝트 리더로써 Trunk-Based 전략의 형상관리 전담" },
      { "": "프론트엔드의 메인 화면 SPA 제작" },
      {
         "": "카카오 지도 API를 이용한 사용자 위치 기반의 공원 추천 서비스 구현",
      },
      { "": "백엔드 MVC패턴의 가이드라인 제시" },
   ];

   return (
      <ContentWrap posX={props.posX} trans={props.trans}>
         <FlexColumnDiv>
            {contents.map((content) => {
               const [key, value] = Object.entries(content)[0];
               return (
                  <FlexSBDiv key={value} style={{ marginBottom: "10px" }}>
                     <ContentLabel>{key}</ContentLabel>
                     <ContentValue>{value}</ContentValue>
                  </FlexSBDiv>
               );
            })}
         </FlexColumnDiv>
      </ContentWrap>
   );
};

const EnvTag = (props: EnvTagProps) => {
   return (
      <EnvTagWrap>
         <EnvIcon icon={props.icon} size={props.size} />
         <EnvText>{props.children}</EnvText>
      </EnvTagWrap>
   );
};

const EnvComp = ({ name, icons, contents, sizes }: EnvProps) => {
   return (
      <EnvContainer>
         <EnvName>{name}</EnvName>
         <EnvDetail>
            {icons.map((icon, index) => (
               <EnvTag icon={icon} size={sizes ? sizes[index] : ""}>
                  {contents[index]}
               </EnvTag>
            ))}
         </EnvDetail>
      </EnvContainer>
   );
};

export const Pj1Page2 = (props: PosProps) => {
   const [hovered, setHovered] = useState("");
   return (
      <ContentWrap
         posX={props.posX}
         trans={props.trans}
         style={{ borderRadius: "15px" }}
      >
         <Front
            onMouseEnter={() => setHovered("front")}
            onMouseLeave={() => setHovered("")}
            hovered={hovered}
            bgcolor="#bbdfba"
         >
            <FrontTitle>Front</FrontTitle>
            {frontConfigs.map((config) => (
               <EnvComp
                  name={config.name}
                  icons={config.icons}
                  contents={config.contents}
               />
            ))}
         </Front>
         <Back
            onMouseEnter={() => setHovered("back")}
            onMouseLeave={() => setHovered("")}
            hovered={hovered}
            bgcolor="#df998e"
         >
            <BackTitle>Back</BackTitle>
            {backConfigs.map((config) => (
               <EnvComp
                  name={config.name}
                  icons={config.icons}
                  contents={config.contents}
               />
            ))}
         </Back>
      </ContentWrap>
   );
};
const FlexSBDiv = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80%;
`;

const ImgContainer = styled.img`
   margin-top: -10%;
   margin-right: 10%;
   margin-left: 10%;
   width: auto;
`;

const DescText = styled.div`
   font-size: 1rem;
   margin-top: 0.3rem;
   margin-bottom: 0.5rem;
   color: ${(props) => props.theme.colors.text2};
   align-self: center;
`;

export const Pj1Page3 = (props: PosProps) => {
   return (
      <ContentWrap posX={props.posX} trans={props.trans}>
         <PageSmallTitle>팀원에게 MVC패턴 강의</PageSmallTitle>
         <FlexSBDiv>
            <TextTemplate>
               프로젝트 진행 초기에, MVC패턴과 JPA사용에서 팀원 간의 역량 차이를
               메우기 위해 자체적으로 특강을 준비한 적이 있습니다.
            </TextTemplate>
            <FlexColumnDiv
               style={{
                  width: "40%",
                  marginLeft: "10%",
                  justifyContent: "end",
               }}
            >
               <ImgContainer src={mvcImg} />
               <DescText>당시 준비한 내용의 일부</DescText>
            </FlexColumnDiv>
         </FlexSBDiv>
      </ContentWrap>
   );
};

export const Pj1Page4 = (props: PosProps) => {
   return (
      <ContentWrap posX={props.posX} trans={props.trans}>
         <PageSmallTitle>프론트엔드의 부족함</PageSmallTitle>
         <TextTemplate>
            백엔드 강의 특성상 프론트엔드 공부에 부족함이 있어서
            <br />
            리액트, 타입스크립트, 상태관리 등 부족한 점이 많아
            <br />
            기능 구현에 보다 많은 시간이 걸리게 되었고,
            <br />
            코드의 일관성 또한 지키지 못한 점이 아쉬웠습니다.
         </TextTemplate>
      </ContentWrap>
   );
};

export const Pj1Page5 = (props: PosProps) => {
   return (
      <ContentWrap posX={props.posX} trans={props.trans}>
         <PageSmallTitle>RESTful API를 구현했습니다</PageSmallTitle>
         <DescText>
            회원 관리, 일정 관리, 공지사항 및 댓글 등 30여개의 API를
            구현했습니다
         </DescText>
         <PageSmallTitle>관계형 데이터베이스를 구축했습니다</PageSmallTitle>
         <DescText>
            MySQL을 통해 정형화된 데이터베이스를 구축하고 쿼리문과 JPA문법으로
            적절하게 데이터를 조작했습니다
         </DescText>
         <PageSmallTitle>
            리액트와 MUI를 사용하여 동적 웹을 구현했습니다
         </PageSmallTitle>
         <DescText>
            카카오 맵 API의 활용을 위해 일부 페이지에 동적인 SPA를 도입했습니다
         </DescText>
      </ContentWrap>
   );
};

export const Pj2Page1 = (props: PosProps) => {
   const contents = [
      { 기간: "2023.03 ~ 2023.05 (약 3개월, 미완성)" },
      { 인원: "1명" },
      { 주요기능: "Google API와 JWT를 사용한 간편 회원가입 기능" },
      { "": "React와 Phaser 라이브러리를 활용한 Game 컴포넌트 구현" },
      { "": "node.js, Express, Colyseus 를 이용한 HTTP, WS통신 구현" },
      { "": "MongoDB 클라이언트를 이용한 회원 및 채팅 데이터 관리" },
   ];

   return (
      <ContentWrap posX={props.posX} trans={props.trans}>
         <FlexColumnDiv>
            {contents.map((content) => {
               const [key, value] = Object.entries(content)[0];
               return (
                  <FlexSBDiv key={value} style={{ marginBottom: "10px" }}>
                     <ContentLabel>{key}</ContentLabel>
                     <ContentValue>{value}</ContentValue>
                  </FlexSBDiv>
               );
            })}
         </FlexColumnDiv>
      </ContentWrap>
   );
};

export const Pj2Page2 = (props: PosProps) => {
   const [hovered, setHovered] = useState("");
   return (
      <ContentWrap
         posX={props.posX}
         trans={props.trans}
         style={{ borderRadius: "15px" }}
      >
         <Front
            onMouseEnter={() => setHovered("front")}
            onMouseLeave={() => setHovered("")}
            hovered={hovered}
            bgcolor="#d0bc49"
         >
            <FrontTitle>Front</FrontTitle>
            {frontConfigs2.map((config) => (
               <EnvComp
                  name={config.name}
                  icons={config.icons}
                  contents={config.contents}
               />
            ))}
         </Front>
         <Back
            onMouseEnter={() => setHovered("back")}
            onMouseLeave={() => setHovered("")}
            hovered={hovered}
            bgcolor="#414141"
            style={{ color: "#fff" }}
         >
            <BackTitle style={{ color: "#fff" }}>Back</BackTitle>
            {backConfigs2.map((config) => (
               <EnvComp
                  name={config.name}
                  icons={config.icons}
                  contents={config.contents}
               />
            ))}
         </Back>
      </ContentWrap>
   );
};

export const Pj2Page3 = (props: PosProps) => {
   return (
      <ContentWrap posX={props.posX} trans={props.trans}>
         <PageSmallTitle>WS 통신과 Phaser 연결</PageSmallTitle>
         <FlexSBDiv>
            <TextTemplate>
               실시간으로 캐릭터의 움직임을 전송하고 받을 수 있도록
               구현하였습니다.
            </TextTemplate>
            <FlexColumnDiv
               style={{
                  width: "40%",
                  marginLeft: "10%",
                  justifyContent: "end",
               }}
            >
               <ImgContainer src={cpzGif} />
               <DescText style={{ textAlign: "center" }}>
                  두 개의 클라이언트에서
                  <br /> 캐릭터 움직임
               </DescText>
            </FlexColumnDiv>
         </FlexSBDiv>
      </ContentWrap>
   );
};

export const Pj2Page4 = (props: PosProps) => {
   return (
      <ContentWrap posX={props.posX} trans={props.trans}>
         <PageSmallTitle>라이브러리간의 호환성 고려</PageSmallTitle>
         <TextTemplate>
            Phaser가 클래스 컴포넌트 기반이기 때문에 <br />
            사용할 때 상태관리를 위해 Redux를 사용해야 했는데, <br />
            Zustand를 사용해서 채팅창 구현에 어려움이 있었습니다.
         </TextTemplate>
      </ContentWrap>
   );
};

export const Pj2Page5 = (props: PosProps) => {
   return (
      <ContentWrap posX={props.posX} trans={props.trans}>
         <PageSmallTitle>1번제목</PageSmallTitle>
         <DescText>
            회원 관리, 일정 관리, 공지사항 및 댓글 등 30여개의 API를
            구현했습니다
         </DescText>
         <PageSmallTitle>관계형 데이터베이스를 구축했습니다</PageSmallTitle>
         <DescText>
            MySQL을 통해 정형화된 데이터베이스를 구축하고 쿼리문과 JPA문법으로
            적절하게 데이터를 조작했습니다
         </DescText>
         <PageSmallTitle>
            리액트와 MUI를 사용하여 동적 웹을 구현했습니다
         </PageSmallTitle>
         <DescText>
            카카오 맵 API의 활용을 위해 일부 페이지에 동적인 SPA를 도입했습니다
         </DescText>
      </ContentWrap>
   );
};
