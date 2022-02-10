import React from "react";
import Home from "./views/home";
import {BrowserRouter,Route,Routes}  from 'react-router-dom';
import Blog from "./views/blog";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Post from "./views/post";
class App extends React.Component {
  
  render(props){
    
  return (
    <>
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/posts/:id" element={<Post {...props}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
  }
}

export default App;
