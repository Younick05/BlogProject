import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../UI/Card';
import './style.css';

/**
* @author
* @function admin
**/


const Admintest = (props) => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users')
    setUsers(res.data.users);
  }

  useEffect( () => {
    getUsers();
  }, []);

  const allUsers = users.length > 0 && users.map((user, index) => {
  return(
    <div>
       <Card style={{marginTop:'20px'}}>
        <p key={index}>
        Title: {user.title}  
        &nbsp;
        Category: {user.category}
      </p>
      <button type='submit'>Edit</button>
      <button type='submit'>Delete</button>
      </Card>
    </div>
  ) 
  })

  return(
    <div className='admincontainer'>
        <h1 className='admintitle'>All Users</h1>
        <NavLink to='/add-details'>Add Details</NavLink>
        {allUsers}
    </div>
   )

 }

export default Admintest