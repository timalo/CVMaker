import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CVMaker from "./CVMaker.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CVMaker />
  </StrictMode>
);

document.title = "CV Maker";
