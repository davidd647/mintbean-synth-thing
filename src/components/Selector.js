// import { useState } from "react";

export default function Selector(props) {
  function handleChange(e) {
    console.log(e.target.value);
    props.setCurrentSynth(e.target.value);
  }

  return (
    <div className="selector">
      <select type="select" value={props.currentSynth} onChange={handleChange}>
        {props.synthesizers.map((e, key) => {
          return (
            <option key={key} value={key}>
              Voice #{key}
            </option>
          );
        })}
      </select>
    </div>
  );
}
