"use client"

import { useState } from "react"
import { ourMissionData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const OurMission = () => {
  const [currentIndex, setCurrentIndex] = useState(1)

  const handleButtonClick = (index) => {
    setCurrentIndex(index + 1) // cycles through 1, 2, 3
  }

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3 mt-20">
      <h2 className="text-icf-black text-3xl font-semibold text-center md:text-left">
        Our Mission
      </h2>
      <Image src="/arrow.svg" width={60} height={10} alt="arrow" />

      <div className="flex flex-col md:flex-row justify-between mt-3 w-full px-4 md:px-0">
        <ul className="flex flex-col gap-4 md:w-1/2">
          {ourMissionData.map((item, index) => {
            return (
              <li
                key={index}
                className="transition-opacity duration-500 ease-in-out"
              >
                <div className="flex items-center gap-3">
                  {currentIndex === index + 1 && (
                    <div className="border-b-4 border-[#31AA2D] w-8 transition-all duration-300 ease-in-out" />
                  )}
                  <h3
                    className="text-2xl md:text-4xl font-semibold text-icf-black mb-3 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                    onClick={() => handleButtonClick(index)}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Paragraph transition on opacity */}
                <p
                  className={`text-base md:text-lg text-icf-black transition-opacity duration-500 ease-in-out ${
                    currentIndex === index + 1
                      ? "opacity-100"
                      : "opacity-0 h-0 overflow-hidden"
                  }`}
                >
                  {item.desc}
                </p>

                {index !== ourMissionData.length - 1 && (
                  <hr className="border-t-2 border-gray-300 mt-4" />
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex flex-col md:flex-row items-center justify-center mt-6 md:mt-0">
          {/* Button on top for mobile */}
          <button className="md:mb-0 border-2 border-icf-gray text-[#31AA2D] text-3xl md:text-4xl font-semibold px-5 py-2.5 -mb-7 md:-mr-7 rounded-full z-50 bg-white transition-all duration-300 ease-in-out hover:scale-105">
            {currentIndex}
          </button>

          {/* Full-width image for mobile */}
          <Image
            src={`/ourMission/img0${currentIndex}.png`}
            width={300}
            height={340}
            alt="our-mission"
            className="w-full md:w-auto rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}

export default OurMission
