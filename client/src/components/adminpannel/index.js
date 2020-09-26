import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
export default class Admin extends Component {
   
   constructor(props){
       super(props)
       const token = localStorage.getItem("token")

    let loggedIn = true;
    if (token == null){
        loggedIn=false
    }

    this.state = {
        loggedIn
    }

   }
   
    render() {

        if(this.state.loggedIn === false ){
            return <Redirect to="/logintoadmin"/>
        }

        return (
            <div>
                <NavLink to='/logout'>Logout</NavLink>
            </div>
        )
    }
}
