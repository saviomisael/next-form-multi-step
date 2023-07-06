import { createSlice } from '@reduxjs/toolkit';

export interface MultiStepFormInitialState {
  actualPage: number;
}

const initialState = {
  actualPage: 0,
} as MultiStepFormInitialState;

export const multiStepFormSlice = createSlice({
  name: 'multi-step-form',
  initialState,
  reducers: {
    goToDetailsStep: (state) => {
      state.actualPage = 0;
    },
    goToPreferencesStep: (state) => {
      state.actualPage = 1;
    },
    returnStep: (state) => {
      state.actualPage--;
    },
  },
});

export const { actions: multiStepFormActions, reducer: multiStepFormReducer } =
  multiStepFormSlice;
