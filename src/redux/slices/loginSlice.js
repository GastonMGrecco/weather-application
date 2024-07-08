import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName (state, { payload }) {
      state.userName = payload;
    }
  }
});

export const { setUserName } = loginSlice.actions;
