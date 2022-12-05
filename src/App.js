import './App.css';

import * as React from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Hug from './components/Hug';

import useScrollBlock from './components/useScrollBlock';

function App() {
  const [blockScroll, allowScroll] = useScrollBlock();

  blockScroll();

  return (
    <div className="text-white bg-gray-900 body-font">
      <NavBar />
      <Home />
      <Projects />
      <Hug />
    </div>
  );
}

export default App;