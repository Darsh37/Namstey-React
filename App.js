import React from 'react';
import ReactDOM from "react-dom/client" 


const heading =
React.createElement("div",{ id:"parents"},
[React.createElement("div",{ id:"child"},
[React.createElement("h1",{ id:"parents"},"This is my H1 tag"),
React.createElement("h2",{ id:"parents"},"This is my H2 tag")]),

React.createElement("div",{ id:"child"},
[React.createElement("h1",{ id:"parents"},"This is my H1 tag"),
React.createElement("h2",{ id:"parents"},"This is my H2 tag")])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); 