import React from 'react'

const Card = (props) => {
  return (
    <div className='timeline___item'>
        <i className={props.icon}></i>
        <span className='timeline__date'>{props.year}</span>
        <h3 className='timeline___title'>{props.title}</h3>
        <p className='timeline___text'>{props.desc}</p>
    </div>
  )
}

export default Card