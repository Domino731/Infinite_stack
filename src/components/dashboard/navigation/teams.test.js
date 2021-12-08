import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../../../styles-general/theme";
import { Projects } from "./projects";

test("Navigation - <Teams/> sub-component - list is rendering properly", () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    </ThemeProvider>
  );
  expect(getByText("New team")).toBeInTheDocument();
});
