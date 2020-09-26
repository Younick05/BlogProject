import React, {useState, useEffect} from 'react';
import blogPost from '../../data/blog.json';
import './styles.css'
/**
* @author
* @function Category
**/

const Category = (props) => {

    const [post, setPost] = useState({
        id: "",
        blogCategory: "",
    });
    const [postId, setPostId] = useState("");

    useEffect(()=>{
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post=> post.id==postId);
        setPost(post);
        setPostId(postId);
    },[post,props.match.params.postId]);

  return(
    <div className='blogCategoryContainer'>
      <span className='blogCategory'>{post.blogCategory}</span>
    </div>
   )

 }

export default Category