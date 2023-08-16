import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmojiAsync } from '../redux/emojis/emojisSlice';

const HomePage = () => (
  <div>
    <p>This is the home page</p>
  </div>
);

export default HomePage;
