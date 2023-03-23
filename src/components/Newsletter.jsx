import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-black text-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-2'>
            <div className='md:col-span-2'>
                <p className='text-3xl font-bold text-teal-400'>Want tips & tricks to optimize your flow?</p>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div>
                <div className='flex pt-4 md:pt-0'>
                    <input className='text-black p-2 rounded w-full' type="email" placeholder='Enter Email' />
                    <button className='bg-teal-400 text-black w-[150px] rounded ml-2 font-bold hover:bg-teal-200'>Notify Me</button>
                </div>
                <p className='pt-2'>We care about the protection of your data. Read our <a href="#" className='text-teal-400'>Privacy Policy</a></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter