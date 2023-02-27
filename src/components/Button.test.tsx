import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given Button component", () => {
  describe("When it's calls with the text 'Sign up'", () => {
    test("Then it should show a button with the text 'Sign up'", () => {
      const textButton = "Sign up";

      render(<Button text={"Sign up"} />);
      const expectedButton = screen.getByRole("button", {
        name: textButton,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});