import { OurApproachData } from "@/utils/data"
import Image from "next/image"

const OurApproach = () => {
  return (
    <div className="bg-[#232A35] py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3">
        <h2 className="text-white text-3xl font-semibold">Our Approach</h2>
        <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
        <div className="flex justify-center px-4 mt-5">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
            {OurApproachData.map((item, index) => {
              return (
                <li key={index} className="flex">
                  <div className="rounded-2xl w-80 flex flex-col">
                    <div className="overflow-hidden">
                      <Image
                        src={item.logoUrl}
                        width={78}
                        height={78}
                        alt={item.title}
                        className=""
                      />
                    </div>
                    <div className="pt-5 flex flex-col gap-5 flex-grow">
                      <h3 className="text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-[#D8D8D8] text-lg">{item.desc}</p>
                    </div>
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

export default OurApproach
