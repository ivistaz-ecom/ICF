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
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {ourDomainsData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="relative group w-[300px] h-[300px] cursor-pointer"
                >
                  <div className="">
                    <Image
                      src={item.imageUrl}
                      width={300}
                      height={300}
                      alt="what we do"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute group inset-0 flex flex-col p-5 items-center justify-center">
                    {/* <Image
                      src={item.iconUrl}
                      width={40}
                      height={40}
                      alt="icon"
                      className="w-10 h-10"
                    /> */}
                    <p className="text-white text-xl text-center mt-4">
                      {item.title}
                    </p>
                  </div>
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
