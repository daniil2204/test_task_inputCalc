import { configureStore } from '@reduxjs/toolkit';
import calcSlice from './calcSlice';

const store = configureStore({
  reducer: {
    calc: calcSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;