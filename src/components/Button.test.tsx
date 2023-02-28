import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import generalTheme from "../styles/generalTheme";

describe("Given Button component", () => {
  describe("When it's calls with the text 'Sign up'", () => {
    test("Then it should show a button with the text 'Sign up'", () => {
      const text = "Sign up";

      render(
        <ThemeProvider theme={generalTheme}>
          <Button text={"Sign up"} />
        </ThemeProvider>
      );
      const expectedButton = screen.getByRole("button", {
        name: text,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
