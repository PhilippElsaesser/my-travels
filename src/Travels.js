// src/Travels.js
import React from "react";

const Travels = props => (
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

export default Travels;