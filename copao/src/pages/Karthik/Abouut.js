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
    Aos.init({ duration: 1500, delay:100 });
  }, []);

  return (
    <>
      <div className='About-container'>
        <div className='About-title'>
          <h1 data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-duration="600">Who We Are</h1>
          <br />
          <h3 className='sub-title' data-aos="fade-left" data-aos-delay="100" data-aos-anchor=".example-selector"> We build and develop offline platform to digital e-commerce bussiness and we provide digital marketing           to Grow Up client bussiness platform </h3>
        </div>
        <div className='About-title-1'>
          <br />   <br />  <br />
          <hr />   <br />
          <p className='Heading-1' data-aos="fade-up-left">Why Choose Us</p>
          <h1 className='Heading-2' data-aos="fade-up-rigt">A Title To Turn The Visitor Into A Lead</h1>
          <p className='Heading-3' data-aos="fade-up-right">This is your chance to emphasize why the visitor should contact you right now.</p>
          <div className='contact-btn-grp'>
            <button data-aos="fade-right" type='submit' className='contact-btn'>Contact Us</button>
          </div>
          <div className='Btm-line'>
            <p className='Heading-4'>Trusted By</p>
            <br /><br /><br /><br />
            <IoIosArrowUp size={35} className='top-icon' onClick={gotobtn} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Abouut