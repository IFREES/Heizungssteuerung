import React from "react";

export default props => {
  const { onChangePartyGeneral, partygeneral } = props;
  return (
    <div>
      <label htmlFor="partyMode">PartyMode</label>
      <input
        type="checkbox"
        id="partyMode"
        name="partyMode"
        onChange={() => onChangePartyGeneral("partyMode")}
        checked={partygeneral.partyMode}
      />

      <label htmlFor="generalMode">GeneralMode</label>
      <input
        type="checkbox"
        id="generalMode"
        name="generalMode"
        onChange={() => onChangePartyGeneral("generalMode")}
        checked={partygeneral.generalMode}
      />
    </div>
  );
};
