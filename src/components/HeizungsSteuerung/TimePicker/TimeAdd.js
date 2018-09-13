import React, { Component } from "react";

export default class TimeAdd extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onAddLine}
          className="btn btn-sm primary m-2"
        >
          Hinzufügen
        </button>
      </div>
    );
  }
}
