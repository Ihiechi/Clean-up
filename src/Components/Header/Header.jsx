import React, { useState } from 'react';
import './header.css';
import Clean from '../Assets/clean.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header'>
        <div className='first-img-div'>
            <img className='logo' src={Clean} alt="" />
            <div>
                <p className='bold-text'><span className='bold-text-span'>Pro</span>Cleaning</p>
                <p>Cleaning Services Company</p>
            </div>
        </div>
        
        <button className='toggle-btn' onClick={toggleMenu}>
            {isOpen ? '✖' : '☰'}
        </button>
        
        <ul className={`header-ul ${isOpen ? 'show-menu' : ''}`}>
            <li className='active'>Home</li>
            <li>About us</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        {isOpen && <button className='header-btn'>Get a quote</button>}
    </div>
  );
}
