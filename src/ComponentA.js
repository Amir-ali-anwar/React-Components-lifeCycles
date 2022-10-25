import React, { Component } from "react";
import ComponentB from "./ComponentB";
export default class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Amir",
    };
    console.log("LifeCycle A constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle A getDriveStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycle A componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycle A shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle A getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycle A componentDidUpdate");
  }
  handleChange=()=>{
    this.setState({
      name:'amir ali anwar'
    })
  }
  render() {
    console.log("LifeCycle A render");
    return (
      <div>
        ComponentA
        <p>{this.state.name}</p>
        <button onClick={this.handleChange}>chanage me</button>
        <ComponentB />
      </div>
    );
  }
}
