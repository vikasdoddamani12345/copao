import React, { useEffect } from 'react';
import '../../css/contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Contact() {

    useEffect(() => {
        Aos.init({duration:3000,delay: 100,});
    },[]);


  return (
    <div className='main-contact'>
        <div className='container1'>
            <div  className='contact-us'>
              <div className='div1-contact'> <p data-aos="zoom-in" ><b>Contact Us</b></p></div> 
              <div  className='div1-contact'><p className='para-contact1'>We would love to hear from you.
                    Feel free to reach out using the below details.</p></div>  
            </div>

            <div className='contact-us-pic'>


            </div>
        </div>

        <div className='container2'>
            <div className='contact2'>

            </div>

            <div   className='add-contact'>
                <p className='para-contact1'>MGR complex DCM main road , Jayanagar B Block</p>
                    <p className='para-contact1'>Hours: Mon-Fri 9:00AM - 5:00PM</p>
                    <p className='para-contact1'>  Phone: 123-456-7890</p>
                    <p  className='para-contact1'> Email: contact@mysite.com</p>
            </div>
        </div>

        <div  className='container3'>
            <div className='div3-contact'>
                <h1 className='div3-contact'>GET IN TOUCH</h1>
                <h3 className='div3-contact'>Fill out the form below and we will contact you as soon as possible!</h3>
            </div>
        </div>

            <div className='container4'>
                <div className='div4-contact'>
                    <div className='div5-contact'>
                        <h1 className='head2-contact'>Contact Us</h1>
                        <p className='para2-contact'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam.
                        </p>
                        <br/><br/><br/>

                        <h1 className='head2-contact'>Follow Us</h1>
                    </div>

                    <div className='div6-contact'>
                        <p className='para-contact1'>MGR complex DCM main road , Jayanagar B Block</p>
                        <p  className='para-contact1'> + 1 234 567 890</p>
                        <p className='para-contact1'> Timing: 09am -05pm</p>
                    </div>
                </div>
                
            </div>

            <div className='container5'>
                <div className='map-div'>

                </div>

                <div className='visit-div'>
                <h1 className='head2-contact'>Visit Us</h1>
                <p className='para-contact1'>Address:</p>
                <p  className='para-contact1'> MGR complex DCM main road , Jayanagar B Block</p>
                </div>
            </div>

            <div className='container6'>
                <div className='div11-contact'>
                    <p  className='para-contact1'>
                    Summarize your business so the visitor can learn
                     about your offerings from any page on your website.
                    </p>
                </div>

                <div  className='div11-contact'>
                    <p  className='para-contact1'>MGR complex</p>
                    <p  className='para-contact1'>  DCM main road , Jayanagar B Block</p>
                    <p  className='para-contact1'> Mon-Fri 9:00AM - 5:00PM</p>
                </div>

                <div  className='div11-contact'>
                    
                <p className='para-contact1'> Contact Us</p>

                    <p className='para-contact1'> contact@copao.org</p>

                    <p className='para-contact1'> 08192463357</p>
                    
                </div>
            </div>
    </div>
  )
}

export default Contact