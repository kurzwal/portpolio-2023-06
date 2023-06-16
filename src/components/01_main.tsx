import styled from "styled-components";
import Fade from "@mui/material/Fade";

import profileImg from "../assets/profile.jpg";
import {
   BackgroundTemplate,
   H1Template,
   TextTemplate,
   FlexColumnDiv,
} from "./00_SCTemplate";

const BackgroundComp = styled(BackgroundTemplate)`
   background-image: url(${profileImg});
   height: 90vh;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   background-attachment: fixed;
`;

const BlurFilter = styled.div`
   width: 100%;
   height: 100%;
   backdrop-filter: blur(15px);
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

const ProfileImgComp = styled.div`
   background-image: url(${profileImg});
   background-size: 140%;
   background-position: center;
   background-repeat: no-repeat;
   width: 13vw;
   height: 13vw;
   margin-right: 5vw;
   @media (max-width: 768px) {
      width: 30vw;
      height: 30vw;
      margin-top: 10vh;
      margin-bottom: 5vh;
   }
`;

const ProfileTextCard = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${(props) => props.theme.colors.bg2};
   padding: 30px 60px 30px 30px;
   border-radius: 15px;
   box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2);
   @media (max-width: 768px) {
      width: 60vw;
      padding: 30px 40px;
      text-align: center;
      align-items: center;
   }
`;

const TextComp = styled(TextTemplate)`
   white-space: nowrap;
   margin-top: -5px;
   margin-left: 10px;
   @media (max-width: 768px) {
      text-align: center;
      margin-left: 0;
   }
`;

const PCOnlyText = styled(TextComp)`
   margin-left: 0;
   color: #555;
   @media (max-width: 768px) {
      display: none;
   }
`;

const MainComp = () => {
   return (
      <BackgroundComp>
         <BlurFilter>
            <ProfileImgComp></ProfileImgComp>
            <ProfileTextCard>
               <Fade in={true} timeout={1000}>
                  <H1Template>
                     어쩌다 풀스택, <wbr />
                     유열림입니다
                  </H1Template>
               </Fade>
               <Fade
                  in={true}
                  timeout={1000}
                  style={{ transitionDelay: "400ms" }}
               >
                  <TextComp>
                     사용자 경험을 위해 여러 기능과 <wbr />
                     기술을 사용하다 보니,
                     <br />
                     백엔드를 넘어 프론트엔드도 <wbr />
                     만들게 되었습니다. <br />
                     <PCOnlyText>
                        <br />
                        (본 페이지는 모바일 환경도 지원합니다)
                     </PCOnlyText>
                  </TextComp>
               </Fade>
            </ProfileTextCard>
         </BlurFilter>
      </BackgroundComp>
   );
};

export default MainComp;
