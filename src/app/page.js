import React from 'react';
import ReactDOM from 'react-dom';
import Forecast from './components/forecast';
import Search from './components/search';

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Search />
      <Forecast />
    </div>
  );
}
