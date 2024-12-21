import React from 'react'
import Navbar from '../Navbar'
import { easeInOut, motion } from "framer-motion"
import { assets } from '../../assets/assets'

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
const ServicesPageHeader = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: `url(${assets.backgroundImage})`}} id='Header'>
      <Navbar/>
      <motion.div
      initial={{opacity: 0, y: 100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      className='container flex flex-col items-center text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-4xl sm:text-5xl md:text-[48px] 2xl:text-7xl flex justify-center inline-block max-w-3xl font-semibold pt-20 '>Our Services</h2>
        <p className='text-sm sm:text-md md:text-[16px] text-center leading-loose inline-block max-w-2xl pt-20 pb-20 '>We offer expert appliance repairs, installations, and maintenance for domestic and commercial properties. Whether you're a homeowner, landlord, or business, we provide reliable service tailored to your needs.</p>
        <motion.img
          initial={{rotate:90}}
          animate={{y:[0,-20,0]}}
          transition={{duration:1, repeat:Infinity,ease:"easeInOut"}}
          whileHover={{y:0,transition:{ duration: 0.3 }, cursor:"Pointer"}}
          className='w-20' 
          src= {assets.arrow}
          onClick={() => scrollToSection('ServicesCards')}/>
      </motion.div>
    </div>
  )
}

export default ServicesPageHeader
