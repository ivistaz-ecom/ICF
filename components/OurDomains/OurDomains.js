import { ourDomainsData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const OurDomains = () => {
  return (
    <div className="px-5 py-14 mt-24 bg-[url('/ourDomains/banner.png')] bg-cover bg-center">
      <div className="flex flex-col items-center h-full gap-10 md:gap-14 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center gap-3 md:gap-3">
          <h2 className="text-icf-black text-3xl font-semibold text-center md:text-left">
            Our Domains
          </h2>
          <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
        </div>
        <div className="flex justify-center w-full px-4 md:px-0">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ourDomainsData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="w-[368px] bg-white rounded-xl px-5 py-8 flex flex-col gap-5 items-center"
                >
                  <Image
                    src={item.imageUrl}
                    width={240}
                    height={240}
                    className="w-60 h-60"
                    alt={`image ${index + 1}`}
                  />
                  <h3 className="text-icf-black text-2xl text-center font-semibold">
                    {item.title}
                  </h3>
                  <ul className="text-icf-black text-xl list-disc ps-5">
                    <li>{item.desc1}</li>
                    <li>{item.desc2}</li>
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OurDomains
