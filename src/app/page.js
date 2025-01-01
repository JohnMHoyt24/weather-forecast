import React from 'react';
import ReactDOM from 'react-dom';
import Forecast from './components/forecast';
import Search from './components/search';

export default function Home() {
  return (
    <div>
      <Search />
      <Forecast />
    </div>
  );
}
