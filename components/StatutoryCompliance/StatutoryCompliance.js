import { statutoryComplianceData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const StatutoryCompliance = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col items-center gap-3 mb-10">
        <h2 className="text-icf-black text-2xl sm:text-3xl font-semibold text-center">
          Statutory & Compliance
        </h2>
        <Image src="/arrow.svg" width={60} height={10} alt="arrow" />
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto max-w-screen-xl mx-auto px-4">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-[#E53990] text-white">
            <tr>
              <th className="border border-[#DE9EBE] px-4 py-2 text-left text-sm sm:text-base">
                SI
              </th>
              <th className="border border-[#DE9EBE] px-4 py-2 text-left text-sm sm:text-base">
                Statutory Authority
              </th>
              <th className="border border-[#DE9EBE] px-4 py-2 text-left text-sm sm:text-base">
                Act and Section
              </th>
              <th className="border border-[#DE9EBE] px-4 py-2 text-left text-sm sm:text-base">
                Registration Details
              </th>
              <th className="border border-[#DE9EBE] px-4 py-2 text-left text-sm sm:text-base">
                Date of Registration and Compliance
              </th>
            </tr>
          </thead>
          <tbody>
            {statutoryComplianceData.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 bg-[#FFE2F0] text-sm sm:text-base"
              >
                <td className="border border-[#DE9EBE] px-4 py-2">{row.si}</td>
                <td className="border border-[#DE9EBE] px-4 py-2">
                  {row.authority}
                </td>
                <td className="border border-[#DE9EBE] px-4 py-2">
                  {row.actSection}
                </td>
                <td className="border border-[#DE9EBE] px-4 py-2">
                  {row.registrationDetails}
                </td>
                <td className="border border-[#DE9EBE] px-4 py-2">
                  {row.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StatutoryCompliance
