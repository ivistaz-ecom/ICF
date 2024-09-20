import { FaArrowRight } from "react-icons/fa6"
import { leadershipData } from "@/utils/data"
import Image from "next/image"

const Leadership = () => {
  return (
    <div className="bg-icf-blue mt-16 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3">
        <h2 className="text-white text-3xl font-semibold">Leadership</h2>
        <Image src="/arrow.png" width={60} height={10} alt="arrow" />
        <ul className="flex flex-wrap gap-6 mt-5">
          {leadershipData.map((item, index) => {
            return (
              <li key={index}>
                <div className="flex flex-col gap-3 w-64">
                  <div className="bg-[#2E93D5] w-64 h-64 flex items-center justify-center p-10">
                    <Image
                      src={item.dummyImage}
                      width={176}
                      height={185}
                      alt={item.name}
                    />
                  </div>
                  <h3 className="text-2xl text-white font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-white text-lg">{item.title}</p>
                </div>
                <button className="text-white px-4 py-1 rounded-3xl border-2 border-[#2E93D5] flex items-center gap-1 mt-5">
                  Know more
                  <span className="text-white">{<FaArrowRight />}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Leadership
