import { ReactNode, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

import icon1 from "../assets/icons/panel1.svg";
import icon2 from "../assets/icons/panel2.svg";
import icon3 from "../assets/icons/panel3.svg";
import icon4 from "../assets/icons/panel4.svg";
import icon5 from "../assets/icons/panel5.svg";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import youtube from "../assets/icons/youtube.svg";
import caliGif from "../assets/cali.gif";
import boringImg from "../assets/boring.png";

import {
   FlexColumnDiv,
   H3Template,
   TextTemplate,
   Link,
   H2Template,
} from "./00_SCTemplate";
import { configs } from "./02_stackConfigs";
import { PageTurnerLeft, PageTurnerRight } from "./03_projectsComp";

const PanelWrap = styled.div`
   width: 100%;
   height: 100%;
   padding: 10vh 2vw 0;
   box-sizing: border-box;
   display: flex;
   justify-content: space-around;
   align-items: start;
`;

const PanelItem = styled(FlexColumnDiv)`
   width: 10vw;
   margin: 1vw;
   justify-content: center;
   align-items: center;
   text-align: center;
`;

interface IconProps {
   bgimage?: string;
}

const PanelIcon = styled.div<IconProps>`
   background-color: ${(props) => props.theme.colors.bg3};
   background-image: ${({ bgimage }) => (bgimage ? `url(${bgimage})` : "none")};
   background-position: center;
   background-repeat: no-repeat;
   background-size: 50%;
   border-radius: 50%;
   width: 10vh;
   height: 10vh;
   box-shadow: 3px 3px 5px ${(props) => props.theme.colors.bg4};
`;

const PanelBook = styled(PanelIcon)`
   border-radius: 0;
   background-size: 100%;
`;

const PanelTitle = styled(H3Template)`
   margin-block-start: 0.5em;
   margin-block-end: 0.5em;
`;

const Text = styled(TextTemplate)`
   margin: 0;
   margin-block-end: 0.5em;
   font-size: 1rem;
`;

interface PreviewProps {
   x: number;
   y: number;
   key?: string;
}

const PreviewWrap = styled.div<PreviewProps>`
   position: absolute;
   width: 20vw;
   background-color: ${(props) => props.theme.colors.bg3};
   padding: 10px;
   border-radius: 15px;
   top: ${({ y }) => `${y}px`};
   left: ${({ x }) => `${x}px`};
`;

export const Panel1 = () => {
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   const [preview, setPreview] = useState("");
   const wrapRef = useRef<HTMLDivElement | null>(null);

   const inputCoordinates = (e: React.MouseEvent) => {
      const rect = wrapRef.current
         ? wrapRef.current.getBoundingClientRect()
         : null;
      if (rect) {
         setMousePosition({
            x: e.pageX - rect.left - window.scrollX + 10,
            y: e.pageY - rect.top - window.scrollY - 150,
         });
      }
   };
   const handleCaligraph = (e: React.MouseEvent) => {
      inputCoordinates(e);
      setPreview("caligraph");
   };

   return (
      <PanelWrap ref={wrapRef}>
         <PanelItem>
            <PanelIcon bgimage={icon1} />
            <PanelTitle>잡학다식</PanelTitle>
            <Text>
               <Link icon={youtube} href="https://youtu.be/M1xcKFOq2DU">
                  음악(피아노)
               </Link>
               ,
               <Link
                  onMouseEnter={handleCaligraph}
                  onMouseLeave={() => setPreview("")}
               >
                  캘리그라피
               </Link>
               , 수학 및 과학 등 여러 분야에 지식과 경험이 있음
            </Text>
         </PanelItem>
         <PanelItem>
            <PanelIcon bgimage={icon2} />
            <PanelTitle>발표능력</PanelTitle>
            <Text>
               수업 때 발표를 즐겨 맡았으며, 간단한 발표도 10분 정도의 준비로
               가능함
            </Text>
         </PanelItem>
         <PanelItem>
            <PanelIcon bgimage={icon3} />
            <PanelTitle>가르치기</PanelTitle>
            <Text>
               통분을 모르는 사람에게 미분방정식까지 가르쳐 준 적이 있음
            </Text>
         </PanelItem>
         {preview === "caligraph" && (
            <PreviewWrap x={mousePosition.x} y={mousePosition.y}>
               <img
                  src={caliGif}
                  alt="Caligraph"
                  style={{ width: "100%" }}
               ></img>
               직접 쓴 글씨입니다 (agitato)
            </PreviewWrap>
         )}
      </PanelWrap>
   );
};
export const Panel2 = () => {
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   const [preview, setPreview] = useState("");
   const wrapRef = useRef<HTMLDivElement | null>(null);

   const inputCoordinates = (e: React.MouseEvent) => {
      const rect = wrapRef.current
         ? wrapRef.current.getBoundingClientRect()
         : null;
      if (rect) {
         setMousePosition({
            x: e.pageX - rect.left - window.scrollX + 10,
            y: e.pageY - rect.top - window.scrollY - 150,
         });
      }
   };
   const handleBoring = (e: React.MouseEvent) => {
      inputCoordinates(e);
      setPreview("boring");
   };
   return (
      <PanelWrap ref={wrapRef}>
         <PanelItem>
            <PanelIcon bgimage={icon4} />
            <PanelTitle>반복작업</PanelTitle>
            <Text>
               <Link
                  onMouseEnter={handleBoring}
                  onMouseLeave={() => setPreview("")}
               >
                  지루하고 반복적인 작업
               </Link>
               에 약해요
            </Text>
         </PanelItem>
         <PanelItem>
            <PanelIcon bgimage={icon5} />
            <PanelTitle>거절하기</PanelTitle>
            <Text>남의 부탁을 거절하는 것이 조금 어려워요</Text>
         </PanelItem>
         {preview === "boring" && (
            <PreviewWrap x={mousePosition.x} y={mousePosition.y}>
               <img
                  src={boringImg}
                  alt="Boring"
                  style={{ width: "100%" }}
               ></img>
               import문이 너무 많아서 GPT에게 부탁했습니다
            </PreviewWrap>
         )}
      </PanelWrap>
   );
};
export const Panel3 = () => {
   return (
      <PanelWrap style={{ paddingTop: "5vh" }}>
         <PanelItem>
            <PanelBook
               bgimage={book1}
               style={{ height: "12.8vh", marginTop: "0.96vh" }}
            />
            <PanelTitle style={{ fontSize: "1.1rem" }}>
               오준석의 플러터
               <br />
               생존 코딩
            </PanelTitle>
            <Text>오준석 지음</Text>
            <Text>취미로 코딩하던 때 테스트 코드를 작성했습니다</Text>
         </PanelItem>
         <PanelItem>
            <PanelBook bgimage={book2} style={{ height: "13.76vh" }} />
            <PanelTitle style={{ fontSize: "1.1rem" }}>
               비전공자를 위한
               <br />
               이해할 수 있는 IT지식
            </PanelTitle>
            <Text>최원영 지음</Text>
            <Text>
               여러 출처로 얻은 지식들을 조각모음 하는 데에 유용했습니다
            </Text>
         </PanelItem>
         <PanelItem>
            <PanelBook
               bgimage={book3}
               style={{ height: "12.86vh", marginTop: "0.9vh" }}
            />
            <PanelTitle style={{ fontSize: "1.1rem" }}>
               밑바닥부터 시작하는
               <br />
               딥러닝 1, 2
            </PanelTitle>
            <Text>사이토 고키 저</Text>
            <Text>
               딥러닝 모델과 학습에 대한 개괄적인 개념을 익히고, 간단한 모델
               구현을 했습니다
            </Text>
         </PanelItem>
      </PanelWrap>
   );
};
const PanelPageWrap = styled.div`
   overflow: hidden;
`;
export const Panel4 = () => {
   const [pageIndex, setPageIndex] = useState(0);
   const handlePageLeft = () => {
      setPageIndex(pageIndex - 1);
   };

   const handlePageRight = () => {
      setPageIndex(pageIndex + 1);
   };
   return (
      <div>
         <PageTurnerLeft
            onClick={handlePageLeft}
            style={{ display: pageIndex === 0 ? "none" : "block", left: "2vw" }}
         />
         <PageTurnerRight
            onClick={handlePageRight}
            style={{
               display: pageIndex === 1 ? "none" : "block",
               right: "2vw",
            }}
         />
         {pageIndex === 0 && <Panel4Pg1 />}
         {pageIndex === 1 && <Panel4Pg2 />}
      </div>
   );
};
const PageWrap = styled.div`
   width: 100%;
   height: 100%;
   padding: 6vh 3vw 0;
`;
const PageTitle = styled(H3Template)`
   left: 0;
   margin-bottom: 3vh;
`;
const InfoWrap = styled.div`
   display: flex;
   justify-content: baseline;
   align-items: center;
   margin-left: 1vw;
   margin-bottom: 1vh;
`;
const InfoLabel = styled(TextTemplate)`
   width: 7vw;
   font-weight: bold;
`;
const InfoContent = styled(TextTemplate)``;
interface InfoProps {
   label: string;
   content: string;
}
const InfoBold = (props: InfoProps) => {
   return (
      <InfoWrap>
         <InfoLabel>{props.label}</InfoLabel>
         <InfoContent>{props.content}</InfoContent>
      </InfoWrap>
   );
};
const Info = (props: InfoProps) => {
   return (
      <InfoWrap>
         <InfoContent style={{ width: "10vw", textAlign: "center" }}>
            {props.label}
         </InfoContent>
         <InfoContent>{props.content}</InfoContent>
      </InfoWrap>
   );
};
const Panel4Pg1 = () => {
   return (
      <PageWrap>
         <PageTitle>기본정보</PageTitle>
         <InfoBold label="이름" content="유열림" />
         <InfoBold label="생년월일" content="1994.06.04" />
         <InfoBold label="주소" content="경기도 수원시 장안구" />
         <PageTitle>병역사항</PageTitle>
         <InfoBold label="기간" content="2016.05.31 ~ 2018.02.28" />
         <InfoBold label="내용" content="육군 병장 만기전역 (TOD 운용병)" />
      </PageWrap>
   );
};
const EduInfoWrap = styled.div`
   padding-left: 1vw;
`;
const EduInfo = (props: InfoProps) => {
   return (
      <InfoWrap style={{ marginBottom: "0.5vh" }}>
         <InfoLabel style={{ width: "5vw", fontWeight: "normal" }}>
            {props.label}
         </InfoLabel>
         <InfoContent>{props.content}</InfoContent>
      </InfoWrap>
   );
};
const Panel4Pg2 = () => {
   return (
      <PageWrap>
         <PageTitle style={{ marginBottom: "2vh" }}>학력 및 교육사항</PageTitle>
         <Info
            label="2013.03 ~ 2019.08"
            content="경기대학교 수학과 학사과정 졸업"
         />
         <Info
            label="2022.11 ~ 2023.02"
            content="코리아IT아카데미 JAVA기반 백엔드 수료"
         />
         <EduInfoWrap>
            <EduInfo label="교육기관" content="코리아 IT 아카데미 부산점" />
            <EduInfo
               label="교육과정"
               content="JAVA 기반 백엔드 개발자 양성과정"
            />
            <EduInfo label="교육시간" content="09:00 ~ 13:00 (주 5일)" />
            <EduInfo label="교육내용" content="JAVA 기초문법과 디자인패턴" />
            <EduInfo label="" content="데이터베이스 구성 및 MySQL" />
            <EduInfo
               label=""
               content="HTML, CSS, Javascript를 이용한 프론트엔드 구성"
            />
            <EduInfo label="" content="Spring Boot를 사용한 백엔드 구성" />
            <EduInfo
               label=""
               content="React / Spring Boot / MySQL 기반의 팀프로젝트 (팀장 역)"
            />
         </EduInfoWrap>
      </PageWrap>
   );
};
