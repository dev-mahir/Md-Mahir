import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Event extends Component {
    constructor() {
        super();
        this.state = {
            changeValue: "",
        };
    }
    handleChange = (e) => {
        this.setState(
            {
                changeValue: e.target.value,
            },
            () => {
                console.log(this.state.changeValue);
            }
        );
    };

    render() {
        return (
            <div>
                <input onChange={this.handleChange} />
                <Card>
                    <p>{this.state.changeValue}</p>
                </Card>
            </div>
        );
    }
}
