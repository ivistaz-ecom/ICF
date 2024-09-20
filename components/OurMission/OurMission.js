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
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3 mt-[1650px] md:mt-[400px]">
      <h2 className="text-icf-black text-3xl font-semibold">Our Mission</h2>
      <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
      <div className="flex justify-between mt-3">
        <ul className="flex flex-col gap-4 w-1/2">
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
                  <h3 className="text-4xl font-semibold text-icf-black mb-3">
                    {item.title}
                  </h3>
                </div>
                {/* Conditionally render the description only when active */}
                {currentIndex === index + 1 && (
                  <p className="text-lg text-icf-black transition-opacity duration-500 ease-in-out opacity-100">
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

        <div className="flex items-center">
          <button
            onClick={handleButtonClick}
            className="border border-icf-gray text-[#31AA2D] text-xl font-semibold px-5 py-2.5 rounded-full -mr-7 z-50 bg-white transition-all duration-300 ease-in-out"
          >
            {currentIndex}
          </button>
          <Image
            // Removed the hover scaling effect
            src={`/ourMission/img0${currentIndex}.png`}
            width={380}
            height={420}
            alt="our-mission"
            className="rounded-2xl transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  )
}

export default OurMission
