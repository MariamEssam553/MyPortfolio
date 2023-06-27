import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Work = () => {
  return (
    <div name='work' className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Title */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col items-center w-full h-full">
        <p className=" text-4xl w-min py-2 font-bold inline border-b-4 border-pink-600 ">
          Experience
        </p>
        <p className="py-4">Check out some of my recent internships</p>

        {/* Cards */}
        <div className="flex flex-col group my-[25px] items-center bg-white border border-gray-200 rounded-lg shadow-lg shadow-black/20 dark:shadow-black/40 md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 hover:scale-105 duration-500">
          <div className="flex flex-col h-auto justify-between p-4 leading-normal">
            <h5 className="mb-0 text-2xl font-bold tracking-tight text-white group-hover:text-pink-600 duration-100">
              Intern at National Bank of Egypt (NBE)
            </h5>
            <p className='text-[#d3d3d394] text-sm'>August 2021 - Spetember 2021</p>
            <p className="mb-3 font-normal text-gray-300 mt-[10px]">
            Information security(Data Security and API security), IT (worked mainly on testing the
            website and application update), in addition to Digital Banking department (I
            observed new technologies and tried to suggest new ones in E-bank branches)
            </p>
            <span className='flex'>
            <a href="/" className='font-extrabold underline text-pink-600 '>
              {' '}
              Click for certificate
            </a>
            <HiArrowNarrowRight size={20} className=" hidden group-hover:flex mt-[5px] mb-0 mx-[10px] bg-pink-600 " />
            </span>
           
          </div>
        </div>
        <div className="flex flex-col group my-[25px] items-center bg-white border border-gray-200 rounded-lg shadow-lg shadow-black/20 dark:shadow-black/40 md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 hover:scale-105 duration-500">
          <div className="flex flex-col h-auto justify-between p-4 leading-normal">
            <h5 className="mb-0 text-2xl font-bold tracking-tight text-white group-hover:text-pink-600 duration-100">
              Intern at Misr Insurance
            </h5>
            <p className='text-[#d3d3d394] text-sm'>July 2022 - August 2022</p>
            <p className="mb-3 font-normal text-gray-300 mt-[10px]">
            I was in the IT and database departments. I had to help in handling the data of
            customers and employees while monitoring the servers and networks
            </p>
            <span className='flex'>
            <a href="/" className='font-extrabold underline text-pink-600 '>
              {' '}
              Click for certificate
            </a>
            <HiArrowNarrowRight size={20} className=" hidden group-hover:flex mt-[5px] mb-0 mx-[10px] bg-pink-600 " />
            </span>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
