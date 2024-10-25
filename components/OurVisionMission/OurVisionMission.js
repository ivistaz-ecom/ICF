import Image from "next/image"
import React from "react"

const OurVisionMission = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-10 mt-24">
      {/* Our Vision Section */}
      <div className="flex flex-col items-center gap-3 w-80">
        <h2 className="text-icf-black text-3xl font-semibold text-center">
          Our Vision
        </h2>
        <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
        <p className="text-center">
          Nurturing the Health and Wealth of People and the Planet
        </p>
      </div>

      {/* Vertical Line */}
      <div className="w-px h-32 bg-gray-300 hidden md:block"></div>

      {/* Our Mission Section */}
      <div className="flex flex-col items-center gap-3 w-80">
        <h2 className="text-icf-black text-3xl font-semibold text-center">
          Our Mission
        </h2>
        <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
        <p className="text-center">
          100 million people who earn less than INR 20,000 per month unlock the
          power to transform their lives
        </p>
      </div>
    </div>
  )
}

export default OurVisionMission
