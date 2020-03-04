import React, { Component } from 'react';

export default class ShowHide extends Component {
    constructor() {
        super();

        this.state = {
            isShow: true,
            styles: {
                'display': 'block'
            }
        }
    }

    onClick = () => {
        this.setState({ isShow: !this.state.isShow, styles: { 'display': (this.state.isShow ? 'none' : 'block') } })
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h1 style={ this.state.styles }>ShowHide</h1>
                </div>
                <button onClick={ this.onClick }>{ this.state.isShow ? 'Hide' : 'Show' }</button>
            </div>
        )
    }
}