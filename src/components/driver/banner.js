import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Banner = () => {
  return (
    <section id="driver-banner">
      <Container>
        <Row>
          <Col md={6}>
            <h1>We're more than just partners.</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
