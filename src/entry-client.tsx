import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.hydrateRoot(
  document.getElementById("app")!,
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
