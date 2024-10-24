import ComplianceAndStatutory from "@/components/ComplianceAndStatutory/ComplianceAndStatutory"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Leadership from "@/components/Leadership/Leadership"
import OurApproach from "@/components/OurApproach/OurApproach"
import OurDomains from "@/components/OurDomains/OurDomains"
import OurMission from "@/components/OurMission/OurMission"
import OurOfferings from "@/components/OurOfferings/OurOfferings"
import OurValues from "@/components/OurValues/OurValues"
import OurVision from "@/components/OurVision/OurVision"
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo"
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre"
import WhyChoose from "@/components/WhyChoose/WhyChoose"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />

      {/* <WhoWeAre /> */}

      <OurVision />
      {/* <OurMission /> */}
      <OurValues />
      <OurApproach />
      <WhatWeDo />
      <OurDomains />
      {/* <OurOfferings /> */}
      {/* <WhyChoose /> */}
      <Leadership />
      <ComplianceAndStatutory />
      <Footer />
    </>
  )
}
