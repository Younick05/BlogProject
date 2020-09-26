import React from 'react';
import './styles.css';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import Category from '../../components/Category';
import Footer from '../../components/Footer';

/**
* @author
* @function Health
**/

const Health = (props) => {
    return(
        <div>
      <section className='container'>
          <div className='mainBlogContainer'>
            <Card style={{marginBottom:'20px'}}>
                <div className='categoryContainer'>
                    <Category {...props}></Category>    
                </div>
                <BlogPost {...props}></BlogPost>
            </Card>
            <div className='secondRow'>
            <Card className='secondPost' style={{marginBottom:'20px'}}>
                <BlogPost {...props}></BlogPost>
            </Card>
            <Card className='thirdPost' style={{marginBottom:'20px'}}>
                <BlogPost {...props}></BlogPost>
            </Card>
            </div>

          </div>
          <SideBar></SideBar>
          
      </section>
      <Footer></Footer>
      </div>
    )
} 

export default Health