import React from 'react';
import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import Display from './Components/Display';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='flex'>
        <Products />
        <Display />
      </div>
    </div>
  );
}

export default App;
