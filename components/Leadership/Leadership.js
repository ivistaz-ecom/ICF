"use client"

import { leadershipData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Leadership = () => {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (index) => {
    setActiveModal(index)
  }

  const closeModal = () => {
    setActiveModal(null)
    setTimeout(() => {
      setActiveModal(null)
    }, 0)
  }

  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [activeModal])

  return (
    <div className="bg-[#232A35] py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-4">
        <h2 className="text-white text-3xl font-semibold text-center">
          Leadership
        </h2>
        <Image src="/arrow.png" width={60} height={10} alt="arrow" />
        <div className="flex justify-center w-full px-4 md:px-0">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
            {leadershipData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="group"
                  onClick={() => openModal(index)}
                >
                  <div className="flex flex-col w-[272px] relative cursor-pointer">
                    <Image
                      src={item.imageUrl}
                      width={272}
                      height={272}
                      alt={item.name}
                    />
                    <div className="bg-white text-center py-3">
                      <p className="text-xl text-[#0F1114] font-[500]">
                        {item.name}
                      </p>
                    </div>

                    {/* Button card with hover effect */}
                    <div className="relative overflow-hidden">
                      <div className="flex justify-center items-center py-3 relative before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-icf-blue before:transition-all before:duration-500 group-hover:before:w-full">
                        <button className="text-white text-lg flex items-center gap-3 relative z-10 opacity-0 group-hover:opacity-100 before:transition-all before:duration-700">
                          Know more
                          <Image
                            src="/arrowIcon.png"
                            width={13}
                            height={16}
                            alt="arrow-icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`fixed inset-0 z-50 flex justify-center items-center px-3 transition-all duration-500 transform ${
                      activeModal === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow-xl border">
                      {/* Modal Header */}
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <div className="space-y-1">
                          <h3 className="text-xl font-semibold text-primary-text">
                            {item.name}
                          </h3>
                          {/* <p className="text-base">{item.post}</p> */}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="absolute top-3 right-3 text-white bg-icf-blue hover:bg-primary rounded-full text-sm w-8 h-8 flex justify-center items-center"
                      >
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                          aria-hidden="true"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>

                      {/* Modal Body */}
                      <div className="p-4 md:p-5 space-y-5 max-h-60 overflow-auto">
                        <p
                          className="leading-relaxed overflow-auto"
                          dangerouslySetInnerHTML={{ __html: item.desc1 }}
                        ></p>
                        <p
                          className="leading-relaxed overflow-auto"
                          dangerouslySetInnerHTML={{ __html: item.desc2 }}
                        ></p>
                        <p
                          className="leading-relaxed overflow-auto"
                          dangerouslySetInnerHTML={{ __html: item.desc3 }}
                        ></p>
                      </div>

                      {/* Modal footer */}
                      <div className="p-4 md:p-5 border-t">
                        <Link href={item.link} target="_blank">
                          <button>
                            <Image
                              src="/inIcon.png"
                              width={100}
                              height={33}
                              alt="linkedIn"
                            />
                          </button>
                        </Link>
                      </div>
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

export default Leadership
