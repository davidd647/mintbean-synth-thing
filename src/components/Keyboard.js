import { useState } from "react";
import Note from "./Note";

// index.js

// Import ToneJS
import * as Tone from "tone";

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");

export default function Keyboard() {
  // mouseIsDown might need to be inside state... so use hooks?
  // https://www.youtube.com/watch?v=O6P86uwfdR0&t=0s&ab_channel=WebDevSimplified
  const [mouseIsDown, setMouseDownState] = useState(false);

  function handleMouseDown() {
    console.log("mouse is down");
    setMouseDownState(true);
  }

  function handleMouseUp() {
    console.log("mouse is up");
    setMouseDownState(false);
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{ display: "flex", flexDirection: "row", background: "lime" }}
    >
      <Note note="C" mouseIsDown={mouseIsDown} synth={synth} />
      <Note note="D" mouseIsDown={mouseIsDown} synth={synth} />
      <Note note="E" mouseIsDown={mouseIsDown} synth={synth} />
      <Note note="F" mouseIsDown={mouseIsDown} synth={synth} />
      <Note note="G" mouseIsDown={mouseIsDown} synth={synth} />
      <Note note="A" mouseIsDown={mouseIsDown} synth={synth} />
      <Note note="B" mouseIsDown={mouseIsDown} synth={synth} />
    </div>
  );
}
