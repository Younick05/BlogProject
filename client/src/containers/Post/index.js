import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import Category from '../../components/Category';

/**
* @author Post
* @fuction 
**/
const Post  = (props) => {

  console.log(props);


  return(
    <section className='container'>
       <div className='mainBlogContainer'>
            <Card>
                <div className='categoryContainer'>
                    <Category {...props}></Category>    
                </div>
                <BlogPost {...props}></BlogPost>
            </Card>
            </div>
       
       
        <SideBar></SideBar>
    </section>
   )
 } 

export default Post 