import React from "react";
import ReactDOM from "react-dom";

import reportVitals from "./report-vitals";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportVitals();
