import { OurApproachData } from "@/utils/data"
import Image from "next/image"

const OurApproach = () => {
  return (
    <div className="mt-10 md:mt-24 p-3 md:p-0">
      <div className="bg-[#232A35] max-w-screen-xl mx-auto p-5 sm:p-10 rounded-3xl">
        <div className="flex flex-col items-center gap-3">
          {/* Section Title */}
          <h2 className="text-white text-2xl sm:text-3xl font-semibold">
            Our Approach
          </h2>
          <Image src="/arrow.svg" width={60} height={10} alt="arrow" />

          {/* Cards Grid */}
          <div className="flex justify-center px-2 sm:px-4 mt-8 sm:mt-10">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-20 w-full">
              {OurApproachData.map((item, index) => (
                <li key={index} className="flex justify-center">
                  <div className="rounded-2xl flex flex-col items-center w-full max-w-sm">
                    {/* Icon */}
                    <div className="overflow-hidden">
                      <Image
                        src={item.logoUrl}
                        width={78}
                        height={78}
                        alt={item.title}
                        className=""
                      />
                    </div>

                    {/* Divider */}
                    <div className="border-b border-gray-300 w-full mt-5 sm:mt-7" />

                    {/* Content */}
                    <div className="pt-5 flex flex-col gap-3 sm:gap-5 flex-grow text-center">
                      <h3 className="text-white text-base sm:text-lg font-medium">
                        {item.title}
                      </h3>
                      {/* <p className="text-[#D8D8D8] text-sm sm:text-lg">
                    {item.desc}
                  </p> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurApproach
