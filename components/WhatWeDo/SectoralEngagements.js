import { initiativesProjectsData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const SectoralEngagements = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-3 py-6 md:py-8">
      {/* Image Section */}
      <Image
        src="/whatWeDo/image04.png"
        className="w-full md:w-auto max-w-[320px] h-auto"
        width={320}
        height={320}
        alt="Initiatives Projects"
      />

      {/* Content Section */}
      <div className="flex flex-col gap-4 w-full md:max-w-[750px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#0172BB] font-semibold text-center md:text-left">
          Sectoral Engagements
        </h2>
        <p className="text-base sm:text-lg md:text-2xl text-[#171717] text-center md:text-left">
          Our sectoral engagements involve deep partnerships with industries,
          policymakers, and grassroots organisations to influence systemic
          change and create long-term, sustainable social impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Logo */}
          <Image
            src="/whatWeDo/sectoralEngagement/logo01.png"
            className="w-20 sm:w-44"
            width={176}
            height={100}
            alt="Catalyst 2030"
          />

          {/* Title */}
          <p className="text-sm sm:text-base md:text-xl text-center sm:text-left">
            Active membership in{" "}
            <span className="text-blue-500 underline underline-offset-4">
              Catalyst 2030
            </span>
            , a global movement for achieving the SDGs by 2030; contributing to
            working groups, part of governance mechanisms, and supporting
            collaborations on health, climate
          </p>
        </div>
      </div>
    </div>
  )
}

export default SectoralEngagements
