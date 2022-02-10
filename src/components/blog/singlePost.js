import React, { Component } from 'react';
import {col, Container, Row} from 'react-bootstrap';
import axios from 'axios';
import Loader from '../layout/loader';
import Head from './head';


export class singlePost extends Component {
  
    state={
        post:null,
    }
 
   componentDidMount(){
     console.log(this.props)
   }
    componentDidUpdate(prevProps){
    
            if(this.props.id && this.props.id!==prevProps.id){
        axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.id).then(res=>{
           // console.log(res.data);
            this.setState({post:res.data})
        })}
    }
   
    renderPost=()=>{
        if(this.state.post){
            return(
              <>
              <Head title= {this.state.post.title}/>
              <Container>
                <Row>
                  <col>  <p>{this.state.post.body}</p> </col>

  
                </Row>
              </Container>
              </>  
            );
 }else{ return(
        <Loader/>   
);}
 }
  render() {
    return (
        <>
      {this.renderPost()} 
      </>
    );
  }
}
//{this.state.post.title}
export default singlePost;
