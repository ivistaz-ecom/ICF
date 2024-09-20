import Image from "next/image"
import React from "react"

const Header = () => {
  return (
    <div className="bg-[url('/banner.png')] h-screen bg-cover">
      <div className="flex flex-col items-center p-4 md:p-8 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Image
          src="/logo.png"
          width={140}
          height={120}
          alt="logo"
          className="md:w-[174px] md:h-[156px]"
        />

        {/* Contact us button */}
        <div className="flex justify-end w-full -mt-16 md:-mt-28">
          <button className="px-4 py-2 md:px-5 md:py-2 border border-icf-black rounded-3xl transition duration-300 ease-in-out hover:bg-icf-black hover:text-white">
            Contact Us
          </button>
        </div>

        {/* Main heading */}
        <div className="mt-20 md:mt-40 flex flex-col items-center gap-6 md:gap-10">
          <h1 className="text-3xl md:text-5xl font-semibold text-center text-icf-black">
            Driving Impact with <br /> Innovation and Purpose
          </h1>
          <button className="px-4 py-2 md:px-5 md:py-2 border border-icf-black rounded-3xl transition duration-300 ease-in-out hover:bg-icf-black hover:text-white">
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
