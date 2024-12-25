import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import {motion} from "framer-motion"
import { useNavigate, Link } from 'react-router-dom';


const Navbar = () => {


  const navigate = useNavigate();

  const navigateAndScroll = (id) => {
    navigate('/OptimaAppliances/');
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

    const [showMobileMenu,setshowMobileMenu] = useState(false)
    useEffect(() => {
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return ()=>{
            document.body.style.overflow = 'auto'
        };
    },[showMobileMenu])
    return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo2} className='w-[150px]'/>
        <ul className='hidden md:flex gap-7 text-white'>
            <Link to='/OptimaAppliances/' onClick= {()=> navigateAndScroll('Home')} className='cursor-pointer hover:text-gray-400'>Home</Link>
            <p onClick= {()=> navigateAndScroll('About')} className='cursor-pointer hover:text-gray-400'>About</p>
            <Link to='/OptimaAppliances/Services' className='cursor-pointer hover:text-gray-400'>Services</Link>
            <a onClick= {()=> navigateAndScroll('FAQ')} className='cursor-pointer hover:text-gray-400'>FAQs</a>
        </ul>
        <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='hidden md:block bg-white px-8 py-2 rounded-full' onClick={() => (window.location.href='tel:+447846719141')}>Call Us</motion.button>
        <img onClick={() => setshowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer'/>
      </div>
      {/*-----------mobile menu-----------*/}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={() => setshowMobileMenu(false)} src={assets.cross_icon} className='w-6'/>
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium'>
            <Link to='/OptimaAppliances/' onClick={() => {
              setshowMobileMenu(false) 
              navigateAndScroll('Home')
            }}
            className='px-4 py-2 rounded-full inline-block'>Home</Link>
            <a onClick={() => {
              setshowMobileMenu(false)
              navigateAndScroll('About')
            }} className='px-4 py-2 rounded-full inline-block'>About</a>
            <Link to='/OptimaAppliances/Services' onClick={() => {
              setshowMobileMenu(false)
            }} className='px-4 py-2 rounded-full inline-block'>Services</Link>
            <a onClick={() => {
              setshowMobileMenu(false)
              navigateAndScroll('FAQ')
            }} className='px-4 py-2 rounded-full inline-block'>FAQs</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
