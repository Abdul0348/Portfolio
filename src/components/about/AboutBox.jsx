import React from 'react'

const AboutBox = () => {
  return (
    <div className='about___boxes grid'>
        <div className='about___box'>
            <i className='about___icon icon-fire'></i>
            <div>
            <h3 className='about___title'>19</h3>
            <span className='about___subtitle'>Project Completed</span>
        </div>
    </div>

    <div className='about___box'>
            <i className='about___icon icon-cup'></i>
            <div>
            <h3 className='about___title'>670</h3>
            <span className='about___subtitle'>Cup of Coffee</span>
        </div>
    </div>

    <div className='about___box'>
            <i className='about___icon icon-people'></i>
            <div>
            <h3 className='about___title'>27</h3>
            <span className='about___subtitle'>Satisfied Clients</span>
        </div>
    </div>

    <div className='about___box'>
            <i className='about___icon icon-badge'></i>
            <div>
            <h3 className='about___title'>15</h3>
            <span className='about___subtitle'>Nominees Winners</span>
        </div>
    </div>


    </div>

  )
}

export default AboutBox