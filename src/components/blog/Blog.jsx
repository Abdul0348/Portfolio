import React from 'react';
import "./blog.css";
import Image1 from '../../assets/blog-1.svg';
import Image2 from '../../assets/blog-2.svg';
import Image3 from '../../assets/blog-3.svg';

const Blog = () => {
  return (
    <section className='blog container section' id='blog'>
      <h2 className='section___title'>Latest Post</h2>

      <div className='blog___container grid'>

        <div className='blog___card'>
          <div className='blog___thumb'>
            <a href='#jh'><span className='blog___category'>Reviews</span></a>
            <a href='#gh'><img src={Image1} alt='' className='blog___img' /></a>
          </div>
          <div className='blog___details'>
            <h3 className='blog___title'>5 best app development tool for your project</h3>
              <div className='blog___meta'>
                <span>09 February, 2022</span>
                <span className='blog___dot'>.</span>
                <span>Bolby</span>
              </div>
           
          </div>
        </div>

        <div className='blog___card'>
          <div className='blog___thumb'>
            <a href='#jh'><span className='blog___category'>Tutorial</span></a>
            <a href='#gh'><img src={Image2} alt='' className='blog___img' /></a>
          </div>
          <div className='blog___details'>
            <h3 className='blog___title'>Common misconception about payment</h3>
              <div className='blog___meta'>
                <span>07 February, 2022</span>
                <span className='blog___dot'>.</span>
                <span>Bolby</span>
              </div>
              </div>
              </div>

              <div className='blog___card'>
          <div className='blog___thumb'>
            <a href='#jh'><span className='blog___category'>Business</span></a>
            <a href='#gh'><img src={Image3} alt='' className='blog___img' /></a>
          </div>
          <div className='blog___details'>
            <h3 className='blog___title'>3 thing to know about startup Business</h3>
              <div className='blog___meta'>
                <span>05 February, 2022</span>
                <span className='blog___dot'>.</span>
                <span>Bolby</span>
              </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog