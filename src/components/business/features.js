import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaSms, FaBlackTie, FaUserClock, FaCarSide } from "react-icons/fa";

const Features = () => {
  return (
    <section id="business-features">
      <Container>
        <Row>
          <Col md={3}>
            <div className="feature-icon">
              <FaSms/>
            </div>
            <span>SMS updates for passengers</span>
          </Col>
          <Col md={3}>
            <div className="feature-icon">
              <FaBlackTie/>
            </div>
            <span>Tailored arrangements</span>
          </Col>
          <Col md={3}>
            <div className="feature-icon">
              <FaUserClock/>
            </div>
            <span>24/7 dedicated support</span>
          </Col>
          <Col md={3}>
            <div className="feature-icon">
              <FaCarSide/>
            </div>
            <span>Priority vehicle allocation</span>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Features
