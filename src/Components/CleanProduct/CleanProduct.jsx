import React from 'react'
import './cleanproduct.css'
import OfficeClean from '../Assets/officeclean.png'
import HomeClean from '../Assets/homeclean.png'
import HouseClean from '../Assets/houseclean.png'
import TinyArrow from '../Assets/tinyarrow.png'
import ArrowWhite from '../Assets/arrowhite.png'
export default function CleanProduct() {
  return (
    <div>
        <div className='clean-header'>
            <div>
            <h3 className='clean-bold'>We Always Provide The Best Service</h3>
            </div>
            <div>
                <h4 className='clean-service'>Services</h4>
                <p className='clean-service-p'>While we can customize your cleaning plan to suit your
                   needs. Most clients schedule cleaning services</p>
            </div>
        </div>
        <hr />
        <div className='clean-container'>
        <div className='clean-div-img'>
            <div className='clean-img-div'>
                <img className='house-clean-img' src={OfficeClean} alt="people cleaning" />
                <h3 className='clean-up-h3'>Office Cleaning</h3>
                <p className='clean-up-p'>While we can customize your cleaning plan to suit your needs,
                   most clients schedule regular cleaning services</p>
                <button className='clean-btn'>Book Now <span><img className='tiny-arrow' src={TinyArrow} alt="" /></span></button>
            </div>
        </div>
        <div className='clean-div-img'>
            <div className='clean-img-div'>
                <img className='house-clean-img' src={HomeClean} alt="" srcset="" />
                <h3 className='clean-up-h3'>Spring Cleaning</h3>
                <p className='clean-up-p'>While we can customize your cleaning plan to suit your needs,
                   most clients schedule regular cleaning services</p>
                <button className='clean-btn-green'>Book Now <span><img className='tiny-arrow-white'src={ArrowWhite} alt="" /></span></button>
            </div>
        </div>
        <div className='clean-div-img'>
            <div className='clean-img-div'>
                <img className='house-clean-img'src={HouseClean} alt="" srcset="" />
                <h3 className='clean-up-h3'>House Cleaning</h3>
                <p className='clean-up-p'>While we can customize your cleaning plan to suit your needs,
                   most clients schedule regular cleaning services</p>
                <button className='clean-btn'>Book Now <span><img src={TinyArrow} alt="" /></span></button>
            </div>
        </div>
        </div>
    </div>
  )
}
