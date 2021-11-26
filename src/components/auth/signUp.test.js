import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SignUp } from "./signUp";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles-general/theme";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";

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
