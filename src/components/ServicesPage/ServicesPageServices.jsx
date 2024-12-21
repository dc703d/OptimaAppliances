import React from 'react'
import { assets, testimonialsData, servicesData } from '../../assets/assets'
import { motion } from "framer-motion"

const ServicesPageServices = () => {
  return (
    <motion.div 
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='ServicesCards'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>For <span className='underline under underline-offset-4 decoration-1 font-light'>Homes, Businesses & Agencies</span></h1>      
        <p className='text-center text-gray-500 mb-12 mx-auto max-w-80'>Comprehensive Appliance Repairs for All</p>
    
        <div className='flex flex-wrap justify-center gap-8'>

            {servicesData.map((service,index)=>(
                <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                        <img className='w-20 h-20 mx-auto mb-4' src={service.image} alt={service.alt}/>
                    <h2 className='text-[20px] text-gray-700 font-medium pb-3'>{service.name}</h2>
                    <p className='text-gray-500 text-sm pb-5'>{service.text}</p>
                    <ul>
                        <div className='flex pt-15 items-center'>
                            <img className='w-7 mr-5' src={service.icon1}/>
                            <p className='text-gray-500 text-[11px] font-medium text-start max-w-[230px]'>{service.subheading1}</p>
                        </div>
                        <div className='flex pt-5 items-center'>
                            <img className='w-7 mr-5' src={service.icon2}/>
                            <p className='text-gray-500 text-[11px] font-medium text-start'>{service.subheading2}</p>
                        </div>
                        <div className='flex pt-5 items-center'>
                            <img className='w-7 mr-5' src={service.icon3}/>
                            <p className='text-gray-500 text-[11px] font-medium text-start max-w-[220px]'>{service.subheading3}</p>
                        </div>
                    </ul>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default ServicesPageServices
