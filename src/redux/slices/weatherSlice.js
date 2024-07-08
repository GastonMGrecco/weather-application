import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: [],
  loading: false,
  error: null
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity (state, { payload }) {
      state.cities.push(payload);
    },
    setImage (state, { payload }) {
      if (state.cities[payload.i]) {
        state.cities[payload.i].img = payload.img;
      }
    },
    setLoading (state, { payload }) {
      state.loading = payload;
    },
    setError (state, { payload }) {
      state.error = payload;
    },
    resetCities (state, { payload }) {
      state.cities = [];
    }
  }
});

export const { setCity, setImage, resetCities, setLoading, setError } = weatherSlice.actions;
