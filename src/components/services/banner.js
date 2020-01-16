import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Banner = () => {
  return (
    <section id="services-banner">
      <Container>
        <Row>
          <Col md={6}>
            <h1>We're here for you...</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
