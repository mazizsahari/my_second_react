import React from 'react'
import Analytics_image from '../assets/analytics_image.svg';

const Analytics = () => {
  return (
    <div className='py-16 px-4 max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <div>
            <img src={Analytics_image}/>
        </div>
        <div className='flex flex-col justify-center'>
            <p className='text-4xl font-bold text-teal-400'>Data Analytics Dashboard</p>
            <p className='text-2xl font-bold text-black pt-2'>Manage Data Analytics Centrally</p>
            <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis, quia fugiat delectus esse beatae quisquam praesentium nostrum architecto, sunt hic voluptates odit ipsum placeat laboriosam laborum fugit adipisci quas!</p>
            <button className='bg-black text-teal-400 w-[150px] p-2 mt-4 rounded hover:bg-gray-800 mx-auto md:mx-0'>Get Started</button>
        </div>
    </div>
  )
}

export default Analytics