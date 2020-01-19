import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import transfers from "../../images/services/transfers.jpg"

const Transfers = () => {
  return (
    <section id="transfers">
      <Container>
        <Row>
          <Col lg={7}>
            <img src={transfers} alt="Airport Transfers"/>
          </Col>
          <Col lg={5} className="service-text">
            <h3>Zooming through the sky</h3>
            <p>Dedicated flight status tracking, 30 minutes free waiting time and a complimentary meet and greet
              service. Our airport transfer service ensures you get to the airport on time and in comfort.
              What's more, you can book up to 30 days in advance.</p>
          </Col>
          <Col md={12} className="text-right service-title">
            <h2>Airport Transfers</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Transfers
