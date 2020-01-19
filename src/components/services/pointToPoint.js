import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import transfers from "../../images/services/transfers.jpg"

const PointToPoint = () => {
  return (
    <section id="point-to-point">
      <Container>
        <Row>
          <Col lg={5} className="service-text">
            <h3>So, what's your point?</h3>
            <p>We know driving can be time consuming and stressful, get around hassle free with our 24 hour
              point-to-point service. Our experienced drivers utilise the most up to date satellite navigation systems
              with real time traffic information to keep you moving around more efficiently.</p>
          </Col>
          <Col lg={7} className="image-container">
            <img src={transfers} alt="Point to Point"/>
          </Col>
          <Col md={8} className="text-left service-title">
            <h2>Point - to - Point</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PointToPoint
