import React from 'react';

const head = (props) =>{
  return (
  <div class="head d-flex align-items-center justify-content-center">
  <h1 className="display-2 text-light">{props.title?props.title:"Hello React"}</h1>
</div>
);};

export default head;
