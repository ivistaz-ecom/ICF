import { ourDomainsData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const OurDomains = () => {
  return (
    <div className="px-5 mt-24">
      <div className="flex flex-col items-center h-full gap-10 md:gap-14 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center gap-3 md:gap-3">
          <h2 className="text-icf-black text-3xl font-semibold text-center md:text-left">
            Our Domains
          </h2>
          <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
        </div>
        <div className="flex justify-center w-full px-4 md:px-0">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
            {ourDomainsData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="hover:border px-10 py-12 rounded-full group cursor-pointer"
                  style={{ borderColor: item.borderColor }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative">
                      <Image
                        src={item.iconUrl}
                        width={130}
                        height={130}
                        alt={item.title}
                      />
                      <div className="absolute inset-0">
                        <Image
                          src={item.imageUrl}
                          width={130}
                          height={130}
                          alt={item.title}
                          className="hidden group-hover:block"
                        />
                      </div>
                    </div>
                    <p className="text-xl text-[#1A1C45] text-center">
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
