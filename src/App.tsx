import { HomePage } from "./components/homePage/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles-general/theme";
import {GlobalStyle} from "./styles-general/global-styles";
import { Reset } from 'styled-reset'

function App() {
  return <>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Reset/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>

</ThemeProvider>
    </>
}

export default App;
