import React, { Component } from "react";
import Button from 'react-bootstrap/Button'

export default class Event_binding extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };

        this.handleCount = this.handleCount.bind(this);
    }

    handleCount(){
      this.setState({
        count : this.state.count + 1
      });
    }

    render() {
        return (
            <div>
                <h2 className="fw-bold">{this.state.count}</h2>
                <Button onClick={this.handleCount}>Increse</Button>
                {/* <Button onClick={this.handleCount.bind(this)}>Increse</Button>    bind  */}
            </div>
        );
    }
}
