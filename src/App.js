import React from 'react';
import './App.css';
import Home from './containers/Home.js';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './containers/ContactUs.js';
import Post from './containers/Post.js';
import About from './containers/About.js';
import Posts from './containers/Posts.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/post/:slug" component={Post} />

      </div>
    </Router>
    
  );
}

export default App;
