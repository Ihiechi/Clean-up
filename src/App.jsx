import React from 'react'
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero';
import CleanProduct from './Components/CleanProduct/CleanProduct';
import ServiceOne from './Components/ServiceOne/ServiceOne';

export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <CleanProduct/>
      <ServiceOne/>
      <Footer/>
    </div>
  )
}

