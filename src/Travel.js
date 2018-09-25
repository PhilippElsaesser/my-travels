// src/Travel.js
import React from "react";

const Travel = props => (
  <figure>
    <h2>{props.destination}</h2>
    <h4>{props.country}</h4>
    <img
      src={props.image}
      alt={props.destination}
    />
    <p>"The distance between {props.destination} and Lyon is {props.distance}"</p>
    
  </figure>
);

export default Travel;