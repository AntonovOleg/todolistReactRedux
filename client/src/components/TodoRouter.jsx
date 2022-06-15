import React from 'react';
import Main from './Main.jsx';
import About from './About.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const TodoRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
};

export default TodoRouter;
