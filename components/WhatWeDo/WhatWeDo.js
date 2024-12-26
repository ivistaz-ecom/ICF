import { whatWeDoData } from "@/utils/data"
import Image from "next/image"
import InitiativesProjects from "./InitiativesProjects"
import InnovationKnowledge from "./InnovationKnowledge"
import SectoralEngagements from "./SectoralEngagements"

const WhatWeDo = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3 mt-10 md:mt-24">
      {/* Heading */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <h2 className="text-icf-black text-3xl font-semibold">What We Do</h2>
        <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
        <p className="text-xl text-center mt-3">
          Our impact strategy is built on three integrated approaches <br />{" "}
          that drive systemic change:
        </p>
      </div>

      {/* cards */}
      <InitiativesProjects />
      <InnovationKnowledge />
      <SectoralEngagements />
    </div>
  )
}

export default WhatWeDo
