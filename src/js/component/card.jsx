import PropTypes from "prop-types";
import React from "react";

const Card = (props) => {
  return (
    <div className="card bg-dark text-light mx-1">
      <div className="card-body">{props.sec}</div>
    </div>
  );
};

export default Card;
