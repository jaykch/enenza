import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Features = () => {
  return (
    <section id="business-features">
      <Container>
        <Row>
          <Col md={3}>
            <div className="feature-icon"></div>
            <span>SMS updates for passengers</span>
          </Col>
          <Col md={3}>
            <div className="feature-icon"></div>
            <span>Tailored arrangements</span>
          </Col>
          <Col md={3}>
            <div className="feature-icon"></div>
            <span>24/7 dedicated support</span>
          </Col>
          <Col md={3}>
            <div className="feature-icon"></div>
            <span>Priority vehicle allocation</span>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Features
