import { OurOfferingsData, ourMissionData } from "@/utils/data"
import Image from "next/image"

const OurOfferings = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-28">
      {/* <div className="flex flex-wrap md:flex-nowrap items-stretch">
        
        <div className="flex items-center bg-[#31AA2D] text-white text-xl md:text-2xl font-semibold px-6 py-4">
          Our Offerings
        </div>
        <div className="triangle-right relative top-10"></div>

        
        <ul className="flex w-full bg-[#E1EFE1] items-center justify-between p-6 -ml-5">
          {OurOfferingsData.map((item, index) => (
            <li
              key={index}
              className={`flex-1 text-center py-4 px-6 ${
                index !== OurOfferingsData.length - 1
                  ? "border-r border-[#92BBD6]"
                  : ""
              }`}
            >
              <p className="text-icf-black text-base md:text-lg">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div> */}

      <div>
        <Image
          src="/ourOfferings.png"
          width={1136}
          height={120}
          className="w-full"
          alt="Our Offerings"
        />
      </div>
    </div>
  )
}

export default OurOfferings
