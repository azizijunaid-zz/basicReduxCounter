import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementAct }  from "../../store/actions/counterAction";
import { decrementAct }  from "../../store/actions/counterAction";

class Counter extends Component {
  state = {
    count: 0
  };

  increment() {
    this.props.handleIncrementClick();
  }

  decrement() {
    // this.setState({ count: --this.state.count });
    this.props.handleDecrementClick();
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement.bind(this)}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment.bind(this)}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch(incrementAct()),
    handleDecrementClick: () => dispatch(decrementAct())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
