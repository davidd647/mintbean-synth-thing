import { useState } from "react";

import "../keyboardsass.scss";

import Note from "./Note";
import Sharp from "./Sharp";

// index.js

// Import ToneJS
import * as Tone from "tone";

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");

export default function Keyboard() {
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
      {NOTES.map((note, i) => {
        return (
          <Note
            key={`note${i}`}
            note={note}
            mouseIsDown={mouseIsDown}
            synth={synth}
            index={i}
          />
        );
      })}
      {SHARPS.map((sharp, i) => {
        return (
          <Sharp
            key={`sharp${i}`}
            note={sharp}
            mouseIsDown={mouseIsDown}
            synth={synth}
            index={i}
          />
        );
      })}
    </div>
  );
}
