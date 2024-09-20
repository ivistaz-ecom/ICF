import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Leadership from "@/components/Leadership/Leadership"
import OurApproach from "@/components/OurApproach/OurApproach"
import OurMission from "@/components/OurMission/OurMission"
import OurOfferings from "@/components/OurOfferings/OurOfferings"
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo"
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre"
import WhyChoose from "@/components/WhyChoose/WhyChoose"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <div className="absolute top-2/3 left-0 right-0">
          <WhoWeAre />
        </div>
      </div>

      <OurMission />
      <OurApproach />
      <WhatWeDo />
      <OurOfferings />
      <WhyChoose />
      <Leadership />
      <Footer />
    </>
  )
}
