import React from "react"
import { Form, Button, Col, Container, Row } from "react-bootstrap"

const DriverForm = () => {
  return (
    <section id="driver-form">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center form-container">
            <form action="https://formspree.io/Admin@enenza.com" method="POST">
              <Form.Group controlId="formGroupName">
                <Form.Control type="text" placeholder="Full name*" name="Name" required/>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Address*" name="Email" required/>
              </Form.Group>
              <Form.Group controlId="formBasicPhone">
                <Form.Control type="tel" placeholder="Contact Number*" name="Contact Number" required/>
              </Form.Group>
              <Form.Group controlId="formGroupExperience">
                <Form.Control type="text" placeholder="PCO Driving Experience in years*" name="Experience" required/>
              </Form.Group>
              <Form.Group controlId="formGroupVehicle">
                <Form.Control type="text" placeholder="Vehicle make and Model*" name="Vehicle" required/>
              </Form.Group>
              <Button type="submit">
                Apply
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default DriverForm
