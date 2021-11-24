import { LandingPage } from "./components/landingPage/landingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles-general/theme";
import { GlobalStyle } from "./styles-general/global-styles";
import { Reset } from "styled-reset";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            {/* home page */}
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
