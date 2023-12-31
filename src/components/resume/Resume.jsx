import React from 'react';
import "./resume.css";
import Data from './Data';
import Card from './Card';

const Resume = () => {
  return (
    <section className='resume container section' id='resume'>
      <h2 className='section___title'>Experience</h2>

      <div className='resume___container grid'>
        <div className='timeline grid'>
        {Data.map((val, id) => {
          if(val.category === 'education') {
            return (
              <Card Key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
            )
          }
        })}
        </div>

        <div className='timeline grid'>
        {Data.map((val, index) => {
          if(val.category === 'experience') {
            return (
              <Card Key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
            )
          }
        })}
        </div>
      </div>
    </section>
  )
}

export default Resume