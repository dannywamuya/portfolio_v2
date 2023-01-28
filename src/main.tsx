import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ReactLocation, Router } from "@tanstack/react-location";
import routes from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App";
import "@fontsource/raleway";
import "@fontsource/roboto-mono";
import "@fontsource/karla";

const locationClient = new ReactLocation();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router location={locationClient} routes={routes}>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
