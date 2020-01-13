import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const BusinessForm = () => {
  return (
    <section id="business-form">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="text-center">
            <form action="https://formspree.io/Admin@enenza.com" method="POST">
              <Form.Group controlId="formGroupName">
                <Form.Control type="text" placeholder="Name*" name="Name" required/>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email*" name="Email" required/>
              </Form.Group>
              <Form.Group controlId="formBasicPhone">
                <Form.Control type="tel" placeholder="Contact Number*" name="Contact Number" required/>
              </Form.Group>
              <Form.Group controlId="formGroupCompany">
                <Form.Control type="text" placeholder="Company Name*" name="Company Name" required/>
              </Form.Group>
              <Button type="submit">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BusinessForm
