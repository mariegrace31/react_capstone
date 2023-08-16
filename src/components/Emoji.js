import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

function Emoji({ emoji }) {
  const { name, code } = emoji;
  return (
    <>
    <div className="emoji-container">
      <NavLink 
      to={`/details/${name}`}
      className="details-link"
      data-testid="deatails-link" >
        <div className="image">
          <img src={code} alt="emoji" />
        </div>
        <h1 className="emoji-name">{name}</h1>
      </NavLink>
    </div>
    </>
  );
}

export default Emoji;

Emoji.PropTypes = {
  emoji: PropTypes.shape({
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
};
