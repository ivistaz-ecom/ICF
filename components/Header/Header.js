import Image from "next/image"
import React from "react"
import Carousel from "./Carousel"

const Header = () => {
  return (
    <div className="bg-[url('/mBanner01.png')] md:bg-[url('/banner.png')] h-screen bg-cover bg-no-repeat">
      <div className="flex flex-col gap-20 md:items-center p-5 max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <div className="bg-transparent w-10"></div>
          <Image
            src="/logo.png"
            width={140}
            height={120}
            alt="logo"
            className="md:w-[154px] md:h-[136px]"
          />

          {/* Contact us button */}
          <div className="">
            <button className="px-4 py-2 md:px-5 md:py-2 border border-icf-black rounded-3xl transition duration-300 ease-in-out hover:bg-icf-black hover:text-white">
              Contact Us
            </button>
          </div>
        </div>

        {/* Carousel */}

        <Carousel />

        {/* Description */}
        <div className="text-center px-20">
          <p className="text-icf-black text-xl">
            <span className="font-semibold">
              Impact Catalyst Foundation (ICF),
            </span>
            registered under Section 8 (1) of the Companies Act 2013 company
            with 12A, 80G, and CSR registration status, was founded on April 14,
            2021with the purpose of doing charitable activities in the main
            domain areas of Health, Livelihood, Workforce Wellbeing and Climate
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
