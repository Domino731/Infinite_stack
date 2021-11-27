import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SignUp } from "./signUp";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles-general/theme";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./login";

const LoginComponent = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </ThemeProvider>
);

// properly render
test("Login component is rendering properly", () => {
  const { getByTestId } = render(<LoginComponent />);

  expect(getByTestId("login-container")).toBeInTheDocument();
});

// catch email error
test("Login component is catching password error", async () => {
  const { getByTestId, getByLabelText, getByText } = render(<LoginComponent />);

  // change email input value
  const inputEmailNode = getByLabelText("input-email");
  fireEvent.change(inputEmailNode, {
    target: { value: "testing@gmail.com" },
  });

  //   // change password input value
  const inputPasswordNode = getByLabelText("input-password");
  fireEvent.change(inputPasswordNode, { target: { value: "1235" } });

  // find button and trigger event with auth operation
  const buttonNode = getByTestId("btn-login");
  fireEvent.click(buttonNode);

  const errorWrapper = await waitFor(() =>
    getByTestId("password-error-wrapper")
  );
  expect(errorWrapper).toBeInTheDocument();
});
