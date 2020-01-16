import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/services/services.scss"
// import { Link } from "react-scroll"
// import { Col, Container, Row } from "react-bootstrap"

import Transfers from "../components/services/transfers"
import PointToPoint from "../components/services/pointToPoint"
import Timed from "../components/services/timed"
import Banner from "../components/services/banner"

const Services = () => {
  return (
    <Layout>
      <SEO title="Services"/>
      <Banner/>
      {/*<Container>*/}
      {/*  <Row>*/}
      {/*    <Col md={2}>*/}
      {/*      <ul className="services-menu">*/}
      {/*        <li><Link activeClass="active-service" to="transfers" spy={true} smooth={true} duration={500}>*/}
      {/*          Airport Transfers*/}
      {/*        </Link>*/}
      {/*        </li>*/}
      {/*        <li><Link activeClass="active-service" to="point-to-point" spy={true} smooth={true} duration={500}>*/}
      {/*          Point to Point*/}
      {/*        </Link>*/}
      {/*        </li>*/}
      {/*        <li><Link activeClass="active-service" to="timed" spy={true} smooth={true} duration={500}>*/}
      {/*          Hourly and daily*/}
      {/*        </Link>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*    </Col>*/}
      {/*  </Row>*/}
      {/*</Container>*/}
      <Transfers/>
      <PointToPoint/>
      <Timed/>
    </Layout>
  )
}

export default Services
