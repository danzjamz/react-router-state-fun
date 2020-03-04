import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/counter'>Counter</NavLink>
                <NavLink exact to='/toggle'>Toggle</NavLink>
                <NavLink exact to='/font-sizer'>Font Sizer</NavLink>
                <NavLink exact to='/align'>Align</NavLink>
                <NavLink exact to='/show-hide'>Show Hide</NavLink>
                <NavLink exact to='/clock'>Clock</NavLink>
                <NavLink exact to='/change-color'>Change Color</NavLink>
            </div>
        )
    }
}