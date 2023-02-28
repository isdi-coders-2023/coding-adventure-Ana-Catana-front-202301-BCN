import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "@fontsource/saira-stencil-one/400.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import generalTheme from "./styles/generalTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={generalTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
