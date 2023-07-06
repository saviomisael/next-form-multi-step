import { createSlice } from '@reduxjs/toolkit';

export interface MultiStepFormInitialState {
  actualPage: number;
}

const initialState: MultiStepFormInitialState = {
  actualPage: 0,
};

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
  },
});

export const { actions: multiStepFormActions, reducer: multiStepFormReducer } =
  multiStepFormSlice;
