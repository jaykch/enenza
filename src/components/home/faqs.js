import React from "react"
import { Col, Row, Container, Accordion, Card } from "react-bootstrap"

const Faqs = () => {
  return (
    <section id="faqs">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Some questions you may ask.</h2>
          </Col>
          <Col md={12}>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Faqs
