import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Copyright } from "./copyright";
import { theme } from "../../../styles-general/theme";
test("Navigation - Copyright component is rendering properly", () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Copyright />
      </BrowserRouter>
    </ThemeProvider>
  );
  expect(
    getByText("Copyright © 2021 Infinite_stack by Dominik Orzechowski")
  ).toBeInTheDocument();
});
