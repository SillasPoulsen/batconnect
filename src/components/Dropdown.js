import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-violet-300'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-4'>
        Home
      </Link>
      <Link to='/about' className='p-4'>
        Profile
      </Link>
      <Link to='/menu' className=''>
        Why Lens
      </Link>
    </div>
  );
};

export default Dropdown;