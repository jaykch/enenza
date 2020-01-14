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
      <SEO title="Support"/>
      <Banner/>
      <Faqs/>
      <Contact/>
    </Layout>
  )
}

export default Support
