import { useState } from "react";

export default function Note(props) {
  // const [mouseIsDown, setMouseDownState] = useState(false);
  const [classNames, setClassNames] = useState(
    props.note.includes("#") ? "note sharp" : "note"
  );
  // props.mouseIsDown ?
  // let classNames = props.note.includes("#") ? "note sharp" : "note";

  function handleMouseDown(e) {
    props.synth.triggerAttackRelease(`${[props.note]}4`, "8n");
    setClassNames(
      props.note.includes("#") ? "note sharp active" : "note active"
    );
  }

  function handleMouseUp() {
    setClassNames(props.note.includes("#") ? "note sharp" : "note");
  }

  function handleMouseOver(e) {
    if (props.mouseIsDown) {
      props.synth.triggerAttackRelease(`${[props.note]}4`, "8n");
      setClassNames(
        props.note.includes("#") ? "note sharp active" : "note active"
      );
    }
  }

  function handleMouseLeave(e) {
    if (props.mouseIsDown) {
      props.synth.triggerAttackRelease(`${[props.note]}4`, "8n");
      setClassNames(props.note.includes("#") ? "note sharp" : "note");
    }
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={classNames}
    >
      {/* {props.note} */}
    </div>
  );
}
