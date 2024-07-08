import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '@slices/loginSlice';
import { weatherSlice } from '@slices/weatherSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    weather: weatherSlice.reducer
  }
});

export { store };
