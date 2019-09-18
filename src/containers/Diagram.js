import React, { PureComponent } from "react";
import { GojsDiagram } from "react-gojs";
import "./diagram.css";

export default class Diagram extends PureComponent {

  constructor(props){
    super(props)
  }
  modelChangedhandler = () => {};

  updateDiagramProps = () => {};
  render() {
    return (
      <React.Fragment>
        <GojsDiagram
          diagramId={this.props.id}
          model={this.props.model}
          createDiagram={this.props.createDiagram}
          className="diagram"
          onModelChange={this.modelChangedhandler}
          updateDiagramProps={this.updateDiagramProps}
        />
      </React.Fragment>
    );
  }
}
