import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      background: string;
      input: string;
      titles: string;
    };
    text: {
      primarySize: string;
      primaryStyle: string;
      secondaryStyle: string;
      inputTitleWeight: number;
      primaryWeight: number;
    };
  }
}
