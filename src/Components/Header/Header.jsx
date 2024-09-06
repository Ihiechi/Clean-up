import React from 'react'
import './header.css';
import Clean from '../Assets/clean.png'

export default function Header() {
  return (
    <div className='header'>
        <div className='first-img-div'>
            <img src={Clean} alt="" />
            <div>
                <p className='bold-text'><span className='bold-text-span'>Pro</span>Cleaning</p>
                <p>Cleaning Services Company</p>
            </div>
        </div>
        <ul className='header-ul'>
            <li className='active'>Home</li>
            <li>About us</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        <button className='header-btn'>Get a quote</button>
    </div>
  )
}
