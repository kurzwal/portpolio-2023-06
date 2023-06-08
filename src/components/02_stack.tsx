import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Fade from "@mui/material/Fade";

import {
   BackgroundTemplate,
   H2Template,
   H3Template,
   TitleTemplate,
   TextTemplate,
   Line,
   ObserveDiv,
} from "./00_SCTemplate";
import { observerHanlder } from "./00_services";
import CircleButton from "./02_stackBtn";
import { ButtonConfig, configs, description } from "./02_stackConfigs";

const BtnContainer = styled.div`
   position: absolute;
   width: 30%;
   height: 100%;
   top: 3vw;
   left: 10vw;
`;

const DescContainer = styled.div`
   position: absolute;
   width: 25%;
   height: 60vh;
   top: 3vw;
   right: 20vw;
   border-radius: 15px;
   background-color: ${(props) => props.theme.colors.bg2};
   padding: 1vw 2vw;
   box-sizing: border-box;
`;

const DescText = styled(TextTemplate)`
   margin-top: -0.8rem;
   font-size: 1.05rem;
`;

const StackComp = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [title, setTitle] = useState("　");
   const [content, setContent] = useState<string[]>([]);
   const [hoveredButton, setHoveredButton] = useState("");

   const observeRef = useRef(null);

   const handleMouseEnter = (key: string) => {
      setContent(description[key]);
      setTitle(key);
      setHoveredButton(key);
   };

   const handleMouseLeave = () => {
      setContent([]);
      setTitle("　");
      setHoveredButton("");
   };

   const checkNull = (str: string) => {
      if (str === "소제목" || str === "내용") {
         return "";
      } else {
         return str;
      }
   };

   const movePos = (buttonConfig: ButtonConfig, xy: "x" | "y") => {
      const index = xy === "x" ? 0 : 1;
      const pos = buttonConfig.pos[index];
      if (hoveredButton === "") {
         return pos;
      } else if (hoveredButton === buttonConfig.name) {
         return pos - buttonConfig.size * 0.15;
      } else {
         const currentConfig = configs.find(
            (config) => config.name === hoveredButton
         );
         const currentPos = currentConfig?.pos[index] || 0;
         const currentSize = currentConfig?.size || 0;
         const delta =
            Math.abs(pos - currentPos) > currentSize * 0.1
               ? Math.sign(pos - currentPos) * currentSize * 0.11
               : pos - currentPos;
         return pos + delta;
      }
   };

   const createButtonProps = (buttonConfig: ButtonConfig) => ({
      onMouseEnter: () => handleMouseEnter(buttonConfig.name),
      onMouseLeave: handleMouseLeave,

      customsize:
         hoveredButton === buttonConfig.name
            ? `${buttonConfig.size * 1.2}vw`
            : `${buttonConfig.size}vw`,
      bgcolor: buttonConfig.color,
      bgimage: buttonConfig.icon,
      top: `${movePos(buttonConfig, "x")}vw`,
      left: `${movePos(buttonConfig, "y")}vw`,
      bgsize: buttonConfig.bgsize ? `${buttonConfig.bgsize}%` : "40%",
   });

   useEffect(() => {
      observerHanlder(observeRef, setIsVisible);
   }, []);
   return (
      <BackgroundTemplate>
         <TitleTemplate>Stacks</TitleTemplate>
         <Fade in={isVisible} timeout={600}>
            <BtnContainer ref={observeRef}>
               {configs.map((config) => {
                  const buttonProps = createButtonProps(config);
                  return (
                     <CircleButton key={config.name} {...buttonProps}>
                        {config.name}
                     </CircleButton>
                  );
               })}
            </BtnContainer>
         </Fade>
         <Fade
            in={isVisible}
            timeout={600}
            style={{ transitionDelay: "300ms" }}
         >
            <DescContainer>
               <H2Template>{title}</H2Template>
               <Line />
               <H3Template>{checkNull(content[0])}</H3Template>
               <DescText>{checkNull(content[1])}</DescText>
               <H3Template>{checkNull(content[2])}</H3Template>
               <DescText>{checkNull(content[3])}</DescText>
               <H3Template>{checkNull(content[4])}</H3Template>
               <DescText>{checkNull(content[5])}</DescText>
               {content[7] && content[7] !== "라이브러리명" && (
                  <div>
                     <Line />
                     <H3Template>{content[6]}</H3Template>
                     <DescText>{content[7]}</DescText>
                  </div>
               )}
            </DescContainer>
         </Fade>
         <ObserveDiv ref={observeRef} />
      </BackgroundTemplate>
   );
};

export default StackComp;
