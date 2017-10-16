import React from "react";
import ReactDom from "react-dom";
import Example from "./Example.js"


ReactDom.render(<Example {...window.resData} />, document.getElementById("root"));