import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorModenpm } />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
