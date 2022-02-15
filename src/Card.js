import React from "react";
import "./App.css";

function Card({ name = "", email = "", website = "" }) {
  return (
    <div className="card ms-5 Card">
      <div className="card-body ps-3">
        <h5>{name}</h5>

        <p className="">
          <span>Email: </span>
          <span>{email}</span>
        </p>
        <p className="">
          <span>Website: </span>
          <span>{website}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
