import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/support/banner"
import "../components/support/support.scss"
import Faqs from "../components/support/faqs"
import Contact from "../components/support/contact"

const Support = () => {
  return (
    <Layout>
      <SEO title="Support"
           description="Business or pleasure; ride with Enenza. Choose from our Point to point service, Airport transfers, or a driver by the hour.  Professional drivers, premium cars, expect nothing less."/>
      <Banner/>
      <Faqs/>
      <Contact/>
    </Layout>
  )
}

export default Support
