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

    if (this.props.model !== null) {
      this.setState({ model: this.props.model, error: null  })
     
    }
    else{
    const model = await fetchModel().then((model) => {
      return this.setState({ model, error: null })
    })
      .catch((error) => {
        this.setState({ error })
      }
      );}
  }
  render() {
    console.log(this.state)
    if (this.state.error !== null ) return <h1>{this.state.error}</h1>
    return <Diagram {...this.props} model={this.state.model} />;
  }
}

export default DiagramContainer;