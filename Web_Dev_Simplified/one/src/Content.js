import { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }
  changeValue(value) {
    //-1
    this.setState((prevState) => {
      //0
      return { count: prevState.count + value }; //0-1 =-1
    });
    this.setState((prevState) => {
      //-1
      return { count: prevState.count + value }; //-1+-1 =-2
    });
  }
  render() {
    return (
      <>
        <button onClick={() => this.changeValue(-1)}>-</button>
        <div className="spans">
          <span>{this.state.count}</span>
        </div>
        <button onClick={() => this.changeValue(1)}>+</button>
      </>
    );
  }
}
