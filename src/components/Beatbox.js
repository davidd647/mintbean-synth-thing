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
      row0: [false, false, false, false, false, false, false, false],
      row1: [false, false, false, false, false, false, false, false],
    };

    this.handleClick = this.handleClick.bind(this);
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

        if (this.state.row0[this.state.count % 8] === true) {
          this.props.synth1.triggerAttackRelease(`D4`, "8n", now);
        }
        if (this.state.row1[this.state.count % 8] === true) {
          this.props.synth2.triggerAttackRelease(`C4`, "8n", now + 0.01);
        }
      }, "4n").start(0);

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
    if (row === 0) {
      newState.row0[col] = !newState.row0[col];
    } else {
      newState.row1[col] = !newState.row1[col];
    }
    this.setState(newState);
  }

  render() {
    return (
      <form className="beatbox">
        <button onClick={this.handleClick}>
          {this.state.started ? "Stop" : "Start"} beatbox
        </button>
        <div>
          <Beat row={0} col={0} count={this.state.count} toggle={this.toggle} />
          <Beat row={0} col={1} count={this.state.count} toggle={this.toggle} />
          <Beat row={0} col={2} count={this.state.count} toggle={this.toggle} />
          <Beat row={0} col={3} count={this.state.count} toggle={this.toggle} />
          <Beat row={0} col={4} count={this.state.count} toggle={this.toggle} />
          <Beat row={0} col={5} count={this.state.count} toggle={this.toggle} />
          <Beat row={0} col={6} count={this.state.count} toggle={this.toggle} />
          <Beat row={0} col={7} count={this.state.count} toggle={this.toggle} />
        </div>
        <div>
          <Beat row={1} col={0} count={this.state.count} toggle={this.toggle} />
          <Beat row={1} col={1} count={this.state.count} toggle={this.toggle} />
          <Beat row={1} col={2} count={this.state.count} toggle={this.toggle} />
          <Beat row={1} col={3} count={this.state.count} toggle={this.toggle} />
          <Beat row={1} col={4} count={this.state.count} toggle={this.toggle} />
          <Beat row={1} col={5} count={this.state.count} toggle={this.toggle} />
          <Beat row={1} col={6} count={this.state.count} toggle={this.toggle} />
          <Beat row={1} col={7} count={this.state.count} toggle={this.toggle} />
        </div>
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
