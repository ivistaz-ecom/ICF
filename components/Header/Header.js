import Image from "next/image"
import React from "react"
import WhoWeAre from "../WhoWeAre/WhoWeAre"

const Header = () => {
  return (
    <div className="bg-[url('/mBanner01.png')] md:bg-[url('/banner.png')] min-h-screen bg-contain bg-no-repeat">
      <div className="flex flex-col md:items-center p-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Image
          src="/logo.png"
          width={140}
          height={120}
          alt="logo"
          className="md:w-[154px] md:h-[136px]"
        />

        {/* Contact us button */}
        <div className="flex justify-end w-full -mt-16 md:-mt-28">
          <button className="px-4 py-2 md:px-5 md:py-2 border border-icf-black rounded-3xl transition duration-300 ease-in-out hover:bg-icf-black hover:text-white">
            Contact Us
          </button>
        </div>

        {/* Main heading */}
        <div className="mt-32 flex flex-col items-center gap-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-center text-icf-black">
            Driving Impact with <br /> Innovation and Purpose
          </h1>
          <button className="px-4 py-2 md:px-5 md:py-2 border border-icf-black rounded-3xl transition duration-300 ease-in-out hover:bg-icf-black hover:text-white">
            Learn more
          </button>
          <div className="mt-20">
            <WhoWeAre />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
