import { useState } from "react";

import "../keyboardsass.scss";

import Note from "./Note";
import Sharp from "./Sharp";

export default function Keyboard(props) {
  const NOTES = ["C", "D", "E", "F", "G", "A", "B"];
  const SHARPS = ["C#", "D#", "F#", "G#", "A#"];

  // mouseIsDown might need to be inside state... so use hooks?
  // https://www.youtube.com/watch?v=O6P86uwfdR0&t=0s&ab_channel=WebDevSimplified
  const [mouseIsDown, setMouseDownState] = useState(false);

  function handleMouseDown() {
    setMouseDownState(true);
  }

  function handleMouseUp() {
    setMouseDownState(false);
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="keyboard"
    >
      {NOTES.map((note, index) => {
        return (
          <Note
            key={`note${index}`}
            note={note}
            mouseIsDown={mouseIsDown}
            synth={props.currentSynth}
            index={index}
          />
        );
      })}
      {SHARPS.map((sharp, index) => {
        return (
          <Sharp
            key={`sharp${index}`}
            note={sharp}
            mouseIsDown={mouseIsDown}
            synth={props.currentSynth}
          />
        );
      })}
    </div>
  );
}
