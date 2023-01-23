import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextDataProvider } from "./contexts/contextData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextDataProvider>
    <App />
  </ContextDataProvider>
);
