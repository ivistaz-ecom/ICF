import { initiativesProjectsData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const InnovationKnowledge = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-3 border-b border-dashed py-6 md:py-8">
      {/* Image Section */}
      <Image
        src="/whatWeDo/image03.png"
        className="w-full md:w-auto max-w-[320px] h-auto md:order-1"
        width={320}
        height={320}
        alt="Innovation Knowledge"
      />

      {/* Content Section */}
      <div className="flex flex-col gap-4 w-full md:max-w-[750px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#31AA2D] font-semibold text-center md:text-left">
          Innovation & Knowledge
        </h2>
        <p className="text-base sm:text-lg md:text-2xl text-[#171717] text-center md:text-left">
          We drive cutting-edge solutions and experimentation to address complex
          challenges. By fostering new models, tools, and technologies, we
          empower communities to innovate and adapt effectively.
        </p>

        <p className="text-base sm:text-lg md:text-2xl text-[#171717] text-center md:text-left">
          Our knowledge work focuses on research, capacity-building, and thought
          leadership. We provide insights and scalable frameworks to enable
          evidence-driven decision-making.
        </p>
      </div>
    </div>
  )
}

export default InnovationKnowledge
