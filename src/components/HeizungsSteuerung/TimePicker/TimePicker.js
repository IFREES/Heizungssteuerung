import React from "react";

export default props => {
  return (
    <div>
      <input
        type="time"
        id={props.id}
        value={props.zeit.an}
        name="an"
        onChange={props.onTimeChange}
      />
      <input
        type="time"
        id={props.id}
        value={props.zeit.aus}
        name="aus"
        onChange={props.onTimeChange}
      />
      <input
        type="button"
        id={props.zeit.id}
        className="btn btn-sm btn-warning m-2"
        value="Delete"
        onClick={props.onDelete}
      />
      <span>{props.zeit.id}</span>
    </div>
  );
};
