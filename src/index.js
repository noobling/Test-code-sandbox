import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import data from "./data/recipes";
import "./styles.css";

window.React = React;

const rootElement = document.getElementById("root");
ReactDOM.render(<Menu recipes={data} />, rootElement);
