import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { NavTitle } from "./title";
import { theme } from "../../../styles-general/theme";
test("Navigation - Title component is rendering properly", () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavTitle />
      </BrowserRouter>
    </ThemeProvider>
  );
  expect(getByText("Infinite_stack")).toBeInTheDocument();
});
