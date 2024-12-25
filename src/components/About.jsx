import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x: 200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{once: true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-2'>Passionate About Appliances, Dedicated to Your Vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-10'>
            <img src={assets.engineer_door} alt='brand image' className='w-full max-w-lg md:w-1/2 lg:w-1/2 my-10'/>
            <div className='textForUs my-10'>
                <h2 className='text-xl sm:text-2xl font-bold mb-6 md:text-end'>Why Choose Us?</h2>
                <p className='text-gray-500 mb-2 md:text-end leading-relaxed'>At Optima, we’re dedicated to providing exceptional appliance repair services tailored to meet your needs. With years of experience and a commitment to excellence, we pride ourselves on delivering reliable, efficient, and affordable solutions for your home. <br/><br/>Our skilled technicians use the latest tools and techniques to ensure your appliances are repaired quickly and correctly the first time. We prioritize customer satisfaction, offering transparent pricing, honest advice, and a friendly service you can trust. When you choose us, you’re choosing a team that values your time, home, and peace of mind. Let us help you keep your household running smoothly.</p>
            </div>
        </div> 
        <div className='flex flex-col items-center md:items-start my-10 text-gray-600'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-14 place-items-center text-center w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>24hr</p>
                        <p>Response Time</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>98%</p>
                        <p>Customer Satisfaction</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>170+</p>
                        <p>5 Star Reviews</p>
                    </div>
                </div>
        </div> 
        <div className='ourMission my-10'>
            <h2 className='text-xl sm:text-2xl text-start font-bold'>Our Mission</h2>
            <p className='text-gray-500 my-10 leading-relaxed'>Optima Appliances & Repair Services was founded with one goal: to provide high-quality, dependable appliance repair services for our community. With over 20 years of experience, we aim to maintain the highest standards in the industry. Our technicians are highly trained, and we ensure that each repair job is done right the first time, giving you peace of mind that your appliances will last longer and perform better. <br/><br/> Our skilled team of technicians are the backbone of Optima Appliances & Repair Services. With over 50 years of combined experience, they are equipped with the knowledge and tools to handle any appliance issue. Our team is not only highly trained but also friendly and customer-focused, ensuring that every job is done with professionalism and care.</p>
        </div>



        <div className='standOutCards flex flex-col md:flex-row justify-center items-center md:items-start md:gap-10 min-h-[500px]'>
            <div className='flex flex-col gap-10 w-full md:w-1/3 h-full py-10'>
                <div className='bg-gray-100 px-5 py-3 rounded flex-1'>
                    <h2 className='mb-2 text-blue-600 font-semibold'>Honesty & Transparency</h2>
                    <p className='text-sm text-gray-500'>We believe in clear, upfront pricing with no hidden fees, ensuring you’re always in the know.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded flex-1'>
                    <h2 className='mb-2 text-blue-600 font-semibold'>Reliability</h2>
                    <p className='text-sm text-gray-500'>Count on us to arrive on time, fully prepared, and complete every job with precision, care, and attention to detail.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded flex-1'>
                    <h2 className='mb-2 text-blue-600 font-semibold'>Comprehensive Service</h2>
                    <p className='text-sm text-gray-500'>From repairs to installations, we offer a full range of services to meet all your appliance needs.</p>
                </div>

            </div>
            <div className='w-full md:w-1/3 h-full flex justify-center items-center py-10'>
                <img className='w-full h-full object-cover rounded' src={assets.tradesman}/>
            </div>
            <div className='flex flex-col gap-10 w-full md:w-1/3 h-full py-10'>
                <div className='bg-gray-100 px-5 py-3 rounded flex-1'>
                    <h2 className='mb-2 text-blue-600 font-semibold'>Customer First</h2>
                    <p className='text-sm text-gray-500'>Your satisfaction is our priority—we go the extra mile to ensure your experience is seamless.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded flex-1'>
                    <h2 className='mb-2 text-blue-600 font-semibold'>Expert Technicians</h2>
                    <p className='text-sm text-gray-500'>Our certified technicians are skilled, experienced, and equipped to handle any appliance issue.</p>
                </div>
                <div className='bg-gray-100 px-5 py-3 rounded flex-1'>
                    <h2 className='mb-2 text-blue-600 font-semibold'>Satisfaction Guarantee</h2>
                    <p className='text-sm text-gray-500'>We stand by our work with a satisfaction guarantee—if you’re not happy, we’ll make it right.</p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About
