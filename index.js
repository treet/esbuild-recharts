import valueParser from "postcss-value-parser";

const root = document.querySelector("#app");
const value = valueParser("rgba(255, 255, 255, 0");

root.innerText = `Parsed value: ${value.nodes[0].value}`;

