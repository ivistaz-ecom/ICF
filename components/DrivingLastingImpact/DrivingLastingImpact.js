import Image from "next/image"
import React from "react"

const DrivingLastingImpact = () => {
  return (
    <div className="bg-gradient-to-l from-[#FFE0F0] to-[#FFFAEF] p-5 sm:p-10 mt-10">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-5 sm:gap-7 px-4 sm:px-10">
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-icf-black text-2xl sm:text-3xl font-semibold text-center">
            Driving Lasting Impact
          </h2>
          <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
        </div>

        {/* Description */}
        <p className="text-icf-black text-lg sm:text-2xl text-center leading-relaxed">
          By balancing <strong>community priorities</strong> with{" "}
          <strong>environmental stewardship</strong> and fostering
          collaboration, we ensure our solutions are impactful, scalable, and
          sustainable.
        </p>

        {/* Highlighted Box */}
        <div className="bg-icf-black p-4 sm:p-5 rounded-md text-center">
          <p className="text-white text-lg sm:text-2xl text-center leading-relaxed">
            Join us as we catalyze change, transform lives, and build a future
            where every individual has the opportunity to thrive.
          </p>
        </div>

        {/* Final Paragraph */}
        <p className="text-icf-black text-base sm:text-xl text-center leading-relaxed">
          Impact Catalyst Foundation is part of the Catalyst Group - a social
          impact platform. Catalyst Group comprises 9 entities (including
          non-profits and social enterprises) across 3 strategic
          categories—Consulting, People-Focused Interventions, and Social
          Business.
        </p>
      </div>
    </div>
  )
}

export default DrivingLastingImpact
