import React from "react";
import "./Card.css";

const Card = ({ heading,detail }) => {
  return (
    <div className="card" > 
      
      <span>{heading}</span>
      <span >{detail}</span>
      <button className="card-button">LEARN MORE</button>
    </div>
  );
};

export default Card;