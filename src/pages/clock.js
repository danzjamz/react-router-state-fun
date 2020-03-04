import React, { Component } from 'react';

export default class Clock extends Component {
    constructor() {
        super();

        this.state = {
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds()
        }
        const intervalId = 0;
    }

    componentDidMount() {
        this.intervalId = setInterval( () => {
            this.setState({
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds()
            });

            
            if (this.state.hour < 10) {
                this.setState ({ hour: `0${ new Date().getHours() }` })
            } 
            if (this.state.minute < 10) {
                this.setState ({ minute: `0${ new Date().getMinutes() }` })
            } 
            if (this.state.second < 10) {
                this.setState ({ second: `0${ new Date().getSeconds() }` })
            } 
        });
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className="container">
                { this.state.hour+ ':' + this.state.minute + ':' + this.state.second }
            </div>
        )
    }
}