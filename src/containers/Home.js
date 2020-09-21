import React from 'react';
import '../styles/Home.css';

import RecentPosts from './RecentPosts.js';
import blogData from '../data/blog.json';
import Layout from '../components/Layout.js';
import Card from '../components/Card.js';

const SideImage = props => {
  return (
    <div style={{  height: `${props.height}px`  }}>
      <img src={props.src} alt="" />
    </div>
  )
}

const ImageGallery = props => (
  <div className="galleryPost" style={props.galleryStyle}>
    <section style={{ width: props.largeWidth }}>
      <div className="mainImageWrapper">
          <img src={require('../blogPostImages/' + props.imagesArray[1])} alt="" />
      </div>
    </section>

    <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
      {
        props.imagesArray.map(image => 
          <SideImage 
            height={props.sideImageHeight}
            src={require('../blogPostImages/' + image)}
            alt="" />
        )
      }
    </section>
  </div>
);

const Home = props => {

  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight+'px',
    overflow: 'hidden'
  }

  const sideImageHeight = galleryHeight/3;

  const imgArr = blogData.data.map(post => post.blogImage)

  return (
    <div>
      <Card>
        <ImageGallery
            largeWidth="70%"
            smallWidth="30%"
            sideImageHeight={sideImageHeight}
            galleryStyle={galleryStyle}
            imagesArray={imgArr}
          />
      </Card>

      <Layout>
        <RecentPosts style={{width: '70%'}}/>
      </Layout>

    </div>
  );
}

export default Home;