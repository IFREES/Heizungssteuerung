import React, { Component } from "react";
import TimePicker from "./TimePicker";
import UniqueId from "react-html-id";
import TimeAdd from "./TimeAdd";

export default class TimePickers extends Component {
  constructor(props) {
    super(props);
    UniqueId.enableUniqueIds(this);
    this.state = {
      wochentage: props.wochentage
    };
  }

  componentWillMount() {
    this.handleUnicId();
  }
  
  componentWillUpdate() {
    this.handleUnicId();
  }

  handleUnicId = () => {
    let wochentag = this.props.wochentag;
    let wochentage = this.state.wochentage;

    wochentage[wochentag].forEach(element => {
      element.id = this.nextUniqueId();
    });
  };

  render() {
    const tag = this.props.wochentag;
    const mapTimePicker = this.state.wochentage[this.props.wochentag].map(
      zeit => (
        <TimePicker
          key={this.nextUniqueId()}
          zeit={zeit}
          onTimeChange={e => this.props.onTimeChange(zeit.id, e, tag)}
          onDelete={() => this.props.onDelete(zeit.id, tag)}
        />
      )
    );
    return (
      <ul>
        {mapTimePicker}
        <TimeAdd onAddLine={() => this.props.onAddLine(tag)} />
      </ul>
    );
  }
}
