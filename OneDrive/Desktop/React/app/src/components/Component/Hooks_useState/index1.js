import React, { Component } from "react";

export default class UseState extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    handleCounter = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        const{ count } = this.state
        return (
            <div>
                <h2>Count: {count}</h2>
                <button onClick={this.handleCounter}>Increment</button>
            </div>
        );
    }
}
