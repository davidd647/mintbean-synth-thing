import { useState } from "react";

function getFromLeft(sharpNote) {
  let pxFromLeft = 0;
  switch (sharpNote) {
    case "C#":
      pxFromLeft = 11.5;
      break;
    case "D#":
      pxFromLeft = 26.5;
      break;
    case "F#":
      pxFromLeft = 55;
      break;
    case "G#":
      pxFromLeft = 70;
      break;
    case "A#":
      pxFromLeft = 85;
      break;
    default:
      pxFromLeft = 0;
  }
  return pxFromLeft;
}

export default function Sharp(props) {
  const [classNames, setClassNames] = useState("note sharp");

  const fromLeft = getFromLeft(props.note);

  function handleMouseDown(e) {
    props.synth.triggerAttackRelease(`${[props.note]}4`, "8n");
    setClassNames("note sharp active");
  }

  function handleMouseUp() {
    setClassNames("note sharp");
  }

  function handleMouseOver(e) {
    if (props.mouseIsDown) {
      props.synth.triggerAttackRelease(`${[props.note]}4`, "8n");
      setClassNames("note sharp active");
    }
  }

  function handleMouseLeave(e) {
    if (props.mouseIsDown) {
      props.synth.triggerAttackRelease(`${[props.note]}4`, "8n");
      setClassNames("note sharp");
    }
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={classNames}
      style={{ left: fromLeft, display: "flex", alignItems: "flex-end" }} // props.index * 15 }}
    >
      {/* {props.note} */}
    </div>
  );
}
