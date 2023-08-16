import { configureStore } from '@reduxjs/toolkit';
import emojiReducer from './emojis/emojisSlice';

const store = configureStore({
  reducer: {
    emoji: emojiReducer,
  },
});

export default store;
