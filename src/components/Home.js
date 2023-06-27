import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaGoodreads } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Home = () => {
  return (
    <div className="w-full h-screen">
      {/* social icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[165px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#0a66c2]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="https://www.linkedin.com/in/mariam-essam-64526120b/"
            >
              LinkedIn <BsLinkedin />
            </a>
          </li>
          <li className="w-[165px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-15px] duration-300 bg-[#493862]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="https://github.com/MariamEssam553"
            >
              Github <BsGithub />
            </a>
          </li>
          <li className="w-[165px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#75420e]">
            <a
              className="flex justify-between items-center w-full text-gray-50"
              href="/"
            >
              Goodreads <FaGoodreads size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
