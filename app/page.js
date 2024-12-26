import DrivingLastingImpact from "@/components/DrivingLastingImpact/DrivingLastingImpact"
import Footer from "@/components/Footer/Footer"
import GetInTouch from "@/components/GetInTouch/GetInTouch"
import Header from "@/components/Header/Header"
import Leadership from "@/components/Leadership/Leadership"
import OurApproach from "@/components/OurApproach/OurApproach"
import OurDomains from "@/components/OurDomains/OurDomains"
import OurValues from "@/components/OurValues/OurValues"
import OurVisionMission from "@/components/OurVisionMission/OurVisionMission"
import StatutoryCompliance from "@/components/StatutoryCompliance/StatutoryCompliance"
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo"
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre"

export default function Home() {
  return (
    <>
      <Header />
      <WhoWeAre />
      <OurVisionMission />
      <OurApproach />
      <OurDomains />
      <WhatWeDo />
      <OurValues />
      <DrivingLastingImpact />
      <Leadership />
      <StatutoryCompliance />
      {/* <ComplianceAndStatutory /> */}
      <Footer />
    </>
  )
}
