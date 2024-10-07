import { whatWeDoData } from "@/utils/data"
import Image from "next/image"

const WhatWeDo = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3 mt-28">
      <h2 className="text-icf-black text-3xl font-semibold">What We Do</h2>
      <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
      <div className="flex justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {whatWeDoData.map((item, index) => {
            return (
              <li
                key={index}
                className="relative group w-[300px] h-[300px] cursor-pointer"
              >
                {/* Image that will be hidden on hover */}
                <div className="group-hover:opacity-0 transition-opacity duration-300">
                  <Image
                    src={item.imageUrl}
                    width={300}
                    height={300}
                    alt="what we do"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Background color only visible on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{ background: item.bgColor }}
                ></div>

                {/* Content (icon and paragraph) that will be hidden on hover */}
                <div className="absolute group inset-0 flex flex-col p-5 items-center justify-center transition-opacity duration-300">
                  <Image
                    src={item.iconUrl}
                    width={40}
                    height={40}
                    alt="icon"
                    className="w-10 h-10"
                  />
                  <p className="text-white text-lg text-center mt-4 group-hover:mt-1 transition-all duration-300 ease-in-out">
                    {item.desc}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default WhatWeDo
