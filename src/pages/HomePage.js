import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmojiAsync } from '../redux/emojis/emojisSlice';
import Emoji from '../components/Emoji';

function HomePage() {
  const { data, loading, error } = useSelector((state) => state.emoji);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmojiAsync());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      {data.map((emoji) => (
        <Emoji key={emoji.name} emoji={emoji} />
      ))}
    </div>
  );
}

export default HomePage;
