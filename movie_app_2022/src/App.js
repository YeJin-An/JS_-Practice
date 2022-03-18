import React from "react";
import PropTyes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }

  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component renderd");
  }
  componentDidUpdate() {
    console.log("I'm just updated");
  }
  cpmonentWillUnmount() {
    console.log("Goodbye lifeSytle");
  }
  render() {
    // console.log("i'm rendering");
    //render method
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

// constructor 는 JS의 class만들 때 호출하는 것이다.

export default App;
