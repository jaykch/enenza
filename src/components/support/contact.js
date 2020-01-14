import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Contact = () => {
  return (
    <section id="support-contact">
      <Container>
        <Row>
          <Col md={12}>
            <p>Can't find the answer to your question?<br/>Send us an email or give us a call.</p>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <div className="support-contact">
              <span></span>
              <a href="mailto:hello@enenza.com">Hello@enenza.com</a>
            </div>
            <div className="support-contact">
              <span></span>
              <a href="tel:+4402039941969">+44 0203 994 1969</a>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default Contact
