import { whatWeDoData } from "@/utils/data"
import Image from "next/image"

const WhatWeDo = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3 mt-28">
      <h2 className="text-icf-black text-3xl font-semibold">What We Do</h2>
      <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
      <div className="flex w-full">
        {/* <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {whatWeDoData.map((item, index) => {
            return (
              <li
                key={index}
                className="relative group w-[300px] h-[300px] cursor-pointer"
              >
                
                <div className="group-hover:opacity-0 transition-opacity duration-300">
                  <Image
                    src={item.imageUrl}
                    width={300}
                    height={300}
                    alt="what we do"
                    className="w-full h-full object-cover"
                  />
                </div>

                
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{ background: item.bgColor }}
                ></div>

                
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
        </ul> */}

        <ul className="w-full flex flex-col gap-10 mt-8">
          {whatWeDoData.map((item, index) => {
            return (
              <li key={index}>
                <div className="p-5 border-b border-dashed pb-10">
                  <div className="flex justify-between items-center">
                    <Image
                      src={item.imageUrl}
                      width={320}
                      height={320}
                      alt={item.title}
                      className={`w-80 h-80 ${
                        index % 2 === 1 ? "order-1" : ""
                      }`} // Main image
                    />
                    <div className="flex flex-col gap-3 w-[750px]">
                      <h2
                        className="text-3xl font-semibold"
                        style={{ color: item.fontColor }}
                      >
                        {item.title}
                      </h2>

                      <p className="text-2xl">{item.desc}</p>

                      {/* Render the first point with optional icon */}
                      {item.point01 && (
                        <div className="flex gap-3">
                          {item.iconUrl && (
                            <Image
                              src={item.iconUrl}
                              width={176} // Match the icon width
                              height={100} // Adjust height to maintain aspect ratio if needed
                              alt="image"
                              className="w-full h-full object-contain"
                            />
                          )}
                          <p className="text-lg w-90">{item.point01}</p>
                        </div>
                      )}

                      {/* Render the second point with optional icon */}
                      {item.point02 && (
                        <div className="flex gap-3">
                          {item.iconUrl && (
                            <Image
                              src={item.iconUrl}
                              width={176} // Match the icon width
                              height={100} // Adjust height to maintain aspect ratio if needed
                              alt="image"
                              className="w-full h-full object-contain"
                            />
                          )}
                          <p className="text-lg w-90">{item.point02}</p>
                        </div>
                      )}
                    </div>
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

export default WhatWeDo
