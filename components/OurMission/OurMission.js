"use client"

import { useState } from "react"
import { ourMissionData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const OurMission = () => {
  const [currentIndex, setCurrentIndex] = useState(1)

  const handleButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 1)) // cycles through 1, 2, 3
  }

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3 mt-[1380px] md:mt-[400px]">
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
                  <h3 className="text-2xl md:text-4xl font-semibold text-icf-black mb-3">
                    {item.title}
                  </h3>
                </div>
                {currentIndex === index + 1 && (
                  <p className="text-base md:text-lg text-icf-black transition-opacity duration-500 ease-in-out opacity-100">
                    {item.desc}
                  </p>
                )}
                {index !== ourMissionData.length - 1 && (
                  <hr className="border-t-2 border-gray-300 mt-4" />
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center justify-center mt-6 md:mt-0">
          <button
            onClick={handleButtonClick}
            className="border border-icf-gray text-[#31AA2D] text-xl font-semibold px-5 py-2.5 md:-mr-7 rounded-full z-50 bg-white transition-all duration-300 ease-in-out"
          >
            {currentIndex}
          </button>
          <Image
            // Removed the hover scaling effect
            src={`/ourMission/img0${currentIndex}.png`}
            width={300} // Adjusted for mobile
            height={340} // Adjusted for mobile
            alt="our-mission"
            className="rounded-2xl transition-all duration-500 ease-in-out ml-4 md:ml-0"
          />
        </div>
      </div>
    </div>
  )
}

export default OurMission
