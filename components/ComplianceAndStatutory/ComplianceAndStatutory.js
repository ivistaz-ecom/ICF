import Image from "next/image"
import React from "react"

const ComplianceAndStatutory = () => {
  return (
    <div className="px-5 my-20">
      <div className="h-full max-w-screen-xl mx-auto">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-icf-black text-2xl md:text-3xl font-semibold bg-white px-4">
            Compliance & Statutory
          </h2>
          <Image
            src="/arrow.svg"
            width={50}
            height={10}
            alt="arrow"
            className="mx-auto md:mx-0 mt-2"
          />
        </div>
        <div className="border-2 border-[#BABABA] rounded-2xl w-full py-20 h-96 -mt-8"></div>
      </div>
    </div>
  )
}

export default ComplianceAndStatutory
