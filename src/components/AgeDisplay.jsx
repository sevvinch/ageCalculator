import React from 'react';
import { useSelector } from 'react-redux';

const AgeDisplay = () => {
  const age = useSelector((state) => state.ageCalculator.age);

  return (
    <div className="text-center mt-4">
      <p className="text-5xl text-purple-500 font-bold">
        {age.years} <span className="text-black">years</span>
      </p>
      <p className="text-5xl text-purple-500 font-bold">
        {age.months} <span className="text-black">months</span>
      </p>
      <p className="text-5xl text-purple-500 font-bold">
        {age.days} <span className="text-black">days</span>
      </p>
    </div>
  );
};

export default AgeDisplay;
