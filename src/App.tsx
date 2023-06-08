import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./components/00_theme";

import MainComp from "./components/01_main";
import StackComp from "./components/02_stack";
import ProjectsComp from "./components/03_projects";
import ETC from "./components/04_etc";
import Footer from "./components/05_footer";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <MainComp />
         <StackComp />
         <ProjectsComp />
         <ETC />
         <Footer />
      </ThemeProvider>
   );
}

export default App;
