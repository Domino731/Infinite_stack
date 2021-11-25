import { LandingPage } from "./components/landingPage/landingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles-general/theme";
import { GlobalStyle } from "./styles-general/global-styles";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "./redux/combineReducers";
import { SignUp } from "./components/auth/signUp/signUp";
const store = createStore(reducers);
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            {/* home page */}
            <Route path="/" element={<LandingPage />} />
            <Route path='/sign-up' element={<SignUp/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
