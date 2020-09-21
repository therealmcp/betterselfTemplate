import React from 'react';
import '../styles/Post.css';
import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';

/**
* @author
* @function Post
**/

const Post = (props) => {

  return(
    <Layout>
      <BlogPost {...props}/>
    </Layout>
   )

 }

export default Post