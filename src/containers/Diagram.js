import React, { PureComponent } from "react";
import { GojsDiagram } from "react-gojs";
import createDiagram from "../helper/createDiagram";
import "./diagram.css";

export default class Diagram extends PureComponent {

  modelChangedhandler = () => {};

  updateDiagramProps = () => {};
  render() {
    return (
      <React.Fragment>
        <GojsDiagram
          diagramId="myDiagramDiv"
          model={this.props.model}
          createDiagram={createDiagram}
          className="diagram"
          onModelChange={this.modelChangedhandler}
          updateDiagramProps={this.updateDiagramProps}
        />
      </React.Fragment>
    );
  }
}
