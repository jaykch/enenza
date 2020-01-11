import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import "../components/business/business.scss"
import Banner from "../components/business/banner"
import BusinessPlus from "../components/business/businessPlus"
import Features from "../components/business/features"
import BusinessForm from "../components/business/businessForm"

const Business = () => {
  return (
    <Layout>
      <SEO title="Business"/>
      <Banner/>
      <BusinessPlus/>
      <Features/>
      <BusinessForm/>
    </Layout>
  )
}

export default Business
