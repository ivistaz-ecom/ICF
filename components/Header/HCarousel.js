"use client"

import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const HCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    customPaging: (i) => (
      <div className="w-4 h-4 rounded-full border border-gray-300 flex justify-center items-center mt-3">
        <div className="w-3 h-3 rounded-full bg-[#E53990] opacity-40" />
      </div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-20px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {dots}
      </div>
    ),
  }

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <Slider {...settings}>
        <div>
          <img
            src="/banner1.png"
            alt="banner 1"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <img
            src="/banner2.png"
            alt="banner 2"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <img
            src="/banner3.png"
            alt="banner 3"
            className="w-full h-auto object-cover"
          />
        </div>
      </Slider>
    </div>
  )
}

export default HCarousel
