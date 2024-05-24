import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDate } from '../features/ageCalculator/ageCalculatorSlice';
import { AiOutlineArrowDown } from "react-icons/ai";

const DateInput = () => {
  const dispatch = useDispatch();
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleDateChange = () => {
    if (day && month && year) {
      const date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      dispatch(setDate(date));
      setClicked(true); 
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="border rounded-md p-2 text-center w-12"
        />
        <input
          type="text"
          placeholder="Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border rounded-md p-2 text-center w-12"
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border rounded-md p-2 text-center w-20"
        />
      </div>
      <div className="flex items-center gap-1">
        <div className="border-b border-gray-200"></div>
        <button
        onClick={handleDateChange}
        className={`border rounded-[50%] p-2 mt-2 ${clicked ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'}`}
      >
        <AiOutlineArrowDown />
      </button>
      </div>
    </div>
  );
};

export default DateInput;
