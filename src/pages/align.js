import React, { Component } from 'react';

export default class Align extends Component {
    constructor() {
        super();

        this.state = {
            styles: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            className: 'center'
        }
    }

    left = () => {
        this.setState({ styles: { display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' } });
    }

    center = () => {
        this.setState({ styles: { display: 'flex', justifyContent: 'center', alignItems: 'center' } });
    }

    right = () => {
        this.setState({ styles: { display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' } });
    }

    render() {
        return (
            <div>
                <div className='align' style={ this.state.styles }>
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