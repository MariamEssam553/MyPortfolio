import React from 'react';
import profile from '../assets/WhatsApp Image 2023-06-26 at 15.20.55.jpg';

const About = () => {
  return (
    <div
      name="about"
      className="flex flex-col justify-center items-center w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className='flex justify-center mb-[50px]'>
        <img
          src={profile}
          alt="My profilepic"
          style={{ width: '380px', height:'auto', borderRadius: '80px' }}
        />
      </div>
      
      <div className="max-w-[1000px] w-full grid grid-cols-1">
        <div className="sm: text-center pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            {' '}
            About{' '}
          </p>
        </div>
        <div></div>
      </div>

      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
        <div className="sm:text-right text-3xl font-bold ">
          <p>
            Hi! I'm Mariam Essam, nice to meet you. Please take a look around
          </p>
        </div>
        <div className="flex items-center">
          <p className='italic'>
            I am passionate about building excellent software that improves the
            lives of those around me. I hope that one day I will aid in saving
            the environment and helping those in need around the world through
            my skills and knowledge
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
