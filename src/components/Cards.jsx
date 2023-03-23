import React from 'react'
import Single from '../assets/single.svg';
import Double from '../assets/double.svg';
import Triple from '../assets/triple.svg';

const Cards = () => {
  return (
    <div className='py-16 px-4 max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='text-center border shadow-xl my-8 hover:scale-105'>
            <img src={Single} className='w-[80px] mx-auto mt-[-2.8rem]'/>
            <p className='pt-2 text-4xl font-bold'>Single User</p>
            <p className='py-4 text-3xl font-bold'>$50</p>
            <p className='py-2 border-b border-b-gray-300'>500GB Storage</p>
            <p className='py-2 border-b border-b-gray-300'>1 User Allowed</p>
            <p className='py-2 border-b border-b-gray-300'>Send up to 2GB</p>
            <button className='my-4 bg-teal-400 text-black font-bold w-[150px] p-2 rounded hover:bg-teal-200'>Start Trial</button>
        </div>
        <div className='text-center border border-teal-400 shadow-xl my-4 hover:scale-105'>
            <img src={Double} className='w-[80px] mx-auto mt-[-2.8rem]'/>
            <p className='pt-2 text-4xl font-bold'>Double User</p>
            <p className='py-4 text-3xl font-bold'>$80</p>
            <p className='py-2 border-b border-b-gray-300'>1TB Storage</p>
            <p className='py-2 border-b border-b-gray-300'>3 User Allowed</p>
            <p className='py-2 border-b border-b-gray-300'>Send up to 10GB</p>
            <button className='my-4 bg-teal-400 text-black font-bold w-[150px] p-2 rounded hover:bg-teal-200'>Start Trial</button>
        </div>
        <div className='text-center border shadow-xl my-8 hover:scale-105'>
            <img src={Triple} className='w-[80px] mx-auto mt-[-2.8rem]'/>
            <p className='pt-2 text-4xl font-bold'>Triple User</p>
            <p className='py-4 text-3xl font-bold'>$150</p>
            <p className='py-2 border-b border-b-gray-300'>2TB Storage</p>
            <p className='py-2 border-b border-b-gray-300'>6 User Allowed</p>
            <p className='py-2 border-b border-b-gray-300'>Send up to 20GB</p>
            <button className='my-4 bg-teal-400 text-black font-bold w-[150px] p-2 rounded hover:bg-teal-200'>Start Trial</button>
        </div>
    </div>
  )
}

export default Cards