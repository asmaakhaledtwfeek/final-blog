import React from 'react';
import Head from '../components/blog/head';
import Home from '../components/home';
import {Route,Routes}  from 'react-router-dom';
import Blog from './blog';
const home = () => {
  return ( <div>
      
      <Head/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog/>} />
      </Routes>
  
      </div>
  );
};

export default home;
