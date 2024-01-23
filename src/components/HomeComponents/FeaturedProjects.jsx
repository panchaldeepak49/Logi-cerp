import React,{ useState,useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '/Images/pim1.jpg'
import Img2 from '/Images/pim2.jpg'
import Img3 from '/Images/pim3.jpg'
import { IoChevronForward } from "react-icons/io5"
import { IoChevronBack } from "react-icons/io5"


const FeaturedProjects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       if (!isPaused) {
    //         // Move to the next slide
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    //       }
    //     }, 4000);
    
    //     return () => {
    //       clearInterval(interval);
    //     };
    //   }, [currentIndex, isPaused]);

    const NextArrow = (props) => {
      const { onClick } = props;
      return (
          <div className="absolute top-[50%] right-10 z-50 bg-red-400 p-2 rounded-md" onClick={onClick}>
              {/* Add your forward arrow icon or any content here */}
              <IoChevronForward />
          </div>
      );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="absolute top-[50%] z-50 left-10 bg-green-400 p-2 rounded-md" onClick={onClick}>
            {/* Add your backward arrow icon or any content here */}
            <IoChevronBack />
        </div>
    );
};

    const settings = {
        autoplay: true, // Set to true if you want automatic sliding
        autoplaySpeed: 3500, // Interval in milliseconds  4000(prev)
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        fade: false,
        beforeChange: (current, next) => setCurrentIndex(next),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

      const handleMouseEnter = () => {
        setIsPaused(true);
      };
    
      const handleMouseLeave = () => {
        setIsPaused(false);
      };

      

  return (
    <>
    <div>
       {/* <h1 className='text-[45px] font-bold text-center'>Featured Projects</h1>  */}

       <div className=''
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}>

       <Slider {...settings} initialSlide={currentIndex} >

        <div className='bg-red-400 '>
            <img className='h-96 ml-96' src={Img1} alt='missing'/>
        </div>
        <div className='bg-green-400'>
           <img className='h-96 ml-96' src={Img2} alt='missing'/>
        </div>
        <div className='bg-blue-400'>
            <img className='h-96 ml-96' src={Img3} alt='missing'/>
        </div>
       </Slider>
       </div>

    </div>
    </>
  )
}

export default FeaturedProjects