import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import plus from "../../images/business/plus.jpg"
const BusinessPlus = () => {
  return (
    <section id="business-plus">
      <Container>
        <Row>
          <Col md={6}>
            <img src={plus} alt="Business Plus"/>

          </Col>
          <Col md={6} className="text-container">
            <h2>Business Plus</h2>
            <p>Make lightwork of organising ground transportation for your teams and clients. Having a BusinessPlus
              account with us allows you to place online bookings for your clients, employees, or guests all from one
              account and at short notice</p>
            <p>Fill in the form below to register your interest for a BusinessPlus account. We will send you an
              information pack and once you are ready, an account manager will get in touch to set up your account.</p>
            <span>Just minding your business</span>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BusinessPlus
