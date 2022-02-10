import React from 'react';
import { Card,Button } from 'react-bootstrap';
import defaultImg from "../../assets/images/default.jpg";
import { Link } from 'react-router-dom';
const post = (props) => {
  
  return (<Card style={{ width: '18rem' }} className="mb-4">
  <Card.Img variant="top" src={defaultImg} />
  <Card.Body>
    <Card.Title>{props.post.title}</Card.Title>
    <Card.Text>
      {props.post.body}
    </Card.Text>
    <Link className='btn btn-primary' to={"/posts/"+props.post.id}>
      open post
    </Link>
    {/*<Button variant="primary" onClick={()=>props.openModel(props.post.id)}>open post </Button>*/}
  </Card.Body>
</Card>
);
};

export default post;
