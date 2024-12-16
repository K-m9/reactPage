import React from 'react';
// components
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Work from './components/Work';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Home />
      <Nav />
      <Work />
    </div>
  );
};

export default App;
