import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'assets/App.css';

/*
  When a user types in the search bar, 
  the search component will make a request
  to the API, then the results will be rendered
  in the Forecast component.
*/

function weatherData(){
  //Initalize state variables for input and weather data
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const toDateFunction = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const weekDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
  }
}

function Search() {
  return (
    <div>
      <h1>Search</h1>

    </div>
  );
}

export default Search;