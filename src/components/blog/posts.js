import React, { Component } from 'react';
import axios from 'axios';
import { Container,Row,Col,Spinner} from 'react-bootstrap';
import Post from './post';
import SinglePost from './singlePost';
import Loader from '../layout/loader';
export class posts extends Component {
  constructor(props) {
    super(props);
}
  state={
    posts:[],
    showModel:false,
    currentId:null,
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
     this.setState({posts:res.data});
  });
  }
  renderPosts=()=>{
    if(this.state.posts.length >0){
     return( this.state.posts.map(post=>{
        return(
          <Col md={6} lg={4} key={post.id}> <Post post={post} openModel={this.openModel}/> </Col>
        );
      })  );
    }
    else{
      return(
        <Loader/>   
      );
    }
  }
  openModel=(id)=>{
    //console.log(id);
    this.showModelHandlar();
    this.setState({currentId:id})
  }
  closeModelHandlar=()=>{
    this.setState({showModel:false})
  }
  showModelHandlar=()=>{
    this.setState({showModel:true})
  }
  render() {
    return (<Container>
      <Row>
        <Col><h2 className='h3 text-primary border-bottom pb-3 mb-4'>Latest Posts</h2></Col>
      </Row>
      <Row>{this.renderPosts()}</Row>
    
  </Container>
  );}
}

export default posts;
