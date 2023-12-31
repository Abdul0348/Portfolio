import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu'

const Portfolio = () => {
  const [items, setItem] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })
    setItem(updatedItems);
  }
  return (
    <section className='work container section' id='work'>
      <h2 className='section___title'>Recent Works</h2>

      <div className='work___filters'>
        <span className='work___item' onClick={() => setItem(Menu)}>Everything</span>
        <span className='work___item' onClick={() => filterItem('Creative')}>Creative</span>
        <span className='work___item' onClick={() => filterItem('Art')}>Art</span>
        <span className='work___item' onClick={() => filterItem('Design')}>Design</span>
        <span className='work___item' onClick={() => filterItem('Branding')}>Branding</span>
      </div>

      <div className='work___container grid'>
        {items.map((elem) => {
          const{ id, image, title, category} = elem;
          return (
            <div className='work___card' key={id}>
            <div className='work___thumbnail'>
            <img src={image} alt='' className='work___img' />
            <div className='work___mask'>

            {/* </div> */}
            {/* </div> */}
            <span className='work___category'>{category}</span>
            <h3 className='work___title'>{title}</h3>
            <a href='#gh' className='work___button'>
            <i className='icon-link work___button-icon'></i>
            </a>
            </div>
            </div>
            </div>
          ) 
        })}
      </div>
      </section>
  )
}

export default Portfolio