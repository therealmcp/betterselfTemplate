import React from 'react'
import '../styles/About.css';
import Layout from '../components/Layout';
import RecentPosts from './RecentPosts';

/**
* @author
* @function About
**/

const About = (props) => {
  return(
    <div>

    <Layout>
      <RecentPosts style={{width: '70%'}}/>
    </Layout>

  </div>
   )

 }

export default About