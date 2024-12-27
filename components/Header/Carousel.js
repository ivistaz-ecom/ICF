"use client"

import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = () => {
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
        <Image
          src="/banner1.png"
          width={800}
          height={400}
          alt="banner 01"
          className="w-full"
          priority
        />
        <Image
          src="/banner2.png"
          width={800}
          height={400}
          alt="banner 02"
          className="w-full"
          priority
        />
        <Image
          src="/banner3.png"
          width={800}
          height={400}
          alt="banner 03"
          className="w-full"
          priority
        />
      </Slider>
    </div>
  )
}

export default Carousel
