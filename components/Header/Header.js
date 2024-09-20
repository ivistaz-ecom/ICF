import Image from "next/image"
import React from "react"

const Header = () => {
  return (
    <div className="bg-[url('/banner.png')] h-screen bg-cover">
      <div className="flex flex-col items-center p-4 max-w-screen-xl mx-auto">
        <Image src="/logo.png" width={174} height={156} alt="logo" />

        {/* contact us button */}
        <div className="flex justify-end w-full -mt-28">
          <button className="px-5 py-2 border border-icf-black rounded-3xl transition duration-300 ease-in-out hover:bg-icf-black hover:text-white">
            Contact Us
          </button>
        </div>

        {/* main heading */}
        <div className="mt-40 flex flex-col items-center gap-10">
          <h1 className="text-icf-black text-5xl font-semibold text-center">
            Driving Impact with <br /> Innovation and Purpose
          </h1>
          <button className="px-5 py-2 border border-icf-black rounded-3xl transition duration-300 ease-in-out hover:bg-icf-black hover:text-white">
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
