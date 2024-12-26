import { initiativesProjectsData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const InitiativesProjects = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-3 border-b border-dashed py-6 md:py-8">
      {/* Image Section */}
      <Image
        src="/whatWeDo/image01.png"
        className="w-full md:w-auto max-w-[320px] h-auto"
        width={320}
        height={320}
        alt="Initiatives Projects"
      />

      {/* Content Section */}
      <div className="flex flex-col gap-4 w-full md:max-w-[750px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#0172BB] font-semibold text-center md:text-left">
          Initiatives and Projects
        </h2>
        <p className="text-base sm:text-lg md:text-2xl text-[#171717] text-center md:text-left">
          We implement high-impact programs that are scalable and replicable.
          Examples include:
        </p>

        {/* List Section */}
        <ul className="mt-4 md:mt-5 space-y-4">
          {initiativesProjectsData.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
            >
              {/* Logo */}
              <Image
                src={item.logoUrl}
                className="w-20 sm:w-24 h-auto"
                width={100}
                height={100}
                alt={item.title}
              />

              {/* Title */}
              <p
                className="text-sm sm:text-base md:text-xl text-center sm:text-left"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default InitiativesProjects
