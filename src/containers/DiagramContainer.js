import React, { Component } from "react";
import Diagram from "./Diagram";
import fetchModel from "../api/fetchModel";

class DiagramContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      model: null,
      error: 'Loading'
    }
  }
  async componentDidMount() {
    const model = await fetchModel().then((model) => {
      return this.setState({ model, error: null })
    })
      .catch((error) => {
        this.setState({ error })
      }
      );

  }
  render() {
    if (this.state.error !== null) return <h1>{this.state.error}</h1>
    return <Diagram model={this.state.model} />;
  }
}

export default DiagramContainer;