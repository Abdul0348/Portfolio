import React from 'react';
import "./about.css";
import abdul from '../../assets/abdul.jpeg';
import AboutBox from './AboutBox';
import ARahman_Resume from '../../assets/ARahman_Resume.pdf';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className='section___title'>About Me</h2>
      <div className='about___container grid'>
        <img src={abdul} alt="" className='about___img'/>
        <div className='about___data grid'>
          <div className='about___info'>
            <p className='about___description'>
          Website Developer specializing in JavaScript and skilled in frameworks like React.js, 
          Node.js, Express.js, and MongoDB. I love learning fast and working closely with clients to create practical, 
          scalable, and user-friendly solutions for real-world problems. Let's team up to bring your ideas to life.
            </p>
            <a href={ARahman_Resume} download='ARahman_resume' className='btn'>Download CV</a>
          </div>
          <div className='about___skils grid'>
            <div className='skills___data'>
              <div className='skills___titles'>
                <h3 className='skills___name'>Development</h3>
                <span className='skills___number'>90%</span>
              </div>
              <div className='skills___bar'>
                <span className='skills___percentage development'></span>
              </div>
            </div>

            <div className='skills___data'>
              <div className='skills___titles'>
                <h3 className='skills___name'>UI/UX Design</h3>
                <span className='skills___number'>80%</span>
              </div>
              <div className='skills___bar'>
                <span className='skills___percentage ui___design'></span>
              </div>
            </div>

            <div className='skills___data'>
              <div className='skills___titles'>
                <h3 className='skills___name'>Photography</h3>
                <span className='skills___number'>60%</span>
              </div>
              <div className='skills___bar'>
                <span className='skills___percentage photography'></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox />

    </section>
  )
}

export default About