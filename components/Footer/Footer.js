import { leadershipData, whyChooseData } from "@/utils/data"
import React from "react"

const Footer = () => {
  return (
    <>
      <div className="overflow-hidden p-5">
        <ul className="flex gap-5 animate-scroll">
          {/* Original Items */}
          <li className="flex items-center gap-3 whitespace-nowrap">
            <div className="border-b border-icf-black w-32" />
            <p className="text-3xl text-[#0172BB] font-semibold">
              Get in Touch
            </p>
          </li>
          <li className="flex items-center gap-3 whitespace-nowrap">
            <div className="border-b border-icf-black w-32" />
            <p className="text-3xl text-[#E53990] font-semibold">
              Get in Touch
            </p>
          </li>
          <li className="flex items-center gap-3 whitespace-nowrap">
            <div className="border-b border-icf-black w-32" />
            <p className="text-3xl text-[#31AA2D] font-semibold">
              Get in Touch
            </p>
          </li>
          <li className="flex items-center gap-3 whitespace-nowrap">
            <div className="border-b border-icf-black w-32" />
            <p className="text-3xl text-[#FDB622] font-semibold">
              Get in Touch
            </p>
          </li>

          {/* Duplicate the items for continuous scrolling */}
          <li className="flex items-center gap-3 whitespace-nowrap">
            <div className="border-b border-icf-black w-32" />
            <p className="text-3xl text-[#0172BB] font-semibold">
              Get in Touch
            </p>
          </li>
          <li className="flex items-center gap-3 whitespace-nowrap">
            <div className="border-b border-icf-black w-32" />
            <p className="text-3xl text-[#E53990] font-semibold">
              Get in Touch
            </p>
          </li>
          <li className="flex items-center gap-3 whitespace-nowrap">
            <div className="border-b border-icf-black w-32" />
            <p className="text-3xl text-[#31AA2D] font-semibold">
              Get in Touch
            </p>
          </li>
          <li className="flex items-center gap-3 whitespace-nowrap">
            <div className="border-b border-icf-black w-32" />
            <p className="text-3xl text-[#FDB622] font-semibold">
              Get in Touch
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-icf-black p-16 flex items-center justify-center">
        <div className="flex flex-col items-center w-10/12 gap-10 max-w-screen-xl mx-auto">
          <h2 className="text-white text-3xl font-semibold">
            Ready to make an impact?
          </h2>
          <p className="text-2xl text-white text-center">
            Whether you’re a corporate, foundation, impact investor, or
            development financial institution, we’re here to help you achieve
            your goals.
          </p>
          <p className="text-[#FDB622] text-xl italic">
            Contact us today to learn more about how we can work together to
            drive positive change.
          </p>
          <div className="flex items-center gap-5">
            <button className="px-5 py-2 text-white border border-white rounded-3xl transition duration-300 ease-in-out hover:bg-white hover:text-icf-black">
              Contact Us
            </button>
            <button className="px-5 py-2 text-white border border-white rounded-3xl transition duration-300 ease-in-out hover:bg-white hover:text-icf-black">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
