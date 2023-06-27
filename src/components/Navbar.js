import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../assets/Djed.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="flex fixed justify-center items-center w-full h-[80px]  p-4 bg-[#0a192f] text-gray-300  shadow-lg shadow-black/20 dark:shadow-black/40">
      <div className="flex items-center">
        <ul className="hidden md:flex items-center justify-between text-xl">
          {/* <li>
            <img
              src={logo}
              alt="logo"
              style={{ width: '50px', height: '60px', marginRight:'70px', marginLeft:'0px' }}
            />
          </li> */}

          {/* menu */}
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Experiences
            </Link>
          </li>
          <li>
            <Link to="hobbies" smooth={true} duration={500}>
              Hobbies
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 ">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          }
        >
          <li className='className="py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='className="py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='className="py-6 text-4xl'>
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className='className="py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Experiences
            </Link>
          </li>
          <li className='className="py-6 text-4xl'>
            <Link
              onClick={handleClick}
              to="hobbies"
              smooth={true}
              duration={500}
            >
              Hobbies
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
