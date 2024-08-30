import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed px-4 w-full h-[80px] flex justify-between items-center  bg-[#0a192f] text-gray-300'>
    

      {/* menu */}
      <ul className='hidden md:flex hover:cursor-pointer font-semibold'>
        <li className='px-4 '>
          <Link to='home' smooth={true} duration={500} className='hover:text-yellow-200 font-semibold'>
            Home
          </Link>
        </li>
        <li className='px-4'>
          <Link to='about' smooth={true} duration={500} className='hover:text-yellow-200'>
            About
          </Link>
        </li>
        <li className='px-4 hover:text-yellow-200'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li> 
        <li className='px-4 hover:text-yellow-200'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='px-4 hover:text-yellow-200'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-3'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex ml-2 justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/gaurav-wakhare-95b82620b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            >
              Linkedin <FaLinkedin size={30} className='mr-2'/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex ml-2 justify-between items-center w-full text-gray-300'
              href='https://github.com/Gaurav2418?tab=repositories'
            >
              Github <FaGithub size={30} className='mr-2' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex ml-2 justify-between items-center w-full text-gray-300'
              href='gwakhare2418@gmail.com'
            >
              Email <HiOutlineMail size={30} className='mr-2' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex ml-2 justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1FoyfvEC8so8ajOba9qe22POKLI0-z4S4/view?usp=drivesdk'
            >
              Resume <BsFillPersonLinesFill size={30} className='mr-2' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
