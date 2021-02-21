import { useState } from "react";

export default function Note(props) {
  const [classNames, setClassNames] = useState("note");

  function handleMouseDown(e) {
    props.synth.triggerAttackRelease(`${[props.note]}4`, "8n");
    setClassNames("note active");
  }

  function handleMouseUp() {
    setClassNames("note");
  }

  function handleMouseOver(e) {
    if (props.mouseIsDown) {
      props.synth.triggerAttackRelease(`${[props.note]}4`, "8n");
      setClassNames("note active");
    }
  }

  function handleMouseLeave(e) {
    if (props.mouseIsDown) {
      props.synth.triggerAttackRelease(`${[props.note]}4`, "8n");
      setClassNames("note");
    }
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={classNames}
      style={{
        left: props.index * 15,
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {/* {props.note} */}
    </div>
  );
}
