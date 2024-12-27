"use client"

import React from "react"
import Slider from "react-slick"
import { ourValuesData } from "@/utils/data"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const OurValues = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: (i) => (
      <div className="w-4 h-4 rounded-full border border-gray-300 flex justify-center items-center mt-5">
        <div className="w-3 h-3 rounded-full bg-[#0172BB] opacity-40" />
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
    <div className="min-h-screen px-5 bg-[url('/banner02.png')] bg-contain bg-no-repeat mt-24">
      <div className="h-full gap-10 md:gap-16 max-w-screen-xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-icf-black text-2xl md:text-3xl font-semibold">
            Our Values
          </h2>
          <Image
            src="/arrow.svg"
            width={50}
            height={10}
            alt="arrow"
            className="mx-auto md:mx-0 mt-2"
          />
        </div>
        <Slider {...settings}>
          {ourValuesData.map((item, index) => (
            <div key={index}>
              <li className="flex flex-col items-center md:flex-row gap-10">
                <Image
                  src={item.imageUrl}
                  width={300}
                  height={300}
                  alt="our values"
                  className="w-full md:w-[356px] h-auto md:h-[356px]"
                />
                <div className="flex flex-col gap-5 px-5 md:px-0">
                  <h2 className="text-[#0172BB] text-xl md:text-[28px] font-semibold">
                    {item.title}
                  </h2>
                  <h2 className="text-[#171717] text-lg md:text-2xl">
                    {item.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl text-[#171717]">
                    {item.desc01}
                  </p>
                  <p className="text-lg md:text-xl text-[#171717]">
                    {item.desc02}
                  </p>
                  <p className="text-lg md:text-xl text-[#171717]">
                    {item.desc03}
                  </p>
                </div>
              </li>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default OurValues
