import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Emoji({ emoji }) {
  const { name, htmlCode } = emoji;

  // Convert HTML entity to Unicode character
  const unicode = String.fromCodePoint(parseInt(htmlCode[0].replace('&#', '').replace(';', ''), 10));

  return (
    <div className="emoji-container">
      <NavLink
        to={`/details/${name}`}
        className="details-link"
        data-testid="details-link"
      >
        <div className="image">
          {/* Render the emoji Unicode character */}
          <span>{unicode}</span>
        </div>
        <h1 className="emoji-name">{name}</h1>
      </NavLink>
    </div>
  );
}

Emoji.propTypes = {
  emoji: PropTypes.shape({
    name: PropTypes.string.isRequired,
    htmlCode: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default Emoji;
