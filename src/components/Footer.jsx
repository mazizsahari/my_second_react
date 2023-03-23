import React from 'react'
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='bg-black text-white'>
        <div className='py-16 px-4 max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div>
                <p className='text-4xl text-teal-400 font-bold'>REACT</p>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda animi alias nesciunt fuga voluptas, eos aut corrupti dolorum earum ex. Dolorem molestias vitae rem quasi itaque reiciendis, asperiores aliq className='text-4xl text-teal-400 font-bold'uid a.</p>
                <div className='flex justify-between pt-3'>
                    <AiFillFacebook size={30}/>
                    <AiFillInstagram size={30}/>
                    <AiFillTwitterCircle size={30}/>
                    <AiFillGithub size={30}/>
                </div>
            </div>
            <div className='md:col-span-2 flex justify-between'>
                <div>
                    <p className='text-2xl text-sky-400 font-bold'>Solutions</p>
                    <p className='py-2'>Analytics</p>
                    <p className='py-2'>Marketing</p>
                    <p className='py-2'>Commerce</p>
                    <p className='py-2'>Insights</p>
                </div>
                <div>
                    <p className='text-2xl text-sky-400 font-bold'>Support</p>
                    <p className='py-2'>Analytics</p>
                    <p className='py-2'>Marketing</p>
                    <p className='py-2'>Commerce</p>
                    <p className='py-2'>Insights</p>
                </div>
                <div>
                    <p className='text-2xl text-sky-400 font-bold'>Company</p>
                    <p className='py-2'>Analytics</p>
                    <p className='py-2'>Marketing</p>
                    <p className='py-2'>Commerce</p>
                    <p className='py-2'>Insights</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer