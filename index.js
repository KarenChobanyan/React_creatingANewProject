import React from "react";
import { createRoot } from "react-dom/client";
import MyGit from "./MyGit";

const root = createRoot(document.getElementById("root"));
const element = React.createElement("h1",{
    className:"style"
},
"Hello,React!");

root.render(MyGit)