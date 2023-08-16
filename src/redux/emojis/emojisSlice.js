import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://emojihub.yurace.pro/api/all';

export const fetchEmojiAsync = createAsyncThunk('emoji/fetchEmojis', async (_, thunkAPI) => {
  try {
    const response = await axios.get(url);
    const emojiData = [];
    response.data.map((dItem) => {
      const newEmoji = {
        name: dItem.name,
        category: dItem.category,
        group: dItem.group,
        code: dItem.htmlCode[0],
        unicode: dItem.unicode[0],
      };
      emojiData.push(newEmoji);
      return null;
    });
    return emojiData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const emojiSlice = createSlice({
  name: 'emoji',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmojiAsync.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchEmojiAsync.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        data: action.payload,
      }))
      .addCase(fetchEmojiAsync.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default emojiSlice.reducer;
