import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import transfers from "../../images/services/transfers.jpg"

const Timed = () => {
  return (
    <section id="timed">
      <Container>
        <Row>
          <Col lg={7}>
            <img src={transfers} alt="Hourly and daily"/>
          </Col>
          <Col lg={5} className="service-text">
            <h3>A little more personal</h3>
            <p>How about a personal chauffeur for the day? Take advantage of our hourly, Half day or full day bookings.
              You will be assigned a discreet and professional chauffeur to get you around in style and comfort on an
              'as directed' basis. (mileage caps apply, click here for Tariff's)</p>
          </Col>
          <Col md={12} className="text-right service-title">
            <h2>Hourly and Daily</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Timed
