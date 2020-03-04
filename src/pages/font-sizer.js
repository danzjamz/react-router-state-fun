import React, { Component } from 'react';

export default class FontSizer extends Component {
    constructor() {
        super();

        this.state = {
            size: 12,
            styles: {
                'font-size': '12px'
            }
        }
    }

    increaseSize = () => {
        this.setState({ size: this.state.size + 1, styles: { 'font-size':  `${ this.state.size + 1 }px` } })
    }
    
    decreaseSize = () => {
        this.setState({ size: this.state.size - 1, styles: { 'font-size':  `${ this.state.size - 1 }px` } })
    }

    render() {
        return (
            <div className="container">
                <div style={ this.state.styles }>
                    { this.state.styles['font-size'] }
                    <button onClick={ this.increaseSize }>+</button>
                    <button onClick={ this.decreaseSize }>-</button>
                </div>
            </div>
        )
    }
}