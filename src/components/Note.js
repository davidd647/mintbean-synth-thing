export default function Note(props) {
  function handleClick(e) {
    console.log(`play this note: ${props.note}`);
    props.synth.triggerAttackRelease(`${[props.note]}4`, "8n");
  }

  function handleMouseOver(e) {
    if (props.mouseIsDown) {
      console.log(`play this note: ${props.note}`);
      props.synth.triggerAttackRelease(`${[props.note]}4`, "8n");
    }
  }

  return (
    <div onClick={handleClick} onMouseOver={handleMouseOver}>
      {props.note}
    </div>
  );
}
