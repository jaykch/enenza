import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { MdAirplanemodeActive } from "react-icons/md";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row className="text-center">
          <Col md={12} className="text-center"><h2>A service for everyone</h2></Col>
          <Col md={4}>
            <div className="service-icon ml-auto mr-auto">
              <MdAirplanemodeActive/>
            </div>
            <h3>Airports</h3>
          </Col>
          <Col md={4}>
            <div className="service-icon ml-auto mr-auto">
              <MdAirplanemodeActive/>
            </div>
            <h3>Point to point</h3>
          </Col>
          <Col md={4}>
            <div className="service-icon ml-auto mr-auto">
              <MdAirplanemodeActive/>
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
