import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Autosuggest } from "./autosuggest";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Autosuggest />
  </StrictMode>
);
