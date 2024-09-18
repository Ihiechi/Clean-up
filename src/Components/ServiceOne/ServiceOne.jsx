import React from 'react'
import Spray from '../Assets/spray.png'
import Mop from '../Assets/mop.png'
import './serviceone.css/'
export default function ServiceOne() {
  return (
    <div className='service-one-div'>
        <div className='service-one-text'>
            <p className='service-one-p'>Affordable Cleaning Solutions</p>
            <h3 className='service-one-h3'>High Quality and Friendly services at Fair Prices</h3>
            <p className='service-one-pp'>We provide comprehensive cleaning services tailored to your needs ranging from residential, corporate and 
               other forms of cleaning services</p>
            <button className='service-one-btn'>Get Quote</button>
        </div>
        <div className='service-one-img-div'>
            <img className='spray service-img' src={Spray} alt="" srcset="" />
            <img className='mop service-img' src={Mop} alt="" srcset="" />
        </div>
    </div>
  )
}
