import React from "react";

class useStateClass extends React.Component {
  constructor() {
    super();
    this.state = {
      no: 0,
      name: "My Name Is",
    };
  }
  clickMe() {
    console.log("---->", this.state.no);
    this.setState({ no: this.state.no + 1 });
    this.setState({ name: this.state.name + " " + "Yash" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.no}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.clickMe()}>Click me</button>
      </div>
    );
  }
}

export default useStateClass;
