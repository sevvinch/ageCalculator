import React from 'react';
import DateInput from './components/DateInput';
import AgeDisplay from './components/AgeDisplay';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <DateInput />
            <AgeDisplay />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
