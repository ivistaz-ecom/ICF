import { statutoryComplianceData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const StatutoryCompliance = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col items-center gap-3 mb-10">
        <h2 className="text-icf-black text-3xl font-semibold">
          Statutory & Compliance
        </h2>
        <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
      </div>

      <div className="overflow-x-auto max-w-screen-xl mx-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-[#E53990] text-white">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">SI</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Statutory Authority
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Act and Section
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Registration Details
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Date of Registration and Compliance
              </th>
            </tr>
          </thead>
          <tbody>
            {statutoryComplianceData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100 bg-[#FFE2F0]">
                <td className="border border-gray-300 px-4 py-2">{row.si}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.authority}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.actSection}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.registrationDetails}
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StatutoryCompliance
