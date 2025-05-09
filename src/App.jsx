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
import FAQ from './components/FAQ'

const App = () => {
  return (
      <div className='w-full overflow-hidden'>
        <Routes>
          <Route path='/' element={
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
          <Route path='/Services' element={
            <>
              <ToastContainer/>
              <ServicesPageHeader/>
              <ServicesPageServices/>
              <Projects/>
              <Contact/>
              <Footer/> 
            </>
          }/>
          <Route path='/FAQ' element={
            <>
              <ToastContainer/>
              <FAQ/>
              <Footer/> 
            </>
          }/>


        </Routes>
      </div>
  )
}

export default App
