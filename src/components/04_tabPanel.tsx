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

import { FlexColumnDiv, H3Template, TextTemplate, Link } from "./00_SCTemplate";
import { configs } from "./02_stackConfigs";

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
