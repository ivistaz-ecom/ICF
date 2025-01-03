import { leadershipData, whyChooseData } from "@/utils/data"
import React from "react"
import GetInTouch from "../GetInTouch/GetInTouch"

const Footer = () => {
  return (
    <>
      <GetInTouch />

      <div className="bg-icf-black p-8 md:p-16 flex items-center justify-center">
        <div className="flex flex-col items-center w-11/12 md:w-10/12 gap-6 md:gap-10 max-w-screen-xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-semibold text-center">
            Ready to make an impact?
          </h2>
          <p className="text-lg md:text-2xl text-white text-center">
            Whether you’re a corporate, foundation, impact investor, or
            development financial institution, we’re here to help you achieve
            your goals.
          </p>
          <p className="text-[#FDB622] text-base md:text-xl italic text-center">
            Contact us today to learn more about how we can work together to
            drive positive change.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <button className="px-4 py-2 text-white border border-white rounded-3xl transition duration-300 ease-in-out hover:bg-white hover:text-icf-black">
              Contact Us
            </button>
            <button className="px-4 py-2 text-white border border-white rounded-3xl transition duration-300 ease-in-out hover:bg-white hover:text-icf-black">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
