import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Text = () => {
  return (
    <section id="driver-text">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="text-container">
            <p>We are always in search for individuals who have an edge for professionalism, practices discretion all
              whilst providing outstanding service to our clients. At Enenza you are not just a driver partner by name,
              you are the frontline of our company and as such. you are rewarded for your loyalty and excellence through
              competitive rates, incentives and bonuses.</p>
            <p>If you believe you have what it takes to be part of the team, fill out your details in the form below and
              we will get in touch.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Text
