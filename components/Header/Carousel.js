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
  }

  return (
    <div className="relative w-full max-w-screen-lg mx-auto">
      <Slider {...settings}>
        <div>
          <Image
            src="/banner/banner01.png"
            width={800}
            height={400}
            alt="banner 01"
            className="w-full h-auto"
          />
        </div>
        <div>
          <Image
            src="/banner/banner02.png"
            width={800}
            height={400}
            alt="banner 02"
            className="w-full h-auto"
          />
        </div>
      </Slider>
    </div>
  )
}

export default Carousel
