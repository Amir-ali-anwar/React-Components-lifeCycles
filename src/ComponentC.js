import React, { Component } from "react";

export default class ComponentC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Amir",
    };
    console.log("LifeCycle C constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle C getDriveStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycle C componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycle C shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle C getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycle C componentDidUpdate");
  }

  render() {
    console.log("LifeCycle C render");
    return <div>ComponentC</div>;
  }
}
