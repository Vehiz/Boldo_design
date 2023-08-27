import React from 'react'
import './Numbers.css'

const Numbers = () => {
  return (
    <div className='container'>
        <div className='sub-container'>
            <div className='header'>
                <div className='header-text-1'>Our numbers</div>
                <div className='header-text-2'>Handshake infographic mass market crowdfunding iteration.</div>
            </div>
            <div className='text-2-col-container'>
                <div className='text-2-col'>
                    <p className='text-1'>120m</p>
                    <p className='text-2'>cool feature title</p>
                </div>
                <div className='text-2-col'>
                    <p className='text-1'>10.000</p>
                    <p className='text-2'>cool feature title</p>
                </div>
                <div className='text-2-col'>
                    <p className='text-1'>240</p>
                    <p className='text-2'>cool feature title</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Numbers