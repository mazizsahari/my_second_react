import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-32'>
        <p className='text-5xl font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <p className='text-3xl font-bold text-teal-400 p-2'>Grow with data</p>
        <p className='text-2xl font-bold pt-4'>Fast, flexible financing for <Typed className='text-teal-400' strings={['BTC', 'ETH', 'LTC']} typeSpeed={300} loop/>
        </p>
        <p className='font-bold text-gray-400 p-2'>Monitor your data analytics to increase revenue for BTC, ETH, & LTC platforms.</p>
        <button className='bg-teal-400 w-[150px] p-2 rounded text-black font-bold mt-4 hover:bg-teal-200'>Get Started</button>
    </div>
  )
}

export default Hero