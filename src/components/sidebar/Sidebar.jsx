import React, { useState } from 'react';
import "./sidebar.css"
import Logo from "../../assets/logo.svg"

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
    <aside className={toggle ? "aside show-menu" : "aside" }>
      <a href="#home" className='nav___logo'>
        <img src={Logo} alt=""/>
      </a>
      <nav className='nav'>
        <div className='nav___menu'>
          <ul className='nav___list'>
            <li className='nav___item'>
              <a href="#home" className='nav___link'>
                <i className='icon-home'></i>
              </a>
            </li>
            <li className='nav___item'>
              <a href="#about" className='nav___link'>
              <i className='icon-user-following'></i>
              </a>
            </li>
            <li className='nav___item'>
              <a href="#services" className='nav___link'>
              <i className='icon-briefcase'></i>
              </a>
            </li>
            <li className='nav___item'>
              <a href="#resume" className='nav___link'>
              <i className='icon-graduation'></i>
              </a>
            </li>
            <li className='nav___item'>
              <a href="#work" className='nav___link'>
              <i className='icon-layers'></i>
              </a>
            </li>
            <li className='nav___item'>
              <a href="#blog" className='nav___link'>
              <i className='icon-note'></i>
              </a>
            </li>
            <li className='nav___item'>
              <a href="#contact" className='nav___link'>
              <i className='icon-bubble'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='nav___footer'>
        <span className='copyright'>&copy; 2023 all right reserved </span>
      </div>
    </aside>
    <div className={toggle ? "nav___toggle nav___toggle-open" : "nav___toggle"} onClick={() => showMenu(!toggle)}>
      <i className='icon-menu'></i>
    </div>
    </>

  )
}

export default Sidebar