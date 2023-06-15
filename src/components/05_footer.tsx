import { styled } from "styled-components";
import { TitleTemplate } from "./00_SCTemplate";

const Background = styled.div`
   width: 100vw;
   height: 20vh;
   display: flex;
   position: relative;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   background-color: ${(props) => props.theme.colors.footerbg};
   color: ${(props) => props.theme.colors.footertext};
   @media (max-width: 768px) {
      align-content: flex-start;
      padding-top: 10vh;
   }
`;

const Title = styled(TitleTemplate)`
   top: 3vh;
   font-size: 1.5rem;
`;

const Bold = styled.div`
   margin-top: 2vh;
   font-weight: bold;
   font-size: 1.1rem;
   @media (max-width: 768px) {
      margin: 0;
   }
`;

const Text = styled(Bold)`
   font-weight: normal;
   margin-left: 1vw;
`;

const Space = styled.div`
   margin: 2vw;
   @media (max-width: 768px) {
      width: 100%;
      height: 1rem;
      margin: 0;
   }
`;

const Footer = () => {
   return (
      <Background>
         <Title>Contact</Title>
         <Bold>Phone : </Bold>
         <Text>０１０-３１１２-２９７６</Text>
         <Space />
         <Bold>Email : </Bold>
         <Text>openingyou@gmail.com</Text>
      </Background>
   );
};

export default Footer;
