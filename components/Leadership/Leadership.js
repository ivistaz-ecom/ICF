import { FaArrowRight } from "react-icons/fa6"
import { leadershipData } from "@/utils/data"
import Image from "next/image"

const Leadership = () => {
  return (
    <div className="bg-icf-blue py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3">
        <h2 className="text-white text-3xl font-semibold text-center">
          Leadership
        </h2>
        <Image src="/arrow.png" width={60} height={10} alt="arrow" />
        <div className="flex justify-center w-full px-4 md:px-0">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
            {leadershipData.map((item, index) => {
              return (
                <li key={index}>
                  <div className="flex flex-col gap-3 items-center md:items-start w-full max-w-xs">
                    <div className="bg-[#2E93D5] w-full h-64 flex items-center justify-center p-10">
                      <Image
                        src={item.dummyImage}
                        width={176}
                        height={185}
                        alt={item.name}
                        className="max-w-full"
                      />
                    </div>
                    <h3 className="text-2xl text-white font-semibold text-center md:text-left">
                      {item.name}
                    </h3>
                    <p className="text-white text-lg text-center md:text-left">
                      {item.title}
                    </p>
                  </div>
                  <button className="text-white px-4 py-1 mt-5 rounded-3xl border-2 border-[#2E93D5] flex items-center justify-center gap-1 w-full md:w-auto">
                    Know more
                    <span className="text-white">{<FaArrowRight />}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Leadership
