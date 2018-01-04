import { hydrate } from "react-dom";
import React from "react";
import SSR16 from "./ssr16"


hydrate(<SSR16 />, document.getElementById("root"))