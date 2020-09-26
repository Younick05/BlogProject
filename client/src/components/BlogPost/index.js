import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink, Link } from 'react-router-dom';

/**
* @author
* @function BlogPost
**/


const BlogPost = (props) => {

    const [post, setPost] = useState({
        id: "",
        blogCategory: "",
        blogTitle: "",
        slug: "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText:""
    });
    const [postId, setPostId] = useState("");

    useEffect(()=>{
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post=> post.id==postId);
        setPost(post);
        setPostId(postId);
    },[post,props.match.params.postId]);

    if(post.blogImage=="") return null;

    const str = (post.blogText);
    const res = str.slice(0,200);

    const postUrl = encodeURI(document.location.href);

  return(
        <div className='blogpostContainer'>
            <Card>
                <div className='postimageContainer'>
                    <img src={require('../../blogPostPhotos/'+ post.blogImage)} alt='blog image'></img>
                </div>

                <div className= 'redirectLink'>
                    <li><NavLink to =''>मुख्या समाचार</NavLink></li>
                    <li><NavLink to =''>राष्ट्रीय</NavLink></li>
                    <li><NavLink to =''>ग्वालियर</NavLink></li>
                    <li><NavLink to =''>म.प्र. / छत्तीसगढ़</NavLink></li>
                </div>
                
                <div className='blogHeader'>
                    <h1 className='postTitle'>{post.blogTitle}</h1>                 
                    <p className='postedBy'><i class="fas fa-calendar-day"></i> {post.postedOn} &nbsp; <i class="fas fa-user"></i> {post.author} &nbsp; <i class="fas fa-comments"></i> comments</p>
                </div>
                
                 <div className='contentContainer'>
                    <p>
                        {res}...
                        <span className='readMore'><NavLink to=''>ReadMore</NavLink></span>
                    </p>
                </div>
            </Card>
        </div>
   )

 }

export default BlogPost