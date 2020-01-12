import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/driver/driver.scss"
import Banner from "../components/driver/banner"
import Text from "../components/driver/text"
import DriverForm from "../components/driver/driverForm"

const Driver = () => {
  return (
    <Layout>
      <SEO title="Become a driver"/>
      <Banner/>
      <Text/>
      <DriverForm/>
    </Layout>
  )
}

export default Driver
