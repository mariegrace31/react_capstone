import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const { name } = useParams();
  const emoji = useSelector((state) => state.emoji.data.find((item) => item.name === name));

  if (!emoji) {
    return <div>Emoji not found</div>;
  }

  const { code, unicode } = emoji;

  return (
    <div>
      <Link to="/">Back</Link>
      <div>
        Emoji Code:
        {code}
      </div>
      <div>
        Emoji Unicode:
        {unicode}
      </div>
      {/* Display other details as needed */}
    </div>
  );
};

export default DetailsPage;
