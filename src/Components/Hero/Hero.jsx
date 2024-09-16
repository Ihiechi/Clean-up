import React from 'react'
import HeroImage from '../Assets/Hero Iamge.png'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero' style={{ backgroundImage:`url(${HeroImage})`}}>
      <div className='hero-subsection'>
      <p className='quality'>Quality cleaning at a fair price</p>
      <h1 className='special'>Specialized, efficient and thorough cleaning services</h1>
      <p className='provide' >We provide Performing cleaning tasks using the least amount of time, energy and money</p>
    </div>
    <div className='btn-divs'>
      <button className='green-btn'>Get started now</button>
      <button className='transparent-btn'>View all services</button>
    </div>
    </div>
  )
}
