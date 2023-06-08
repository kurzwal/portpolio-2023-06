import { createGlobalStyle } from "styled-components";

const theme = {
   colors: {
      title: "#000000aa",
      titleshadow: "#00000099",
      text: "#000000", // 가장 진한 색
      text2: "#555",
      bg1: "#fff0cf", // 가장 옅은 색
      bg2: "#E5E2D9aa", // 투명도 주기 (aa정도?)
      bg3: "#B8B5B077", // 투명도 주기 (77정도?)
      bg4: "#68676377", // 투명도 주기 (aa정도?)
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
`;
