import React, { useState, useEffect } from 'react';
import '../styles/RecentPosts.css';
import Card from '../components/Card.js';
// import blogPost from '../data/blog.json';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const posts = blogPost.data;
  //   setPosts(posts);
  // },[posts]);

  return(
    <div style={props.style}>
      <Card style={{marginBottom:'20px'}}>
        <div className="postImageWrapper">
          <img src={"https://dummyimage.com/300x200/000/fff"} alt=""></img>
        </div>

        <div style={{textAlign: 'center'}}>
          <span>Featured</span>
          <h2>Fitness Mantra To Live Fit Life</h2>
          <span>posted on July 21, 2020 by C McP</span>
          <p>lorem blah blah</p>

          <button>Read More</button>
        </div>
      </Card>

    </div>
   )

 }

export default RecentPosts