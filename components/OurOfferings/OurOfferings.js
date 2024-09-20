import { OurOfferingsData, ourMissionData } from "@/utils/data"
import Image from "next/image"

const OurOfferings = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3 mt-20">
      <h2 className="text-icf-black text-3xl font-semibold">Our Offerings</h2>
      <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
      <ul className="shadow-xl flex flex-col md:flex-row justify-between w-full md:w-10/12 border border-icf-gray rounded-2xl p-5 mt-2 gap-4 md:gap-0">
        {OurOfferingsData.map((item, index) => {
          return (
            <li key={index} className="w-full md:w-auto">
              <div className="flex gap-4 items-center">
                <Image
                  src={item.iconUrl}
                  width={50} // Reduced size for responsiveness
                  height={50} // Reduced size for responsiveness
                  alt={item.title}
                />
                <p className="text-md text-icf-black ">{item.title}</p>
                {index !== OurOfferingsData.length - 1 && (
                  <div className="hidden md:block border-r border-icf-gray h-14 ml-5" />
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default OurOfferings
