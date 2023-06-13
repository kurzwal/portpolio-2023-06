import styled from "styled-components";

import {
   BackgroundTemplate,
   TitleTemplate,
   ObserveDiv,
   FlexColumnDiv,
} from "./00_SCTemplate";
import { observerHanlder } from "./00_services";
import {
   Project1,
   Project2,
   Project1Desc,
   Project2Desc,
} from "./03_projectsComp";
import { useEffect, useRef, useState } from "react";
import { Fade } from "@mui/material";

const BackgroundComp = styled(BackgroundTemplate)`
   height: 90vh;
   @media (max-width: 768px) {
      height: 100vh;
   }
`;

const ContentsWrap = styled(FlexColumnDiv)`
   width: 100%;
   height: 100%;
   justify-content: center;
   align-items: center;
`;

const ProjectsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   position: relative;
   background-color: ${(props) => props.theme.colors.bg2};
   border-radius: 15px;
   width: 50vw;
   height: 12rem;
   padding: 2vmax;
   box-sizing: border-box;
   @media (max-width: 1580px) {
      width: 60vw;
   }
   @media (max-width: 768px) {
      margin-top: 13vh;
      width: 90vw;
   }
`;

const DescContainer = styled(ProjectsContainer)`
   height: 45vh;
   margin-top: 30px;
   padding-top: 1.5rem;
   padding-bottom: 0;
   overflow: hidden;
   @media (max-width: 768px) {
      height: 70vh;
   }
`;

const ProjectsComp = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [hovered, setHovered] = useState("");

   const observeRef = useRef(null);

   useEffect(() => {
      observerHanlder(observeRef, setIsVisible);
   }, []);

   return (
      <BackgroundComp>
         <TitleTemplate>Projects</TitleTemplate>
         <ContentsWrap>
            <Fade in={isVisible} timeout={1000}>
               <ProjectsContainer>
                  <Project1 onMouseEnter={() => setHovered("pj1")} />
                  <Project2 onMouseEnter={() => setHovered("pj2")} />
               </ProjectsContainer>
            </Fade>
            <Fade
               in={isVisible}
               timeout={1000}
               style={{ transitionDelay: "300ms" }}
            >
               <DescContainer>
                  {hovered === "pj1" && <Project1Desc />}
                  {hovered === "pj2" && <Project2Desc />}
               </DescContainer>
            </Fade>
         </ContentsWrap>
         <ObserveDiv ref={observeRef} />
      </BackgroundComp>
   );
};

export default ProjectsComp;
