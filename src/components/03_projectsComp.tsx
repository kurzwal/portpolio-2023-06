import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

import icon1 from "../assets/icons/irulogo.svg";
import icon2 from "../assets/icons/cpz.png";
import github from "../assets/icons/github.svg";
import {
   FlexColumnDiv,
   H2Template,
   TextTemplate,
   Line,
   Link,
} from "./00_SCTemplate";
import { Fade } from "@mui/material";
import { useEffect, useState, cloneElement } from "react";
import {
   Pj1Page1,
   Pj1Page2,
   Pj1Page3,
   Pj1Page4,
   Pj1Page5,
   Pj2Page1,
   Pj2Page2,
   Pj2Page3,
   Pj2Page4,
   Pj2Page5,
} from "./03_projectPages";

const ProjectCard = styled(FlexColumnDiv)`
   border-radius: 10px;
   box-shadow: 3px 3px 10px rgba(30, 30, 30, 0.4);
   background-color: ${(props) => props.theme.colors.bg3};
   box-sizing: border-box;
   padding: 2.2vh;
   width: 49%;
   height: 100%;
   justify-content: space-between;
   cursor: pointer;
   transition: all 0.3s ease;

   &:hover {
      background-color: ${(props) => props.theme.colors.bg4};
   }

   @media (max-width: 768px) {
      padding: 10px 5px;
   }
`;

const FlexDiv = styled.div`
   display: flex;
   align-items: baseline;
`;

interface IconProps {
   icon: string;
   size?: string;
}

const ProjectIcon = styled.div<IconProps>`
   background-image: url(${(props) => props.icon});
   background-size: ${({ size }) => (size ? size : "100%")};
   background-position: center;
   background-repeat: no-repeat;
   width: 1.8rem;
   height: 1.8rem;
`;

const ProjectTitle = styled(H2Template)`
   margin: 0px 10px 0px 15px;
   white-space: nowrap;
   @media (max-width: 768px) {
      margin: 0px 0px 0px 5px;
      width: 3rem;
   }
`;

const ProjectText = styled(TextTemplate)`
   margin: 0px 0px 0px 10px;
   color: ${(props) => props.theme.colors.text2};
   white-space: nowrap;
   @media (max-width: 768px) {
      margin: 0;
      text-align: right;
   }
`;

const DescWrap = styled(FlexColumnDiv)`
   width: 100%;
   height: 100%;
`;

const DetailWrap = styled(FlexColumnDiv)`
   align-items: center;
   box-sizing: border-box;
   padding-bottom: 2vh;
   width: 100%;
   height: 40vh;
   user-select: none;
`;

const PageTitle = styled(H2Template)`
   align-self: baseline;
   margin-left: 4vw;
   margin-top: 2vh;
   margin-bottom: 1.5vh;
`;

const PageTurner = styled.div`
   width: 3rem;
   height: 3rem;
   border-top: 15px solid rgba(255, 255, 255, 0.2);
   border-right: 15px solid rgba(255, 255, 255, 0.2);
   box-shadow: 3px -3px 3px rgba(0, 0, 0, 0.3);
   position: absolute;
   top: 25vh;
   z-index: 3;
   cursor: pointer;
   &:active {
      margin-top: 2px;
      box-shadow: 2px -2px 2px rgba(0, 0, 0, 0.3);
   }
   @media (max-width: 768px) {
      margin-left: 1rem;
      margin-right: 1rem;
   }
`;

export const PageTurnerLeft = styled(PageTurner)`
   transform: rotate(225deg);
   left: 3vw;
`;

export const PageTurnerRight = styled(PageTurner)`
   transform: rotate(45deg);
   right: 3vw;
`;

interface ProjectProps {
   onMouseEnter?: () => void;
}

export const Project1 = (props: ProjectProps) => {
   return (
      <ProjectCard onMouseEnter={props.onMouseEnter}>
         <FlexDiv>
            <ProjectIcon icon={icon1} />
            <ProjectTitle>I Run You</ProjectTitle>
         </FlexDiv>
         <ProjectText>
            SNS 기반 달리기 스케쥴 <wbr />
            공유 서비스
         </ProjectText>
      </ProjectCard>
   );
};

export const Project2 = (props: ProjectProps) => {
   return (
      <ProjectCard onMouseEnter={props.onMouseEnter}>
         <FlexDiv>
            <ProjectIcon icon={icon2} />
            <ProjectTitle>침팬지 극장</ProjectTitle>
         </FlexDiv>
         <ProjectText>
            실시간 유튜브 <wbr />
            같이 보기 서비스
         </ProjectText>
      </ProjectCard>
   );
};

const LinkWrap = styled.div`
   display: inline-block;
   @media (max-width: 768px) {
      position: absolute;
      right: 25px;
   }
`;
export const Project1Desc = () => {
   const pj1Pages: JSX.Element[] = [
      <Pj1Page1 posx="0%" trans="all 0.2s ease-out" />,
      <Pj1Page2 posx="0%" trans="all 0.2s ease-out" />,
      <Pj1Page3 posx="0%" trans="all 0.2s ease-out" />,
      <Pj1Page4 posx="0%" trans="all 0.2s ease-out" />,
      <Pj1Page5 posx="0%" trans="all 0.2s ease-out" />,
   ];
   const pj1Titles = [
      "프로젝트 개요",
      "개발 환경",
      "잘 한 부분",
      "아쉬웠던 부분",
      "기타 세부사항",
   ];
   return (
      <Fade in={true} timeout={500}>
         <DescWrap>
            <FlexDiv>
               <ProjectIcon icon={icon1} size="100%" />
               <ProjectTitle>I Run You</ProjectTitle>
               <LinkWrap>
                  <Link
                     href="https://github.com/kurzwal/I-Run-You"
                     icon={github}
                     fontSize="1.2rem"
                  >
                     GitHub
                  </Link>
               </LinkWrap>
            </FlexDiv>
            <Line />
            <ProjectDetail components={pj1Pages} titles={pj1Titles} />
         </DescWrap>
      </Fade>
   );
};
export const Project2Desc = () => {
   const pj2Pages: JSX.Element[] = [
      <Pj2Page1 posx="0%" trans="all 0.2s ease-out" />,
      <Pj2Page2 posx="0%" trans="all 0.2s ease-out" />,
      <Pj2Page3 posx="0%" trans="all 0.2s ease-out" />,
      <Pj2Page4 posx="0%" trans="all 0.2s ease-out" />,
      <Pj2Page5 posx="0%" trans="all 0.2s ease-out" />,
   ];
   const pj2Titles = [
      "프로젝트 개요",
      "개발 환경",
      "잘 한 부분",
      "아쉬웠던 부분",
      "앞으로 구현하고 싶은 기능",
   ];
   return (
      <Fade in={true} timeout={500}>
         <DescWrap>
            <FlexDiv>
               <ProjectIcon icon={icon2} />
               <ProjectTitle>침팬지 극장</ProjectTitle>
               <LinkWrap>
                  <Link
                     href="https://github.com/kurzwal/CPZ-Theater"
                     icon={github}
                     fontSize="1.2rem"
                  >
                     GitHub
                  </Link>
               </LinkWrap>
            </FlexDiv>
            <Line />
            <ProjectDetail components={pj2Pages} titles={pj2Titles} />
         </DescWrap>
      </Fade>
   );
};

interface PjDtlProps {
   components: JSX.Element[];
   titles: string[];
}

const ProjectDetail = (props: PjDtlProps) => {
   const [pageIndex, setPageIndex] = useState(0);
   const [trans, setTrans] = useState("all 0.2s ease-out");

   const handlePageLeft = () => {
      setPageIndex(pageIndex - 1);
   };

   const handlePageRight = () => {
      setPageIndex(pageIndex + 1);
   };

   const handlers = useSwipeable({
      onSwipedLeft: () => handlePageRight(),
      onSwipedRight: () => handlePageLeft(),
      trackMouse: true,
   });

   const titles = props.titles;

   const getTitle = () => {
      return titles[(pageIndex + titles.length) % titles.length];
   };
   const getPosition = (num: number) => {
      const posNum = 15 + num * 80;
      return `${posNum}%`;
   };
   const pageComponents = props.components;

   const renderPages = (trans: string) => {
      const pages: React.FunctionComponentElement<any>[] = [];
      const compLen = pageComponents.length;
      for (let i = 0; i < compLen * 3; i++) {
         const index = i % compLen;
         const page = cloneElement(pageComponents[index], {
            key: "page" + pages.length,
            posx: getPosition(i - compLen - pageIndex),
            trans: trans,
         });
         pages.push(page);
      }

      return pages;
   };
   useEffect(() => {
      if (
         pageIndex === 1 - pageComponents.length ||
         pageIndex === 1 + pageComponents.length
      ) {
         setTimeout(() => {
            setTrans("none");
            setPageIndex(1);
            setTimeout(() => {
               setTrans("all 0.2s ease-out");
            }, 50);
         }, 200);
      }
   }, [pageIndex]);

   return (
      <DetailWrap {...handlers}>
         <PageTitle>{getTitle()}</PageTitle>
         <PageTurnerLeft onClick={handlePageLeft} />
         <PageTurnerRight onClick={handlePageRight} />
         {renderPages(trans)}
      </DetailWrap>
   );
};
