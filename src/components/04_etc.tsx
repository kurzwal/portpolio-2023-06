import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { Tabs, Tab, createTheme, ThemeProvider, Fade } from "@mui/material";
import mainTheme from "./00_theme";

import { BackgroundTemplate, ObserveDiv, TitleTemplate } from "./00_SCTemplate";
import { Panel1, Panel2, Panel3, Panel4 } from "./04_tabPanel";
import { observerHanlder } from "./00_services";

const theme = createTheme({
   palette: {
      secondary: {
         main: mainTheme.colors.tab,
      },
   },
});

const TabsContainer = styled.div`
   position: absolute;
   display: flex;
   left: 25vw;
   top: 15vh;
   width: 10vw;
   @media (max-width: 1580px) {
      left: 20vw;
   }
`;

const PanelContainer = styled.div`
   position: absolute;
   display: flex;
   flex-direction: column;
   left: 35vw;
   top: 15vh;
   background-color: ${(props) => props.theme.colors.bg2};
   border-radius: 0px 10px 10px 10px;
   width: 40vw;
   height: 50vh;
   overflow: hidden;
   @media (max-width: 1580px) {
      left: 30vw;
      width: 50vw;
   }
`;

const tabProps = (index: number) => {
   return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
      sx: {
         color: mainTheme.colors.text,
         fontFamily: "LeferiPoint-SpecialA",
         height: "10vh",
         fontSize: "1.1rem",
         fontWeight: "bold",
         whiteSpace: "nowrap",
      },
   };
};

const ETC = () => {
   const [value, setValue] = useState(0);
   const [isVisible, setIsVisible] = useState(false);

   const observeRef = useRef(null);

   useEffect(() => {
      observerHanlder(observeRef, setIsVisible);
   }, []);

   const handleChange = (newValue: number) => {
      setValue(newValue);
   };

   return (
      <ThemeProvider theme={theme}>
         <BackgroundTemplate>
            <TitleTemplate>ETC</TitleTemplate>
            <Fade in={isVisible} timeout={1000}>
               <TabsContainer>
                  <Tabs
                     orientation="vertical"
                     value={value}
                     textColor="secondary"
                     indicatorColor="secondary"
                     aria-label="Vertical tabs example"
                     sx={{
                        borderRight: 1,
                        borderColor: "divider",
                        backgroundColor: mainTheme.colors.bg2,
                        borderRadius: "10px 0px 0px 10px",
                        width: "100%",
                     }}
                  >
                     <Tab
                        label="이런걸 잘해요"
                        {...tabProps(0)}
                        onMouseEnter={() => handleChange(0)}
                     />
                     <Tab
                        label="조금 자신없어요"
                        {...tabProps(1)}
                        onMouseEnter={() => handleChange(1)}
                     />
                     <Tab
                        label="읽은 책들"
                        {...tabProps(2)}
                        onMouseEnter={() => handleChange(2)}
                     />
                     <Tab
                        label="이력사항"
                        {...tabProps(3)}
                        onMouseEnter={() => handleChange(3)}
                     />
                  </Tabs>
               </TabsContainer>
            </Fade>
            <Fade in={isVisible} timeout={1000}>
               <PanelContainer>
                  {value === 0 && <Panel1 />}
                  {value === 1 && <Panel2 />}
                  {value === 2 && <Panel3 />}
                  {value === 3 && <Panel4 />}
               </PanelContainer>
            </Fade>
            <ObserveDiv ref={observeRef} />
         </BackgroundTemplate>
      </ThemeProvider>
   );
};

export default ETC;
