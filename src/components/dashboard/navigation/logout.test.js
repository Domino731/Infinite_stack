import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Logout } from "./logout";
import { theme } from "../../../styles-general/theme";
test("Navigation - Logout component is rendering properly", () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Logout />
      </BrowserRouter>
    </ThemeProvider>
  );
  expect(getByText("Logout")).toBeInTheDocument();
});
