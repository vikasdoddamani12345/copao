import React from 'react'
import '../../css/Aboutus.css'
import { IoIosArrowUp } from 'react-icons/io'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Abouut = () => {
  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className='About-container'>
        <div className='About-title'>
          <h1>Who We Are</h1>
        </div>
        <div className='About-title-1'>
          <p className='Heading-1'>Why Choose Us</p>
          <p className='Heading-2'>A Title To Turn The Visitor Into A Lead</p>
          <p className='Heading-3'>This is your chance to emphasize why the visitor should contact you right now.</p>
          <div className='contact-btn-grp'>
            <button data-aos="fade-right" type='submit' className='contact-btn'>Contact Us</button>
          </div>
          <div className='Btm-line'>
            <p className='Heading-4'>Trusted By</p>
            <IoIosArrowUp size={44} className='top-icon' onClick={gotobtn} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Abouut