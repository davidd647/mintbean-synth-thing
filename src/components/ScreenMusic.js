import * as Tone from "tone";
import { useState } from "react";

import Selector from "./Selector";
import Keyboard from "./Keyboard";
import Beatbox from "./Beatbox";

const synthesizers = [
  new Tone.Synth().toDestination(),
  new Tone.AMSynth().toDestination(),
  new Tone.FMSynth().toDestination(),
];

export default function Note(props) {
  const [currentSynth, setCurrentSynth] = useState(0);

  return (
    <>
      <Beatbox
        synth0={synthesizers[0]}
        synth1={synthesizers[1]}
        synth2={synthesizers[2]}
      />
      <Selector
        currentSynth={currentSynth}
        setCurrentSynth={setCurrentSynth}
        synthesizers={synthesizers}
      />
      <Keyboard currentSynth={synthesizers[currentSynth]} />
    </>
  );
}
