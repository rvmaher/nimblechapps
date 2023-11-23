import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Character} from '../../typings/character';

const initialState: Record<string, Character> = {};
const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<Character>) => {
      const {id} = action.payload;
      state[id] = action.payload;
    },
    removeFromFavourite: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      delete state[id];
    },
  },
});

export const {addToFavourite, removeFromFavourite} = favouritesSlice.actions;

export default favouritesSlice.reducer;
