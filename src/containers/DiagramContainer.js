import React from "react";
import Diagram from "./Diagram";
import { erdModel } from "../constants";


const DiagramContainer = () => {
  return <Diagram model={erdModel}/>;
};

export default DiagramContainer;
