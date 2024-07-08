import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: []
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity (state, { payload }) {
      state.cities.push(payload);
    },
    setImage (state, { payload }) {
      state.cities[payload.i].img = payload.img;
    },
    resetCities (state, { payload }) {
      state.cities = [];
    }
  }
});

export const { setCity, setImage, resetCities } = weatherSlice.actions;
