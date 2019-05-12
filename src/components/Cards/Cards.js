import React from "react";

const Cards = props => {
  return (
    <div>
      <img src={props.image} />
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};
