import { configureStore } from '@reduxjs/toolkit';
import ageCalculatorReducer from '../features/ageCalculator/ageCalculatorSlice';

export const store = configureStore({
  reducer: {
    ageCalculator: ageCalculatorReducer,
  },
});
