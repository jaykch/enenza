import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Banner = () => {
  return (
    <section id="business-banner">
      <Container>
        <Row>
          <Col md={12}>
            <h1>Think Business, Think Enenza.</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
