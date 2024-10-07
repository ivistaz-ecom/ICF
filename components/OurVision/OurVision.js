import React from "react"

const OurVision = () => {
  return (
    <div className="bg-[#232A35] py-5 flex justify-center items-center mt-20 px-5">
      <div className="flex flex-col md:flex-row gap-5 items-center text-center md:text-left">
        <h2 className="text-white text-2xl md:text-3xl font-semibold">
          Our Vision
        </h2>
        <p className="text-white text-lg md:text-xl">
          100 million people who earn less than INR 20,000 per month{" "}
          <br className="hidden md:block" />
          unlock the power to transform their lives
        </p>
      </div>
    </div>
  )
}

export default OurVision
