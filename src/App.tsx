import { LandingPage } from "./components/landingPage/landingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles-general/theme";
import { GlobalStyle } from "./styles-general/global-styles";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "./redux/combineReducers";
import { SignUp } from "./components/auth/signUp";
import { Login } from "./components/auth/login";
import { PasswordRecovery } from "./components/auth/passwordRecovery";
import { Dashboard } from "./components/dashboard/dashboard";
import { ProtectedRoute } from "./components/general/protectedRoute";

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

            {/* auth forms */}
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />

            {/* dashboard - protected, only for logged users */}
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/dashboard/*" element={<Dashboard />}>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
