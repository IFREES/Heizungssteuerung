import React, { Component } from "react";
import PartyGeneral from "./PartyGeneral/PartyGeneral";
import ProgrammFeld from "./ProgrammFeld/ProgrammFeld";
import ListGroup from "../common/listGroup";

export default class HeizungsSteuerung extends Component {
  constructor(props) {
    super(props);
    const areaString = this.props.area;
    fetch(`/data/heizung?wohnung=${areaString}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          [areaString]: { ...response },
          wochentageList: Object.keys(response.wochentage),
          selectedDay: "montag"
        });
      });
  }

  state = {
    selectedDay: "",
    wochentageList: []
  };

  handleOnChangePartyGeneral = mode => {
    const areaString = this.props.area;
    let area = { ...this.state[areaString] };
    area.partygeneral[mode] = !area.partygeneral[mode];
    this.setState({ [areaString]: area });
  };

  handleDelete = (id, tag) => {
    const areaString = this.props.area;
    let area = { ...this.state[areaString] };
    area.wochentage[tag] = area.wochentage[tag].filter(zeit => zeit.id !== id);
    this.setState({ [areaString]: area });
  };

  handleTimeChange = (id, e, tag) => {
    const areaString = this.props.area;
    let area = { ...this.state[areaString] };
    const index = area.wochentage[tag].findIndex(
      zeitSpalte => zeitSpalte.id === id
    );

    if (e.target.name == "an") {
      area.wochentage[tag][index].an = e.target.value;
    } else {
      area.wochentage[tag][index].aus = e.target.value;
    }
    this.setState({ [areaString]: area });
  };

  handleAddLine = tag => {
    const areaString = this.props.area;
    let area = { ...this.state[areaString] };
    const bluePrint = {
      id: "",
      an: "00:00",
      aus: "00:00"
    };
    area.wochentage[tag] = area.wochentage[tag].concat(bluePrint);
    this.setState({ [areaString]: area });
  };

  handleSelectDay = tag => {
    this.setState({ selectedDay: tag });
  };

  save = () => {
    console.log("Fetching....");
    const data = { ...this.state };
    fetch("/data/heizung/save", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  render() {
    const { area } = this.props;
    const { selectedDay, wochentageList } = this.state;

    if (this.state[area] == undefined) return <h1>Loading!!!</h1>;

    const filteredWochentageList =
      selectedDay === "Alle Tage"
        ? wochentageList
        : wochentageList.filter(wochentag => wochentag === selectedDay);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={wochentageList}
            selectedItem={selectedDay}
            onItemSelect={this.handleSelectDay}
          />
        </div>
        <div className="col">
          <PartyGeneral
            onChangePartyGeneral={this.handleOnChangePartyGeneral}
            partygeneral={this.state[area].partygeneral}
          />
          <ProgrammFeld
            wochentage={this.state[area].wochentage}
            wochentageList={filteredWochentageList}
            onTimeChange={this.handleTimeChange}
            onDelete={this.handleDelete}
            onAddLine={this.handleAddLine}
          />
          <button className="btn btn-sm btn-primary m-2" onClick={this.save}>
            Save
          </button>
        </div>
      </div>
    );
  }
}
