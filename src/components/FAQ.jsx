import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: `url(${assets.star_background})`}} id='FAQ'>
      <Navbar/>
      <motion.div
      initial={{opacity: 0, y: 100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-3xl sm:text-6xl md:text-[68px] inline-block max-w-3xl font-semibold pt-20 '>Coming Soon...</h2>
        <p className='text-sm sm:text-lg md:text-[16px] inline-block max-w-3xl leading-tight pt-24'>Our FAQ page is coming soon! We're working on providing answers to the most common questions about our services.</p>
        {/* <div className='space-x-6 mt-16'>
            <Link to='/Services' className='border border-white px-8 py-3 rounded'>Services</Link>
            <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
        </div> */}
      </motion.div>
    </div>
  )
}

export default FAQ
