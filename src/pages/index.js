import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Choices from "../components/home/choices"
import Features from "../components/home/features"
import App from "../components/home/app"
import Services from "../components/home/services"
import "../components/home/home.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"
         description="Book a ride with Enenza, a London based executive travel service providing airport transfers, corporate travel and on-demand rides. A premium service at affordable prices."/>
    <Banner/>
    <Features/>
    <Services/>
    <Choices/>
    <App/>
  </Layout>
)

export default IndexPage
