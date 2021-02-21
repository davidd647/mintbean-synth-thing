import * as Tone from "tone";
import { useState } from "react";

import Selector from "./Selector";
import Keyboard from "./Keyboard";

const synthesizers = [
  new Tone.Synth().toDestination(),
  new Tone.AMSynth().toDestination(),
  new Tone.FMSynth().toDestination(),
];

export default function Note(props) {
  const [currentSynth, setCurrentSynth] = useState(0);

  // setCurrentSynth(1);

  return (
    <>
      <Selector
        // onClick={() => setCurrentSynth(1)}
        currentSynth={currentSynth}
        setCurrentSynth={setCurrentSynth}
        synthesizers={synthesizers}
      />
      <Keyboard currentSynth={synthesizers[currentSynth]} />
    </>
  );
}
