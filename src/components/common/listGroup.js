import React from "react";

const ListGroup = props => {
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  const { items, selectedItem, onItemSelect } = props;
  const AlleTage = ["Alle Tage", ...items];
  const mapListGroup = AlleTage.map(item => (
    <li
      key={item}
      className={
        selectedItem === item ? "list-group-item active" : "list-group-item"
      }
      onClick={() => onItemSelect(item)}
    >
      {item.capitalize()}
    </li>
  ));

  return <ul className="list-group">{mapListGroup}</ul>;
};

export default ListGroup;
