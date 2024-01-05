import React from 'react';
import './App.css';
import { Header } from './Header';
import { Search } from './Search';
import { Counter } from './Counter';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Search/>
      <Counter/>

    </React.Fragment>
  );
}

export default App;
