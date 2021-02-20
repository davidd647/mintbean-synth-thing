import logo from "./logo.svg";
import "./App.css";

import Keyboard from "./components/Keyboard";

// import * as Tone from "tone";

// // test...

// //create a synth and connect it to the main output (your speakers)
// const synth = new Tone.Synth().toDestination();

// //play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");
// // Tone.start();

function PlayButton() {
  function handleOnClick(e) {
    e.preventDefault();
    console.log("what...");
    // synth.triggerAttackRelease("C4", "8n");
  }

  return <button onClick={(e) => handleOnClick(e)}>Test button</button>;
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
