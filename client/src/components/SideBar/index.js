import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
/**
* @author
* @function SideBar
**/

const SideBar = (props) => {

  const [posts, setPosts] = useState([]);
   
  useEffect(()=>{
   const posts = blogPost.data;
    setPosts(posts);
  },posts);



  return(
      <div className='sidebarContainer'>
          <Card style={{marginBottom:'20px'}}>
            <div className='cardHeader'>
              <span>About Us</span>
            </div>
            <div className='profileImageContainer'>
              <img src='https://lh3.googleusercontent.com/eQNBD2ufUBR-CMXRpmyKnSHaT7zcqEKaeL-tMh7gMY6PWcN7WbWLSvz3BE8tOWTD0MLRn65o3EnEac5D=w768-h768-n-o-v1' alt='profile pic'></img>
            </div>
            <div className='cardBody'>
              <p className='personalBlog'>My Name is Nikhil Katiyar and I am a Software Engineer...</p>
            </div>
          </Card>
          <Card style={{marginBottom:'20px'}}>
            <div className='cardHeader'>
              <span>Social Network</span>
            </div>
          </Card>
          <Card style={{marginBottom:'20px'}}>
            <div className='cardHeader'>
              <span>Recent Posts</span>
            </div>
            <div className='recentPosts'>
              
              {
                posts.map(post => {
                  return(
                    <NavLink to={`/post/${post.id}`}>
                      <div className='recentPost'>
                        <h3>{post.blogTitle}</h3>
                        <span>{post.postedOn}</span>
                      </div>
                    </NavLink>
                );
                })
              }
            </div>
          </Card>
      </div>
   )

 }

export default SideBar