import Image from "next/image"
import React from "react"
import HCarousel from "./HCarousel"

const Header = () => {
  return (
    <div className="bg-[url('/mBanner01.png')] md:bg-[url('/banner.png')] min-h-[50vh] bg-cover bg-no-repeat">
      <div className="flex flex-col gap-10 md:gap-20 md:items-center p-5 max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <div className="bg-transparent w-8 sm:w-10"></div>
          <Image
            src="/logo.png"
            width={120}
            height={100}
            alt="logo"
            className="w-[120px] h-[100px] md:w-[154px] md:h-[136px]"
          />

          {/* Contact us button */}
          <div className="">
            <button className="px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 border border-icf-black rounded-3xl transition duration-300 ease-in-out hover:bg-icf-black hover:text-white text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <HCarousel />
          <p className="text-white text-3xl font-semibold text-center absolute inset-0 top-1/2 flex justify-center items-center">
            Driving Impact with <br /> Innovation and Purpose
          </p>
        </div>

        {/* Description */}
        <div className="text-center px-5 sm:px-10 md:px-20">
          <p className="text-icf-black text-base sm:text-lg md:text-xl">
            <span className="font-semibold">
              Impact Catalyst Foundation (ICF),
            </span>{" "}
            registered under Section 8 (1) of the Companies Act 2013 company
            with 12A, 80G, and CSR registration status, was founded on April 14,
            2021 with the purpose of doing charitable activities in the main
            domain areas of Health, Livelihood, Workforce Wellbeing and Climate
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
