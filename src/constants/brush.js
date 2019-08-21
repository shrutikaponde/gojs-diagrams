import * as go from "gojs";

const $ = go.GraphObject.make; 
const obj = {
  bluegrad: $(go.Brush, "Linear", {
    0: "rgb(150, 150, 250)",
    0.5: "rgb(86, 86, 186)",
    1: "rgb(86, 86, 186)"
  }),
  greengrad: $(go.Brush, "Linear", {
    0: "rgb(158, 209, 159)",
    1: "rgb(67, 101, 56)"
  }),
  redgrad: $(go.Brush, "Linear", {
    0: "rgb(206, 106, 100)",
    1: "rgb(180, 56, 50)"
  }),
  yellowgrad: $(go.Brush, "Linear", {
    0: "rgb(254, 221, 50)",
    1: "rgb(254, 182, 50)"
  }),
  lightgrad: $(go.Brush, "Linear", { 1: "#E6E6FA", 0: "#FFFAF0" })
};

export default obj;
