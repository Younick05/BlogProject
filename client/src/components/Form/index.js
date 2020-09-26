import React, {useState} from 'react';
import axios from 'axios';
import './style.css';
import { NavLink } from 'react-router-dom';


/**
* @author
* @function Form
**/


const Form = (props) => {

    const [userDetails, setUserDetails]= useState({
      category: '',
      date:'',
      author:'',
      title:'',
      content:'',
      message:''
    });

    const formvalues = (event) => {
      setUserDetails({
        ...userDetails,
        [event.target.name]: event.target.value
      })
    }

    const register = async (event) =>{
      event.preventDefault();

      const body = JSON.stringify({
        category:userDetails.category,
        date:userDetails.date,
        author:userDetails.author,
        title:userDetails.title,
        content:userDetails.content,
      });

      const response = await axios.post('http://localhost:5000/api/register', body, {
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      setUserDetails({
        ...userDetails, 
        message: response.data.message
      })
    }


  return(
    <div className='formContainer'>
        <h1 className='formTitle'>Post Details</h1>
        <NavLink to='/admin'>View Post</NavLink>
        <form className='form' onSubmit={register}>
            <label>Category</label>
            <input type='text' id='category' name='category' onChange={formvalues}></input><br/>
            <label>Date</label>
            <input type='date' id='date' name='date' onChange={formvalues}></input><br/>
            <label>Author</label>
            <input type='text' id='author' name='author' onChange={formvalues}></input><br/>
            <label>Title</label>
            <input type='text' id='title' name='title' onChange={formvalues}></input><br/>
            <label>Content</label>
            <input type='text' id='content' name='content' onChange={formvalues}></input><br/>
            <button type='Submit'>Submit</button>
            { userDetails.message
            ? <h1 className='resultMessage'>{userDetails.message}</h1> 
            : null }
        </form>
    </div>
  )   
 }

export default Form