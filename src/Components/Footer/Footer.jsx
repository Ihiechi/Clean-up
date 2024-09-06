import React from 'react'
import './footer.css'
import Clean from '../Assets/clean.png'

export default function Footer() {
  return (
    <div className='container'>
    <div className='footer'>
      <div>
      <div className='first-img-footer-div'>
            <img src={Clean} alt="" />
            <div>
                <p className='bold-text-footer'><span className='bold-text-span-footer'>Pro</span>Cleaning</p>
                <p>Cleaning Services Company</p>
            </div>
        </div>
        <p className='footer-third-p'>Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.</p>
      </div>
      <div>
        <h3 className='h3-text'>Company</h3>
         <ul className='footer-third-ul'> 
            <li>About us</li>
            <li>Services</li>
            <li>Our Team</li>
         </ul>
      </div>
      <div>
        <h3 className='h3-text'>Know More</h3>
         <ul className='footer-third-ul' >
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
         </ul>
      </div>
      <div className='footer-fourth'>
        <h3 className='h3-text'>News Letter</h3>
         <input type="email" className='footer-input' placeholder='Email Goes here'/>
         <button className='footer-btn'>Send</button>
      </div>
    </div>
    <hr />
    <p className='footer-last-text'>2024 "Hechy" All rights reserved</p>
    </div>
  )
}
