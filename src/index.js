import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { SignUpModal, PrimaryButton, SecondaryButton, TertiaryButton } from "./components";
import { darkTheme, defaultTheme, GlobalStyle } from "./utils"

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <PrimaryButton modifiers={["small"]}>Hello World</PrimaryButton>
        <SecondaryButton modifiers={["large"]}>Goodbye World</SecondaryButton>
        <TertiaryButton>Hey</TertiaryButton>
        <GlobalStyle />
      </div>

      {/* <div>
        <h3>Normal</h3>
        <PrimaryButton>
          Hello World
      </PrimaryButton>

        <SecondaryButton>
          Good bye World
      </SecondaryButton>

        <TertiaryButton>
          Hey World
      </TertiaryButton>
      </div>
      <br />
      <div>
        <h3>Disabled</h3>
        <PrimaryButton disabled>
          Hello World
      </PrimaryButton>

        <SecondaryButton disabled>
          Good bye World
      </SecondaryButton>

        <TertiaryButton disabled>
          Hey World
      </TertiaryButton>
      </div>
      <br />
      <div>
        <h3>With Modifiers (1)</h3>
        <PrimaryButton modifiers="small">
          Hello World (small)
      </PrimaryButton>

        <SecondaryButton modifiers={["large"]}>
          Good bye World (large)
      </SecondaryButton>

        <TertiaryButton disabled>
          Hey World
      </TertiaryButton>
      </div>
      <br />
      <div>
        <h3>With Modifiers (2)</h3>
        <PrimaryButton modifiers="warning">
          Hello World
      </PrimaryButton>

        <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>
          Good bye World
      </SecondaryButton>

        <TertiaryButton disabled>
          Hey World
      </TertiaryButton>
      </div>
      <br />
      <div>
        <h3>With Modifiers (3)</h3>
        <PrimaryButton modifiers={["small", "error"]}>
          Hello World
      </PrimaryButton>

        <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>
          Good bye World
      </SecondaryButton>

        <TertiaryButton modifiers={["success", "tertiaryButtonSuccess"]}>
          Hey World
      </TertiaryButton>

      </div> */}
      {/* <SignUpModal /> */}
    </ThemeProvider>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector("#root"),
);
