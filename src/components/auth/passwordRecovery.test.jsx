import React from "react";
import {
  fireEvent,
  getByPlaceholderText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles-general/theme";
import { BrowserRouter } from "react-router-dom";
import { PasswordRecovery } from "./passwordRecovery";

test("PasswordRecovery component is rendering properly", () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PasswordRecovery />
      </BrowserRouter>
    </ThemeProvider>
  );
  expect(getByTestId("password-recovery-container")).toBeInTheDocument();
});

test("PasswordRecovery component is catching error about incorrect e-mail", async () => {
  const { getByLabelText, getByText, getByTestId } = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PasswordRecovery />
      </BrowserRouter>
    </ThemeProvider>
  );

  // change value
  const inputNode = getByLabelText("input-email");
  fireEvent.change(inputNode, { target: { value: "invalidasasd" } });
  expect(inputNode.value).toBe("invalidasasd");

  // find button and trigger event with auth operation
  const buttonNode = getByText("Send e-mail");
  fireEvent.click(buttonNode);

  const errorWrapper = await waitFor(() => getByTestId("error-wrapper"));
  expect(errorWrapper).toBeInTheDocument();
});

test("PasswordRecovery component is displaying message about successful support e-mail send", async () => {
  const { getByTestId, getByPlaceholderText, getByText } = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PasswordRecovery />
      </BrowserRouter>
    </ThemeProvider>
  );

  // put e-mail on which the e-mail with next steps to password recover will be send
  const inputNode = getByPlaceholderText("example@website.com");
  fireEvent.change(inputNode, {target: {value: 'alphaaccount@gmail.com'}});

  // find button and trigger event with auth operation
  const buttonNode = getByText("Send e-mail");
  fireEvent.click(buttonNode);

  // container with message about successful e-mail with next steps send
  const containerNode = await waitFor(() => getByTestId("successful-sent"));
  expect(containerNode).toBeInTheDocument();
});
