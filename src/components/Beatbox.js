import React from "react";
import * as Tone from "tone";

let now = Tone.now();
// let loop = null;

class Beatbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      started: false,
      beats: [
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
      ],
      tempo: 4,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleTempoChange = this.handleTempoChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.state.started) {
      new Tone.Loop((time) => {
        now = Tone.now();

        const newState = this.state;
        newState.count = this.state.count + 1;
        this.setState(newState);

        if (this.state.beats[0][this.state.count % 8] === true) {
          this.props.synth0.triggerAttackRelease(`E4`, "8n", now);
        }
        if (this.state.beats[1][this.state.count % 8] === true) {
          this.props.synth0.triggerAttackRelease(`D4`, "8n", now + 0.01);
        }
        if (this.state.beats[2][this.state.count % 8] === true) {
          this.props.synth0.triggerAttackRelease(`C4`, "8n", now + 0.02);
        }
      }, `${this.state.tempo}n`).start(0);

      Tone.Transport.start();
      Tone.context.resume();

      const newState = this.state;
      newState.started = true;
      this.setState(newState);
    } else {
      Tone.Transport.cancel();
      const newState = this.state;
      newState.started = false;
      this.setState(newState);
    }
  }

  toggle(row, col) {
    const newState = this.state;
    newState.beats[row][col] = !newState.beats[row][col];
    this.setState(newState);
  }

  handleTempoChange(e) {
    const newTempo = e.target.value;
    const newState = this.state;
    newState.tempo = newTempo;
    this.setState(newState);
  }

  render() {
    return (
      <form className="beatbox">
        <button onClick={this.handleClick}>
          {this.state.started ? "Stop" : "Start"} beatbox
        </button>
        <div>
          <input
            type="number"
            onChange={this.handleTempoChange}
            value={this.state.tempo}
            disabled={this.state.started ? true : false}
            style={{ width: "32px" }}
          />
          -th notes
        </div>
        {this.state.beats.map((beatsRow, beatsRowI) => {
          return (
            <div key={`${beatsRowI}--`}>
              {beatsRow.map((beat, beatI) => {
                return (
                  <Beat
                    key={`${beatsRowI}--${beatI}`}
                    row={beatsRowI}
                    col={beatI}
                    count={this.state.count}
                    toggle={this.toggle}
                  />
                );
              })}
            </div>
          );
        })}
      </form>
    );
  }
}

export default Beatbox;

class Beat extends React.Component {
  render() {
    return (
      <input
        onClick={() => this.props.toggle(this.props.row, this.props.col)}
        type="checkbox"
        className={this.props.count % 8 === this.props.col ? "active" : ""}
      />
    );
  }
}
