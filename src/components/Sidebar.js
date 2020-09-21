import React, {useState, useEffect} from 'react';
import '../styles/Sidebar.css';
import Card from './Card.js';
import blogPost from '../data/blog.json';
import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  // console.log("props inside Sidebar function: ", props);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  },[posts]);

  // console.log("posts variable in Sidebar: ", posts);

  return(
    <div className="sidebarContainer" style={{
      width: props.width
    }} {...props}>
      <Col md="auto">
        <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
          <NavLink to="/about">
            <div className="cardHeader">
              <span>About</span>
            </div>
            <div className="profileImageContainer">
              <img src='https://pbs.twimg.com/profile_images/610556528337141760/hXFpyFbE.jpg' alt="Bio pic" />
            </div>
            <div className="cardBody">
              <p className="personalBio">My name is McP and I keep it real</p>
            </div>
          </NavLink>
        </Card>

        <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
          <div className="cardHeader">
            <span>Social Media</span>
          </div>
        </Card>

        <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
          <div className="cardHeader">
            <span>Recent Posts</span>
          </div>

          <div className="recentPosts">
            {
              posts.map(post => {
                // console.log("post in posts.map: ", post);
                return (
                  <NavLink key={post.id} to={`/post/${post.slug}`}>
                    <div className="recentPost">
                      <h3>{post.blogTitle}</h3>
                      <span>{post.postedOn}</span>
                    </div>
                  </NavLink>
                );
              })
            }

          </div>

        </Card>
      </Col>
    </div>
   )

 }

export default Sidebar