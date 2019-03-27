import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: "#000"
    };
  }

  changeColor = newColor => {
    this.setState({ selectedColor: newColor });
    console.log(newColor);
  };

  getCurrentColor = () => {
    return this.state.selectedColor;
  };

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell getCurrentColor={this.getCurrentColor} key={idx} color={val} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    return (
      <div id="app">
        <ColorSelector changeColor={this.changeColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
