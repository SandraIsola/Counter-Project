import React, { Component } from "react";


export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    if (this.state.count === 5) {
      throw new Error("An Error Occured");
    } else {
      return (
        <div>
          <div className="number">{this.state.count}</div>

          <button className="counter-btn" onClick={this.handleClick}>
            Increment
          </button>
          <input
            className="test-file"
            type="text"
            placeholder="Increment 5 times to test Error Boundary"
            style={{ width: "300px" }}
          />
        </div>
    
      );
    }
  }
}
