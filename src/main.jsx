import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContextFinancialIndicatorsProvider from "./hooks/useFinancialIndicators";

ReactDOM.render(
  <React.StrictMode>
    <ContextFinancialIndicatorsProvider>
      <App />
    </ContextFinancialIndicatorsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
