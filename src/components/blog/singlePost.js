import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import axios from 'axios';
import Loader from '../layout/loader';

export class singlePost extends Component {
    state={
        post:null,
    }
    componentDidUpdate(prevProps){
        if(this.props.id && this.props.id!==prevProps.id){
        axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.id).then(res=>{
            console.log(res.data);
            this.setState({post:res.data})
        })}
    }
    renderPost=()=>{
        if(this.state.post){
            return(
                <Modal aria-labelledby="contained-modal-title-vcenter" size='lg'show={this.props.showModel}
                centered
                onHide={this.props.closeModelHandlar}
                animation={false}>
                <Modal.Header closeButton >
                  <Modal.Title id="contained-modal-title-vcenter">
                    {this.state.post.title}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                  <p>{this.state.post.body}</p>    
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.props.closeModelHandlar} >Close</Button>
                </Modal.Footer>
              </Modal> 
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

export default singlePost;
