import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import ServicesPageHeader from './components/ServicesPage/ServicesPageHeader'
import ServicesPageServices from './components/ServicesPage/ServicesPageServices'

const App = () => {
  return (
      <div className='w-full overflow-hidden'>
        <Routes>
          <Route path='/OptimaAppliances' element={
            <>
              <ToastContainer/>
              <Header/>
              <About/>
              <Projects/>
              <Testimonials/>
              <Contact/>
              <Footer/> 
            </>
          }/>
          <Route path='/OptimaAppliances/Services' element={
            <>
              <ToastContainer/>
              <ServicesPageHeader/>
              <ServicesPageServices/>
              <Projects/>
              <Contact/>
              <Footer/> 
            </>
          }/>


        </Routes>
      </div>
  )
}

export default App
