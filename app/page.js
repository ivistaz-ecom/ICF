import ComplianceAndStatutory from "@/components/ComplianceAndStatutory/ComplianceAndStatutory"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Leadership from "@/components/Leadership/Leadership"
import OurApproach from "@/components/OurApproach/OurApproach"
import OurDomains from "@/components/OurDomains/OurDomains"
import OurValues from "@/components/OurValues/OurValues"
import OurVisionMission from "@/components/OurVisionMission/OurVisionMission"
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo"

export default function Home() {
  return (
    <>
      <Header />

      {/* <WhoWeAre /> */}

      <OurVisionMission />
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
