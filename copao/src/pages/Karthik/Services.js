import React, { useEffect } from 'react'
// import '../../css/service.css';
import '../../css/Services.css';
import Pic1 from '../../images/app-dev-1024x683.jpg'
import Pic2 from '../../images/ui-ux-1024x683.jpg'
import Pic3 from '../../images/8068473_63484-1-292x300.jpg'
import Pic4 from '../../images/1_uDJTLivemR18proTkBsMEQ.jpg'
import Pic5 from '../../images/digital-marketing-with-icons-business-people-300x234.jpg'
import Pic6 from '../../images/soci-2-1024x792.jpg'
import Pic7 from '../../images/html-system-website-concept-1024x683.jpg'
import Avatar from 'react-avatar'
import {IoIosArrowUp} from 'react-icons/io'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Services() {
    const gotobtn = () => {
        window.scrollTo({ top:0, left:0, behavior:'smooth'});
    };

    useEffect(() => {
        Aos.init({duration:1500,delay: 100,});
    },[]);

  return (
<>
<div className='service-container'>
   <div className='Service-1'>
    <h1>Our Services</h1>
    <p data-aos="fade-up" className='discription-1'>Range of strategies and tactics designed to help online businesses promote their products or services, reach a broader audience, and increase sales, Here's a we provide platform  overview of common digital marketing services for e-commerce.</p>
   </div>
   <div className='Service-2'>
    <div data-aos="fade-right" className='Item-1'>
        <img className='pic1' src={Pic1} alt='app-dev-1024x683.jpg'/>
        </div>
        <div className='text-grp'>
        <p data-aos="fade-left" className='text-1'>Android and IOS app <br/> development</p>
        <p data-aos="fade-up" className='text-2'>Get the first-rate android and IOS app development services. <br/>We help you transform your business idea into a reality.</p>
        <button data-aos="fade-up" type='submit'className='learn-btn-1'>Learn More</button>
        </div>
        <div className='text-grp'>
        <p data-aos="fade-right" className='text-1'>UI & UX Design</p>
        <p data-aos="fade-up" className='text-2'>We help you with the UI and UX designing services. UI and UX are actually two different professions.</p>
        <button data-aos="fade-up" type='submit'className='learn-btn-1'>Learn More</button>
        </div>
        <div data-aos="fade-left" className='Item-1'>
        <img className='pic3' src={Pic2} alt='ui-ux-1024x683.jpg'/>
        </div>
        <div data-aos="fade-right" className='Item-1'>
        <img className='pic2' src={Pic3} alt='8068473_63484-1-292x300.jpg'/>
        </div>
        <div className='text-grp'>
        <p data-aos="fade-left" className='text-1'>Graphical Design</p>
        <p data-aos="fade-up" className='text-2'>Get the incomparable graphical design by us. Our graphic designers help you to promote, advertise your products.</p>
        <button data-aos="fade-up" type='submit'className='learn-btn-1'>Learn More</button>
        </div>
        <div className='text-grp'>
        <p data-aos="fade-right" className='text-1'>WordPress Websites</p>
        <p data-aos="fade-up" className='text-2'>Here we have the WordPress developers who are experts in WordPress developing. WordPress is a free, open-source website creation platform.</p>
        <button data-aos="fade-up" type='submit'className='learn-btn-1'>Learn More</button>
        </div>
        <div data-aos="fade-left" className='Item-1'>
        <img className='pic3' src={Pic4} alt='1_uDJTLivemR18proTkBsMEQ.jpg'/>
        </div>
        <div data-aos="fade-right" className='Item-1'>
        <img className='pic1' src={Pic5} alt='digital-marketing-with-icons-business-people-300x234.jpg'/>
        </div>
        <div className='text-grp'>
        <p data-aos="fade-left" className='text-1'>Digital Marketing</p>
        <p data-aos="fade-up" className='text-2'>Stay connected with your customers, promote sales and activities. We are here to help promote your sales. </p>
        <button data-aos="fade-up" type='submit'className='learn-btn-1'>Learn More</button>
        </div>
        <div className='text-grp'>
        <p data-aos="fade-right" className='text-1'>Social Media Managing</p>
        <p data-aos="fade-up" className='text-2'>Looking for a social media manager? Relax…. We have an excellent team of social media managers. They help you to grow your business through social media. </p>
        <button data-aos="fade-up" type='submit'className='learn-btn-1'>Learn More</button>
        </div>
        <div data-aos="fade-left" className='Item-1'>
        <img className='pic3' src={Pic6} alt='soci-2-1024x792.jpg'/>
        </div>
        <div data-aos="fade-right" className='Item-1'>
        <img className='pic1' src={Pic7} alt='html-system-website-concept-1024x683.jpg'/>
        </div>
        <div className='text-grp'>
        <p data-aos="fade-left" className='text-1'>Web Application</p>
        <p data-aos="fade-up" className='text-2'>Get the best web application services here….  Our web developers are experts in designing, developing and maintaining the web applications.</p>
        <button data-aos="fade-up" type='submit'className='learn-btn-1'>Learn More</button>
        </div>
    </div>
    <div className='testinomial'>
        <div data-aos="zoom-in" className='testinom-head'>
        <h1>
             Client Testimonials
        </h1>
        </div>
        <div data-aos="flip-left" className='Review '>
        <p className='testonimal-1'>
        “A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”
        </p>
        <div className='client'>
        <Avatar name='vikas D' size="80" round={true}  color='brown'/>
        <h3>client Name</h3>
        </div>
        </div>
        <div data-aos="flip-left" className='Review '>
        <p className='testonimal-1'>
        “A testimonial from a client who benefited from your product or service. Testimonials can be a highly effective way of establishing credibility and increasing your company's reputation.”
        </p>
        <div className='client'>
        <Avatar name='Sid k' size="80" round={true}  color='brown'/>
        <h3>client Name</h3>
        </div>
        </div>
    </div>
    <div className='Item-2'>
        <h3>A Title to Turn the Visitor Into a Lead</h3>
        <button data-aos="fade-up" type='submit'className='Contact-btn-1'>Contact Us</button>
        <div className='Scroll-top'>
        <p className='Item-text'>This is your chance to emphasize why the visitor should contact you right now.</p>
        <IoIosArrowUp size={44} className='top-icon-2' onClick={gotobtn}/>
        </div>
    </div>
   </div>



</>
  )
}

export default Services