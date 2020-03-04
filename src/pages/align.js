import React, { Component } from 'react';

export default class Align extends Component {
    constructor() {
        super();

        this.state = {
            // styles: {
            //     'display': 'flex',
            //     'justify-content': 'center'
            // }
            className: 'center'
        }
    }

    left = () => {
        // this.setState({ styles: { 'justify-content': 'start' } });
        this.setState({ className: 'left' })
    }

    center = () => {
        this.setState({ styles: { 'justify-content': 'center' } });
    }

    right = () => {
        this.setState({ styles: { 'justify-content': 'end' } });
    }

    render() {
        return (
            <div className="container align">
                <div className={'align-text ' + this.state.className }>
                    Align
                </div>
                <div className="align-btns">
                    <button onClick={ this.left }>Left</button>
                    <button onClick={ this.center }>Center</button>
                    <button onClick={ this.right }>Right</button>   
                </div>
            </div>
        )
    }
}