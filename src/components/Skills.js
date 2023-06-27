import React from 'react';
import cplusplus from '../assets/cplusplus.png';
import css from '../assets/css-3.png';
import github from '../assets/github-mark-white.png';
import html from '../assets/html-5.png';
import javascript from '../assets/js.png';
import reactlogo from '../assets/pngwing.com.png';

const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen py-[50px] bg-[#0a192f] text-gray-300 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col items-center w-full h-full">
        <p className=" text-4xl w-min py-2 font-bold inline border-b-4 border-pink-600 ">
          Skills
        </p>
        <p className="py-4">These are the technologies I've worked with</p>

        {/* icons */}
        <div className="w-full grid grid-cols-2 gap-[80px] sm:grid-cols-3 text-center py-8">
          <div className=' hover:scale-125 duration-500 '>
            <img className="w-20 mx-auto" src={reactlogo} alt="react logo" />
            <p className='my-[20px] font-semibold text-lg'>ReactJS</p>
          </div>
          <div className='hover:scale-125 duration-500'>
            <img className="w-20 mx-auto" src={javascript} alt="react logo" />
            <p className='my-[20px] font-semibold text-lg'>JavaScript</p>
          </div>
          <div className='hover:scale-125 duration-500'>
            <img className="w-20 mx-auto" src={css} alt="react logo" />
            <p className='my-[20px] font-semibold text-lg'>CSS</p>
          </div>
          <div className='hover:scale-125 duration-500'>
            <img className="w-20 mx-auto" src={cplusplus} alt="react logo" />
            <p className='my-[20px] font-semibold text-lg'>C++</p>
          </div>
          <div className='hover:scale-125 duration-500'>
            <img className="w-20 mx-auto" src={github} alt="react logo" />
            <p className='my-[20px] font-semibold text-lg'>GitHub</p>
          </div>
          <div className='hover:scale-125 duration-500'>
            <img className="w-20 mx-auto" src={html} alt="react logo" />
            <p className='my-[20px] font-semibold text-lg'>HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
