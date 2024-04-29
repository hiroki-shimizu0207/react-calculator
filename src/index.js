import React from "react";
import { createRoot } from "react-dom/client";
import BodyClassName from "react-body-classname";
import "./style/reset.scss";
import "./style/index.scss";

import App from "./App";
// import * as serviceWorker from "./serviceWorker";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BodyClassName BodyClassName className="l-body p-body">
    <App />
  </BodyClassName>
);

// serviceWorker.unregister();
