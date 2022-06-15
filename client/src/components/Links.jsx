import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/links.css';

const Links = (props) => {
  return (
    <div className='link-wrapper'>
      {props.currentPage === 'main' ? (
        <Link to='/about'>About</Link>
      ) : (
        <Link to='/'>Main</Link>
      )}
    </div>
  );
};

export default Links;
