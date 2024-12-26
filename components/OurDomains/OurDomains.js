"use client"

import Slider from "react-slick"
import Image from "next/image"
import { ourDomainsData } from "@/utils/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const OurDomains = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    customPaging: (i) => (
      <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex justify-center items-center mt-5">
        <div className="w-3 h-3 rounded-full bg-black opacity-0" />
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
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="px-5 py-14 mt-10 md:mt-24 bg-[url('/ourDomains/banner.png')] bg-cover">
      <div className="flex flex-col items-center h-full gap-10 md:gap-14 max-w-screen-xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-3 md:gap-3">
          <h2 className="text-icf-black text-3xl font-semibold text-center md:text-left">
            Our Domains
          </h2>
          <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
          <p className="text-icf-black text-xl mt-3 text-center">
            Our work is grounded in four core domains critical to sustainable
            development:
          </p>
        </div>

        {/* Slider Section */}
        <div className="mt-7 w-full">
          <Slider {...settings}>
            {ourDomainsData.map((item, index) => (
              <div key={index} className="px-2">
                <div className="rounded flex flex-col w-full md:w-[368px] bg-white overflow-hidden mx-auto pt-5">
                  {/* Image Section */}
                  <div className="flex justify-center items-center w-full h-60">
                    <Image
                      src={item.imageUrl}
                      width={240}
                      height={240}
                      className="object-contain"
                      alt={`image ${index + 1}`}
                    />
                  </div>
                  {/* Content Section */}
                  <div className="p-5 flex flex-col gap-4 flex-grow min-h-[275px]">
                    <h3 className="text-icf-black text-2xl text-center font-semibold">
                      {item.title}
                    </h3>
                    <ul className="text-icf-black text-lg list-disc ps-5 flex flex-col gap-2">
                      <li>{item.desc1}</li>
                      <li>{item.desc2}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default OurDomains
