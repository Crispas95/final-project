import React from 'react'
import Categories from './components/category/Categories';
import Hero from './components/hero/Hero';
import Navabr from './components/navbar/Navabr';
import Receents from './static/recents/Receents';


function App() {
  return (
    <>
    <Navabr />
    <Hero/>
    <Categories/>
    <Receents/>
    </>
  );
}

export default App;
