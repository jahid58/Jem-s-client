import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import p1 from "../../images/artem-beliaikin-49mCO5ZRQDk-unsplash.jpg";
import p2 from "../../images/charles-deluvio-OtC8kRzlbqo-unsplash.jpg";
import slider1 from "../../images/carousel1.jpg";
import slider2 from "../../images/carousel2.jpg";
import slider3 from "../../images/carousel3.jpg";
import "./slider.css";

const Sliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <div className="mx-2 xs:grid-cols-1 md:grid grid-cols-3 gap-2 slider my-4 slider-box">
      <div className="md:col-span-2 slider-blog">
        <Slider {...settings}>
          <div className="sin-slider-blog cursor-pointer">
            <div className="slider-blog-img">
              <img src={slider1} alt="Slider Avatar" />
            </div>
            <div
              className="slider-blog-content hover:border-teal-300
 "
            >
              <h2>Welcome To JEM'S</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                deserunt!
              </p>
              <button className="bg-yellow-500 hover:bg-blue-700 text-gray-800 hover:text-blue-50 font-bold py-3 px-6 rounded-full">
                Shop Now
              </button>
            </div>
          </div>
          <div className="sin-slider-blog cursor-pointer">
            <div className="slider-blog-img">
              <img src={slider2} alt="Slider Avatar" />
            </div>
            <div className="slider-blog-content  hover:border-teal-300">
              <h2>Welcome To JEM'S</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                deserunt!
              </p>
              <button className="bg-yellow-500 hover:bg-blue-700 text-gray-800 hover:text-blue-50 font-bold py-3 px-6 rounded-full">
                Shop Now
              </button>
            </div>
          </div>
          <div className="sin-slider-blog cursor-pointer">
            <div className="slider-blog-img">
              <img src={slider3} alt="Slider Avatar" />
            </div>
            <div className="slider-blog-content hover:border-teal-300">
              <h2>Welcome To JEM'S</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                deserunt!
              </p>
              <button className="bg-yellow-500 hover:bg-blue-700 text-gray-800 hover:text-blue-50 font-bold py-3 px-6 rounded-full">
                Shop Now
              </button>
            </div>
          </div>
        </Slider>
      </div>
      <div className="promotion-post">
        <div className="pb-2">
          <a href=" ">
            <img src={p1} alt="Promotion banner" />
          </a>
        </div>
        <div>
          <a href=" ">
            <img src={p2} alt="Promotion banner" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
