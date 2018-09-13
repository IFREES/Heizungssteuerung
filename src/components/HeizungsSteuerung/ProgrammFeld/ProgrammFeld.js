import React from "react";
import TimePickers from "../TimePicker/TimePickers";

export default props => {
  const {
    onTimeChange,
    onAddLine,
    onDelete,
    wochentage,
    wochentageList
  } = props;

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  const mapTimePickers = wochentageList.map(wochentag => (
    <div key={wochentag} id={wochentag}>
      <p>{wochentag.capitalize()}</p>
      <TimePickers
        wochentage={wochentage}
        onTimeChange={onTimeChange}
        onDelete={onDelete}
        onAddLine={onAddLine}
        wochentag={wochentag}
      />
    </div>
  ));

  return (
    <React.Fragment>
      <h1>Wochentagsprogrammierung</h1>
      {mapTimePickers}
    </React.Fragment>
  );
};
