import React from "react";

class Counter extends React.Component {
  state = { seconds: 0 };

  componentDidMount() {
    setInterval(() => {
      return this.setState((state, props) => {
        return {
          seconds: state.seconds + 1,
        };
      });
    }, 1000);
  }
  render() {
    return (
      <>
        <h1>Welcome to the ToDo List</h1>
        <h2>You been in this website for {this.state.seconds} seconds</h2>
      </>
    );
  }
}

export default Counter;
