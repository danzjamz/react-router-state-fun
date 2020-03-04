import React, { Component } from 'react';

export default class Toggle extends Component {
    constructor() {
        super();

        this.state = {
            text: 'Hello',
            isToggled: false
        }
    }

    toggleText = () => {
        this.setState({ 
            text: (this.state.isToggled ? 'Hello' : 'Goodbye'), 
            isToggled: !this.state.isToggled 
        });
    }

    render() {
        return (
            <div className="container">
                {/* toggle button with hello/goodbye */}
                
                <button onClick={ this.toggleText }>Toggle</button>
                <div>{ this.state.text }</div>
    
            </div>
        )
    }
}