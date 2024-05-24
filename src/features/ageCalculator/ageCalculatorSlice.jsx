import { createSlice } from '@reduxjs/toolkit';
import { differenceInYears, differenceInMonths, differenceInDays, parseISO } from 'date-fns';

const initialState = {
  date: '',
  age: { years: 0, months: 0, days: 0 },
};

const calculateAge = (date) => {
  const now = new Date();
  const birthDate = parseISO(date);
  return {
    years: differenceInYears(now, birthDate),
    months: differenceInMonths(now, birthDate) % 12,
    days: differenceInDays(now, birthDate) % 30,
  };
};

const ageCalculatorSlice = createSlice({
  name: 'ageCalculator',
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
      state.age = calculateAge(action.payload);
    },
  },
});

export const { setDate } = ageCalculatorSlice.actions;
export default ageCalculatorSlice.reducer;
