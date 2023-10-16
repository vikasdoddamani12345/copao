import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../css/home.css';
import image1 from '../../images/img1.jpg';
import image2 from '../../images/img2.jpg';
import image3 from '../../images/img3.jpg';
import image4 from '../../images/img4.jpg';
import image5 from '../../images/img5.jpg';
import image6 from '../../images/img6.jpg';
import image7 from '../../images/img7.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Pic1 from '../../images/app-dev-1024x683.jpg'
import Pic2 from '../../images/ui-ux-1024x683.jpg'
import Pic3 from '../../images/8068473_63484-1-292x300.jpg'
import Pic4 from '../../images/1_uDJTLivemR18proTkBsMEQ.jpg'
import Pic5 from '../../images/digital-marketing-with-icons-business-people-300x234.jpg'
import Pic6 from '../../images/soci-2-1024x792.jpg'
import Pic7 from '../../images/html-system-website-concept-1024x683.jpg'
import { NavLink } from "react-router-dom";




function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }



function Home() {

useEffect(() => {
    Aos.init({duration:1500,delay: 100,});
},[]);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        PrevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
        
 

  return (
    <div className='main-div-home'>
        <div className='container-home'>
        
        <div className='module1-home'>
        
        <Slider {...settings}>
          <div className="card1">
            <div className="card11">
              <div> <h1>COPAO Find The Best Solution.</h1><br/>
               <h2>Fresh Thinking For Business On The Move.</h2>
                 </div>

                <img className="img1-home" src={image1} alt="" />
                <img className="img1-home" src={image2} alt="" />
                </div>
           </div> 
          


          <div className="card1">
            <div className="card11">
              <div> <h1>Inventive Insights For Unsurpassible Solutions.</h1><br/>
               <h2>Your Advertising solutions in The Digital era.</h2>
                 </div>
               
                <img className="img1-home" src={image3} alt="" />
                <img className="img1-home" src={image4} alt="" />

            </div>
          </div>


         
          <div className="card1">
            <div className="card11">
              <div> <h1>Ignite,Inovate,Implement.</h1><br/>
               <h2>Set the Pace and Dominate the space.</h2>
                 </div>
               
                <img className="img1-home" src={image5} alt="" />
                <img className="img1-home" src={image6} alt="" />

            </div>
          </div>
          
        </Slider>


      </div>


        <div className="module2-home">

            <div data-aos="fade-right" className="item1-home">
               <h2 className="txt-home"> Stage Your offline Business to E-Commerce Now.</h2>             
              
            </div>

            <div data-aos="fade-left" className="item2-home">
            <img className="img2-home" src={image7} alt=""/>
            </div>

          <div data-aos="fade-right" className="item3-home">
          <NavLink to={"/contact"}>  <button className="btn-home"> Contact</button></NavLink>
          </div>
        </div>

        <div data-aos="fade-up"  className="module3-home">
          <div data-aos="fade-up"  className="service-div1">
            <p className="para-div1"><b>OUR SERVICES</b></p>
          
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



        </div>

      
      <div data-aos="fade-up" className="module4-home">

          <div className="div1-home">

          </div>

          <div  className="div2-home">
              <h1 data-aos="fade-up" className="txt1-home"><b>ABOUT US</b></h1>
              <p data-aos="fade-up" className="para-home">
              Use this section to describe your company and the services you offer. 
              You could share your company’s story and details about why you are in business.
               The goal is to create a connection with the visitor and give them confidence to work with you.
              </p>
              <button data-aos="fade-up" type='submit'className='learn-btn-1'>Learn More</button>
          </div>

      </div>


      <div data-aos="fade-up" className="module5-home">
        <div className="txt3-home">
          <h1><b>WHY CHOOSE US</b></h1>
        </div>

        <div className="txt4-home">
          <div className="txt5-home">Innovation At The Core</div>
          <div className="txt5-home">Client Centric Approach</div>
          <div className="txt5-home">Tailored Solutions</div>
          <div className="txt5-home">Dedicated Support Fa Seamless Experience</div>

        </div>
      </div>

      <div className="module6-home">
          <div data-aos="fade-up" className="txt7-home">
            <h2><b>FIND US ON</b></h2>
          </div>

          <div className="icon-home">

          </div>
      </div>

      <div className="module7-home">
          <div className="txt9-home">
            <p className="para1-home">MGR complex</p>
            <p className="para1-home">DCM main road , Jayanagar B Block</p>
            <p >Mon-Fri 9:00AM - 5:00PM</p>
          </div>
      </div>




      </div>

        










    </div>
    
 )
}


export default Home;
