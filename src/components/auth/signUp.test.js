import React from "react";
import {
  fireEvent,
  getByPlaceholderText,
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SignUp } from "./signUp";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles-general/theme";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";

test("Renders SignUp component in order", async () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </ThemeProvider>
  );
  expect(getByText("Create account")).toBeInTheDocument();
});

test("Checking wether component is catching password requirements error", async () => {
  const { getByText, getByLabelText } = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </ThemeProvider>
  );

  // input
  const inputNode = screen.getByLabelText("input-password");
  fireEvent.change(inputNode, { target: { value: "123456@" } });
  expect(inputNode.value).toBe("123456@");

  // password repeat
  const btn = getByText("Create account");
  fireEvent.click(btn);

  const errorWrapper = getByLabelText("error-password-repeat");
  await expect(getByLabelText("error-password-repeat")).toBeInTheDocument();
});

test("Checking wether component is catching e-mail requirements error", async () => {
  const { getByText, getByLabelText, getByPlaceholderText } = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    </ThemeProvider>
  );

  // input
  const inputNode = screen.getByLabelText("input-email");
  fireEvent.change(inputNode, { target: { value: "123123" } });
  expect(inputNode.value).toBe("123123");

  const btn = getByText("Create account");
  fireEvent.click(btn);

  const errorWrapper = getByPlaceholderText("example@website.com");
  expect(errorWrapper).toBeInTheDocument();
});
