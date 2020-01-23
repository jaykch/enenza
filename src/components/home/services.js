import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import airports from "../../images/home/airports.svg";
import hourly from "../../images/home/hourly.svg";
import point_to_point from "../../images/home/point_to_point.svg";
import { motion } from "framer-motion"
import { Link } from "gatsby"

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row className="text-center">
          <Col md={12} className="text-center"><h2>A service for everyone</h2></Col>
          <Col md={4}>
            <div className="service-icon ml-auto mr-auto">
              <Link to="/services#transfers">
              <motion.img whileHover={{ scale: 1.3 }} src={airports} alt="Airports"/>
              </Link>
            </div>
            <h3>Airport Transfers</h3>
          </Col>
          <Col md={4}>
            <div className="service-icon ml-auto mr-auto">
              <Link to="/services#point-to-point">
              <motion.img whileHover={{ scale: 1.3 }} src={point_to_point} alt="Airports"/>
              </Link>
            </div>

            <h3>Point to point</h3>
          </Col>
          <Col md={4}>
            <div className="service-icon ml-auto mr-auto">
              <Link to="/services#timed">
              <motion.img whileHover={{ scale: 1.3 }} src={hourly} alt="Airports"/>
              </Link>
            </div>
            <h3>Hourly and daily</h3>
          </Col>
          <p>We'll take it from here.</p>
        </Row>
      </Container>
    </section>
  )
}

export default Services
