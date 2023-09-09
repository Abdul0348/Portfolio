import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className='contact container section' id='contact'>
      <h2 className='section___title'>Get In Touch</h2>

      <div className='contact___container grid'>
        <div className='contact___info'>
          <h3 className='contact___title'>Let's talk about everything!</h3>
          <p className='contact___details'>Reach out to me via Email!</p>
          {/* <p className='contact___details'>Don't like forms? send me an Email</p> */}
        </div>

        <form action='' className='contact___form'>
          <div className='contact___form-group'>
            <div className='contact___form-div'>
              <input type="text" className='contact___form-input' placeholder='Full Name' />
            </div>

            <div className='contact___form-div'>
              <input type="email" className='contact___form-input' placeholder='Your Email' />
            </div>
          </div>
          <div className='contact___form-div'>
              <input type="text" className='contact___form-input' placeholder='Insert Your Subject' />
            </div>
            <div className='contact___form-div contact___form-area'>
              <textarea name='' id='' cols='30' rows='10' className='contact___form-input' placeholder='Write your Message' />
            </div>

            <button className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact