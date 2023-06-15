import { createGlobalStyle } from "styled-components";

const theme = {
   colors: {
      title: "#000000aa",
      titleshadow: "#333333bb",
      text: "#000000",
      text2: "#555",
      bg1: "#fff0cf",
      bg2: "#ddb892aa",
      bg3: "#ddb89277",
      bg4: "#b08968aa",
      tab: "#7f5539",
      footerbg: "#68676377",
      footertext: "#333333",
   },
};

export default theme;

export const GlobalStyle = createGlobalStyle`
   body {
      margin: 0;
      padding: 0;
      background-color: ${({ theme }) => theme.colors.bg1};
   }
   html {
      @media (max-width: 1580px) {
         font-size: 14px;
      }
      @media (max-width: 768px) {
         font-size: 12px;
      }
   }
`;
