import React from 'react';
import "./pricing.css";
import Image1 from '../../assets/price-1.svg';
import Image2 from '../../assets/price-2.svg';
import Image3 from '../../assets/price-3.svg';

const Pricing = () => {
  return (
    <section className='pricing container section'>
      <h2 className='section___title'>Pricing Plan</h2>
      <div className='pricing___container grid'>

        <div className='pricing___item'>
          <img src={Image1} alt='' className='pricing___img' />
          <h3 className='pricing___plan'>Basic</h3>
          <p className='pricing___title'>A simple option but powerful to manage your Bussiness</p>
          <p className='pricing___support'>Email Support</p>
          <h3 className='price'>
            <em>$</em> 09 <span>Month</span>
          </h3>
          <a href='#' className='btn'>Get Started</a>
        </div>

        <div className='pricing___item best'>
        <span className='badge'>Recommended</span>
          <img src={Image2} alt='' className='pricing___img' />
          <h3 className='pricing___plan'>Premium</h3>
          <p className='pricing___title'>Unlimited product including app integration and more features</p>
          <p className='pricing___support'>Mon-Fri support</p>
          <h3 className='price'>
            <em>$</em> 14 <span>Month</span>
          </h3>
          <a href='#' className='btn'>Get Started</a>
        </div>

        <div className='pricing___item'>
          <img src={Image3} alt='' className='pricing___img' />
          <h3 className='pricing___plan'>Ultimate</h3>
          <p className='pricing___title'>A wise option for large companies and individuals</p>
          <p className='pricing___support'>24/7 support</p>
          <h3 className='price'>
            <em>$</em> 21 <span>Month</span>
          </h3>
          <a href='#' className='btn'>Get Started</a>
        </div>

      </div>
    </section>
  )
}

export default Pricing