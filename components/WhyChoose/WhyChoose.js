import { whyChooseData } from "@/utils/data"
import { FaCheckCircle } from "react-icons/fa"
import Image from "next/image"

const WhyChoose = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-3 mt-28">
      <h2 className="text-icf-black text-3xl font-semibold text-center px-3">
        Why Choose Impact Catalyst Foundation?
      </h2>
      <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
      <ul className="flex flex-col w-full items-center gap-8 mt-5">
        {whyChooseData.map((item, index) => {
          return (
            <li key={index} className="w-3/4">
              {/* Centered content */}
              <div className="flex gap-3 items-center">
                <span className="text-[#31AA2D]">{<FaCheckCircle />}</span>
                <p className="text-icf-black text-lg">{item.desc}</p>
              </div>
              {/* Horizontal line after each item except the last one */}
              {index !== whyChooseData.length - 1 && (
                <hr className="border-t-2 border-gray-300 w-full mt-6" />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default WhyChoose
