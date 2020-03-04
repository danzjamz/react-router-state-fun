import React, { Component } from 'react';

export default class ChangeColor extends Component {
    constructor() {
        super();

        this.state = {
            text: 'black',
            styles: {
                color: 'black'
            }
        }

        this.inputRef = React.createRef();
    }

    changeColor = (event) => {
        const newColor = this.inputRef.current.value;
        this.setState({ text: newColor, styles: { color: newColor } })
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="color-change">
                    <form onSubmit={ this.changeColor }>
                        <h2 style={this.state.styles}>{ this.state.text }</h2>
                        <input type='text' name='color-input' placeholder='color' value={ this.state.value } ref={ this.inputRef }></input>
                        <button type='submit'>Change Color</button>
                    </form>
                </div>
            </div>
        )
    }
}