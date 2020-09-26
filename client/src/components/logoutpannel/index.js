import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
export default class Logout extends Component {
    
    constructor(props){
        super(props)
        localStorage.removeItem('token')
    }
    
    render() {
        return (
            <div>
                <h1>Thank You for visitng</h1>
                <NavLink to='/logintoadmin'>Login</NavLink>
                <NavLink to='/'>Home</NavLink>
            </div>
        )
    }
}
