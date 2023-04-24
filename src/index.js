import React from "react";
import {createRoot} from "react-dom/client";
import Main from "./Main";
import "./index.css";

let rootElement = document.getElementById("root");
let root = createRoot(rootElement);

 root.render(
  <Main/>, 
);