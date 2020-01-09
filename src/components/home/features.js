import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaCalendar, FaWallet, FaMobile } from "react-icons/fa"
import { GiPillow } from "react-icons/gi"

const Features = () => {
  return (
    <section id="features">
      <Container>
        <Row>
          <Col md={12}><h2>We do it better</h2>
          </Col>
          <Col md={3} className="text-center">
            <div className="feature-icon ml-auto mr-auto">
              <FaCalendar/>
            </div>
            <h3>Easy Booking</h3>
            <p>Pre-Book up to 30 days in advance with our quick and easy online booking system.</p>
          </Col>
          <Col md={3} className="text-center">
            <div className="feature-icon ml-auto mr-auto">
              <GiPillow/>
            </div>
            <h3>Comfort</h3>
            <p>Experienced and discreet drivers, bottled water, onboard Wi-Fi and chargers, for a perfect journey.</p>
          </Col>
          <Col md={3} className="text-center">
            <div className="feature-icon ml-auto mr-auto">
              <FaWallet/>
            </div>
            <h3>Fixed Pricing</h3>
            <p>You pay what you are quoted no hidden surprises or random surges.*</p>
          </Col>
          <Col md={3} className="text-center">
            <div className="feature-icon ml-auto mr-auto">
              <FaMobile/>
            </div>
            <h3>Free SMS &amp; Email Updates</h3>
            <p>From booking confirmation, to job completion. Keep updated at every step of the way.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
