import React from 'react';
import "./home.css"
import abdul from "../../assets/abdul.jpeg";
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section className='home container' id='home'>
    <div className='intro'>
      <img src={abdul} alt="" className='home___img'/>
      <h1 className='home___name'>Abdul Rahman</h1>
      <span className='home___description'>
      <Typewriter
      options={{
        strings:[
          'Full Stack Developer',
          'MERN Developer',
        ],
        autoStart: true,
        loop: true,
      }}></Typewriter>
      </span>
      <HeaderSocial />
      <a href="#contact" className='btn'>Hire Me</a>
      <ScrollDown />
    </div>
    <Shapes />
    </section>
  )
}

export default Home