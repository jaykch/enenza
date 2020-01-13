import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./banner.scss"

const Banner = () => {
  return (
    <section id="home-banner">
      <Container>
        <Row>
          <Col md={8} className="banner-text">
            <p>Premium ground transportation without the premium.</p>
          </Col>
          <Col md={4} className="banner-subtitle"><p>Let's get you there <br/> <strong>Comfort is <span>key</span></strong></p></Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
