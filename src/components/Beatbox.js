import { useEffect, useState } from "react";

let itterator = 1;

function Beat(props) {
  function handleChange(e) {
    props.setBeats(e.target.checked);
  }

  return (
    <input
      id="test-id"
      onChange={handleChange}
      type="checkbox"
      checked={props.checked}
    />
  );
}

export default function Beatbox(props) {
  // initializer lifecycle hook
  useEffect(() => {
    setInterval(function () {
      // console.log(i);

      itterator = itterator + 1;
      if (itterator > 8) {
        itterator = 1;
      }
    }, 1000);
  }, []);

  var initialBeats = [false, false, false, false, false, false, false, false];

  const [beats, setBeats] = useState(initialBeats);

  return (
    <form className="beatbox">
      <div>
        {/* This code breaks every time we change the state of the checkbox: */}
        {/* {beats.map((beat, i) => {
          return <Beat key={`beat-${i}`} checked={beat} setBeats={setBeats} />;
        })} */}
      </div>
      <div>
        {/* This code works fine, but it's ugly: */}
        <Beat checked={beats[0]} setBeats={setBeats} />
        <Beat checked={beats[1]} setBeats={setBeats} />
        <Beat checked={beats[2]} setBeats={setBeats} />
        <Beat checked={beats[3]} setBeats={setBeats} />
        <Beat checked={beats[4]} setBeats={setBeats} />
        <Beat checked={beats[5]} setBeats={setBeats} />
        <Beat checked={beats[6]} setBeats={setBeats} />
        <Beat checked={beats[7]} setBeats={setBeats} />
      </div>
    </form>
  );
}
