import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaGoodreads } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-[#0a192f]">

      {/* social icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[165px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#0a66c2]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="https://www.linkedin.com/in/mariam-essam-64526120b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <BsLinkedin />
            </a>
          </li>
          <li className="w-[165px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-15px] duration-300 bg-[#493862]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="https://github.com/MariamEssam553"
              target="_blank"
              rel="noreferrer"
            >
              Github <BsGithub />
            </a>
          </li>
          <li className="w-[165px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-15px] duration-300  bg-slate-500">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              target="_blank"
              href="https://drive.google.com/file/d/1BrzGpK5-oZ-MJHlYFYYHyK1OsIQSxZKs/view?usp=drive_link"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill />
            </a>
          </li>
          <li className="w-[165px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="mailto:ghanemmariam26@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email <HiOutlineMail size={20} />
            </a>
          </li>
          <li className="w-[165px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#75420e]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="https://www.goodreads.com/user/show/97564528-mariam"
              target="_blank"
              rel="noreferrer"
            >
              Goodreads <FaGoodreads size={20} />
            </a>
          </li>
        </ul>
      </div>

      {/* Title */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-pink-600 font-bold mx-1 text-lg"> Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Mariam Essam
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Web Developer
        </h2>
        <p className='my-3 mx-1 text-lg text-[#8892b0]'>
          Hardworking and dedicated college student working towards a B.Sc. in
          Computer Engineering
        </p>

        <div>
          <button className="text-white group border-2 px-6 py-3 my-5 mx-1 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>

      </div>

    </div>
  );
};

export default Home;
