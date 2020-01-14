import React from "react"
import { Container, Row, Col, Tab, Nav, Carousel, Card } from "react-bootstrap"
import car from "../../images/home/car.png"

const Choices = () => {
  return (
    <section id="choices">
      <Container>
        <Tab.Container id="tabs" defaultActiveKey="first">
          <Row>
            <Col md={12} className="text-center">
              <h2>Ride choices</h2>
            </Col>
          </Row>
          <Row className="tabs-wrapper">
            <Col md={4} className="choice-title">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Comfort</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={4} className="choice-title">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="second">Executive</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={4} className="choice-title">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="third">Vast</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={12} className="choice-content no-gutters">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col md={6} className="choice-image">
                      <img src={car} alt="Estate Car"/>
                      <div className="choice-image-background"></div>
                    </Col>
                    <Col md={6} className="choice-text text-center">
                      <h4>1-4 Passengers &nbsp; 4 Large Luggage</h4>
                      <p>Ultimate boot space, leg and head room. Vehicles in this category is a perfect choice for
                        airport runs, business travel or when you got kids with you. Sublime comfort even at entry
                        level.</p>
                    </Col>
                    <Col md={12} className="choice-subtitle">
                      <p className="text-right">Comfort at every level, we promise.</p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <Col md={6} className="choice-image">
                      <img src={car} alt="Estate Car"/>
                      <div className="choice-image-background"></div>
                    </Col>
                    <Col md={6} className="choice-text text-center">
                      <h4>Second choice</h4>
                      <p>Ultimate boot space, leg and head room. Vehicles in this category is a perfect choice for
                        airport runs, business travel or when you got kids with you. Sublime comfort even at entry
                        level.</p>
                    </Col>
                    <Col md={12} className="choice-subtitle">
                      <p className="text-right">Comfort at every level, we promise.</p>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <Col md={6} className="choice-image">
                      <img src={car} alt="Estate Car"/>
                      <div className="choice-image-background"></div>
                    </Col>
                    <Col md={6} className="choice-text text-center">
                      <h4>Third choice</h4>
                      <p>Ultimate boot space, leg and head room. Vehicles in this category is a perfect choice for
                        airport runs, business travel or when you got kids with you. Sublime comfort even at entry
                        level.</p>
                    </Col>
                    <Col md={12} className="choice-subtitle">
                      <p className="text-right">Comfort at every level, we promise.</p>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Card>
                  <Card.Title>Comfort</Card.Title>
                  <Card.Img variant="top" src={car}/>
                  <Card.Body>
                    <span>1-4 Passengers </span>
                    <span>4 Large Luggage</span>
                    <Card.Text>
                      Ultimate boot space, leg and head room. Vehicles in this category is a perfect choice for
                      airport runs, business travel or when you got kids with you. Sublime comfort even at entry
                      level.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Card.Title>Executive</Card.Title>
                  <Card.Img variant="top" src={car}/>
                  <Card.Body>
                    <span>1-4 Passengers </span>
                    <span>4 Large Luggage</span>
                    <Card.Text>
                      Ultimate boot space, leg and head room. Vehicles in this category is a perfect choice for
                      airport runs, business travel or when you got kids with you. Sublime comfort even at entry
                      level.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Card.Title>Vast</Card.Title>
                  <Card.Img variant="top" src={car}/>
                  <Card.Body>
                    <span>1-4 Passengers </span>
                    <span>4 Large Luggage</span>
                    <Card.Text>
                      Ultimate boot space, leg and head room. Vehicles in this category is a perfect choice for
                      airport runs, business travel or when you got kids with you. Sublime comfort even at entry
                      level.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>


    </section>
  )
}

export default Choices
