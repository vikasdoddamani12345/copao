import React from "react";
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

            <div className="item1-home">
               <h2> Stage Your offline Business to E-Commerce Now.</h2>             
              
            </div>

            <div className="item2-home">
            <img className="img2-home" src={image7} alt=""/>
            </div>

          <div className="item3-home">
            <button className="btn-home"> Contact</button>
          </div>
        </div>

        <div className="module3-home">
          <div className="service-div1">
            <p><b>OUR SERVICES</b></p>
          
          </div>
        </div>


      </div>

        










    </div>
  )
    }



export default Home;
