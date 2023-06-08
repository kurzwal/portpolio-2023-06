import styled from "styled-components";

import { BackgroundTemplate, TitleTemplate, ObserveDiv } from "./00_SCTemplate";
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
`;

const ProjectsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   position: absolute;
   top: 15vh;
   left: 25vw;
   background-color: ${(props) => props.theme.colors.bg2};
   border-radius: 15px;
   width: 50vw;
   height: 20vh;
   padding: 2vw;
   box-sizing: border-box;
`;

const DescContainer = styled(ProjectsContainer)`
   top: 39vh;
   height: 45vh;
   padding-top: 1.2vw;
   padding-bottom: 0;
   overflow: hidden;
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
         <ObserveDiv ref={observeRef} />
      </BackgroundComp>
   );
};

export default ProjectsComp;
