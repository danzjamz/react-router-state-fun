import React, { Component } from 'react';

export default class Counter extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0
        };
    }

    addToCounter = () => {
        this.setState({ counter: (this.state.counter + 1) })
    }
    
    subtractFromCounter = () => {
        this.setState({ counter: (this.state.counter - 1) })
    }

    render() {
        return (
            <div className="container">
                { this.state.counter }

                <button onClick={ this.addToCounter }>Up</button>
                <button onClick= { this.subtractFromCounter }>Down</button>
            </div>
        )
    }
}