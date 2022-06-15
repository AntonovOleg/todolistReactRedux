import React from 'react';
import Links from './Links.jsx';

const About = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <h2>About Page</h2>
        This app was created by using React and React-Thunk.
        <Links currentPage='about' />
      </div>
    </div>
  );
};

export default About;
