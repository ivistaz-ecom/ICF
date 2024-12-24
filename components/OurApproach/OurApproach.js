import { OurApproachData } from "@/utils/data"
import Image from "next/image"

const OurApproach = () => {
  return (
    <div className="mt-24">
      <div className="bg-[#232A35] max-w-screen-xl mx-auto p-10 rounded-3xl">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3">
          <h2 className="text-white text-3xl font-semibold">Our Approach</h2>
          <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
          <div className="flex justify-center px-4 mt-10">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
              {OurApproachData.map((item, index) => {
                return (
                  <li key={index} className="flex">
                    <div className="rounded-2xl w-96 flex flex-col items-center">
                      <div className="overflow-hidden">
                        <Image
                          src={item.logoUrl}
                          width={78}
                          height={78}
                          alt={item.title}
                          className=""
                        />
                      </div>
                      <div className="border-b border-gray-300 w-full mt-7" />
                      <div className="pt-5 flex flex-col gap-5 flex-grow text-center">
                        <h3 className="text-lg text-white">{item.title}</h3>
                        {/* <p className="text-[#D8D8D8] text-lg">{item.desc}</p> */}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurApproach
