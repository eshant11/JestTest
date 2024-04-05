
import React, { Component } from 'react';
import Table from './Table';


class Counter extends Component <{},any>{
  constructor({}) {
    super({});
    this.state = {
      count: 0,
  
    };
  }

  render() {

    return (
      <>
        <div className="class1"></div>
        <div className={`clicks-${this.state.count}`}>
          {this.state.count}-clicks
        </div>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Increxsfment</button>
        <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>Decrement</button>
        <Table/>
      </>
    );
  }
}

export default Counter;
