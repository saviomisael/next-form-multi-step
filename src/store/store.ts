import { configureStore } from '@reduxjs/toolkit';
import { multiStepFormReducer } from './slices/multi-step-form-slice';

export const store = configureStore({
  reducer: {
    multiStepFormReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
