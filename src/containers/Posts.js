import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';
import blogPost from '../data/blog.json';
import Sidebar from '../components/Sidebar';
import '../styles/Posts.css';

/**
* @author
* @function Posts
**/

const Posts = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  },[posts]);

  return(
    <div className="container">

      <div className="grid-container" style={{width: '70%'}}>
        {
          posts.map(post => {
            // console.log("post in posts.map: ", post);
            return (
              <div className="grid-item">
                <Card>
                  <NavLink key={post.id} to={`/post/${post.slug}`}>
                    <div className="recentPost">
                      <h3>{post.blogTitle}</h3>
                      <span>{post.postedOn}</span>
                      <div>{post.blogText}</div>
                    </div>
                  </NavLink>
                </Card>
              </div>
            );
          })
        }
      </div>

      <div>
        {props.children}
        <Sidebar />
      </div>
    </div>
   )

 }

export default Posts