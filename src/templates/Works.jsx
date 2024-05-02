import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Ecommerce from "../data/Ecommerce.jpeg";
import MovieWatchlist from "../data/MovieWatchlist.jpeg";
import oldPortfolio from "../data/old-Portfolio.jpeg";
import { motion } from "framer-motion";
import { fadeIn } from "../data/Variants";

function Works() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              adaptiveHeight: true
            },
          },
        ],
      };
    
  return (
    <div>
           <div
          id="portfolio"
          className="w-[88%] max-w-[1340px] mx-auto  lg:pl-[300px] pt-[60px] pb-[60px] lg:py-[60px] bg-white"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="pl-[30px]"
          >
            <p className="text-lg font-thick pb-[10px]">-Projects</p>
            <p className="text-3xl font-bold pb-[40px]">
              Recent Completed works
            </p>
          </motion.div>

          <div className="Slider-container">
            <Slider {...settings} className="">
              <div className=" ">
                <span className="">REACT & TAILWIND</span>
                <img src={Ecommerce} alt="" />
              </div>

              <div className="w-[300px]">
                <span>REACT & CSS</span>
                <img src={MovieWatchlist} alt="" />
              </div>
              <div className="w-[300px] ">
                <span>REACT & TAILWIND</span>
                <img src={oldPortfolio} alt="" />
              </div>
            </Slider>
          </div>
        
        </div>
    </div>
  )
}

export default Works