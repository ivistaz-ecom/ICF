import { whoWeAreData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const WhoWeAre = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3">
      <h2 className="text-icf-black text-3xl font-semibold">Who We Are</h2>
      <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
      <div className="flex justify-center px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeAreData.map((item, index) => {
            const getBackgroundColor = (index) => {
              switch (index) {
                case 0:
                  return "bg-[#E53990]"
                case 1:
                  return "bg-[#31AA2D]"
                case 2:
                  return "bg-[#FDB622]"
                default:
                  return "bg-white"
              }
            }

            return (
              <li
                key={index}
                className="flex group transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`rounded-2xl w-[325px] flex flex-col transition-all duration-300 group-hover:bg-white ${getBackgroundColor(
                    index
                  )}`}
                  // style={{ backgroundColor: item.bgColor }}
                >
                  <div className="overflow-hidden rounded-t-2xl">
                    <Image
                      src={item.imageUrl}
                      width={300}
                      height={200}
                      alt={item.title}
                      className="rounded-t-2xl w-full h-[200px] transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col items-center gap-3 flex-grow">
                    <h3 className="text-white text-2xl font-semibold text-center transition-all duration-300 group-hover:text-black">
                      {item.title}
                    </h3>
                    <p className="text-white text-lg text-center transition-all duration-300 group-hover:text-black">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default WhoWeAre
