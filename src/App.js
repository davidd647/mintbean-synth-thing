import logo from "./logo.svg";
import "./App.css";

import * as Tone from "tone";

import { useState } from "react";

// test...

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

// //play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");
// // Tone.start();

function PlayButton() {
  function handleOnClick(e) {
    e.preventDefault();
    console.log("what...");
    synth.triggerAttackRelease("C4", "8n");
  }

  return <button onClick={(e) => handleOnClick(e)}>Test button</button>;
}

function Key(props) {
  function handleClick(e) {
    console.log(`props.note: ${props.note}`);
    synth.triggerAttackRelease(`${[props.note]}4`, "8n");
  }

  function handleMouseOver(e) {
    console.log("handleMouseover...");
    console.log(`props.mouseIsDown: ${props.mouseIsDown}`);
    if (props.mouseIsDown) {
      synth.triggerAttackRelease(`${[props.note]}4`, "8n");
    }
  }

  return (
    <div onClick={handleClick} onMouseOver={handleMouseOver}>
      {props.note}
    </div>
  );
}

function Keyboard() {
  // mouseIsDown might need to be inside state... so use hooks?
  // https://www.youtube.com/watch?v=O6P86uwfdR0&t=0s&ab_channel=WebDevSimplified
  const [mouseIsDown, setMouseDownState] = useState("false");

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
      <Key note="C" mouseIsDown={mouseIsDown} />
      <Key note="D" mouseIsDown={mouseIsDown} />
      <Key note="E" mouseIsDown={mouseIsDown} />
      <Key note="F" mouseIsDown={mouseIsDown} />
      <Key note="G" mouseIsDown={mouseIsDown} />
      <Key note="A" mouseIsDown={mouseIsDown} />
      <Key note="B" mouseIsDown={mouseIsDown} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Keyboard />

        <PlayButton />
      </header>
    </div>
  );
}

export default App;
