import React, { Component } from 'react';

export default class Clock extends Component {
    constructor() {
        super();

        this.state = {
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds()
        }

        console.log(this.state.second)
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds()
            });

            if (this.state.second < 10) {
                this.setState ({ second: `0${new Date().getSeconds()}` })
            } 
        });
    }

    render() {
        return (
            <div className="container" on>
                { this.state.hour+ ':' + this.state.minute + ':' + this.state.second }
            </div>
        )
    }
}