import React from "react";
import Card from "./card.jsx";

//create your first component
const Home = (props) => {
  return (
    <div className="d-flex">
      <div className="card">
        <div className="card-body">
          <i className="far fa-clock"></i>
        </div>
      </div>
      <Card sec={props.count.toString().padStart(6, 0)[0]} />
      <Card sec={props.count.toString().padStart(6, 0)[1]} />
      <Card sec={props.count.toString().padStart(6, 0)[2]} />
      <Card sec={props.count.toString().padStart(6, 0)[3]} />
      <Card sec={props.count.toString().padStart(6, 0)[4]} />
      <Card sec={props.count.toString().padStart(6, 0)[5]} />
    </div>
  );
};

export default Home;
