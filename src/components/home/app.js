import React from "react"
import { Container, Row, Col, Modal } from "react-bootstrap"
import mobile from "../../images/home/mobile.svg"
import { MdClose } from "react-icons/md"

const App = () => {
  const [show, setShow] = React.useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <section id="app">
      <Container>
        <Row>
          <Col md={7} className="text-center">
            <p>Make bookings instantly through our secure online booking platform. Keep updated with E-mail and SMS
              notifications related to your booking, from initial booking to completion.</p>
            <br/><br/>
            <p>Available on web and mobile web.</p>
            <br/>
            <span className="book-button" onClick={handleShow}>Book Now</span>
          </Col>
          <Col md={5}>
            <img src={mobile} alt="Mobile App"/>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} centered>
        <MdClose onClick={handleClose}/>
        <Modal.Body>
          <iframe src="https://enenzabooking.web.app/" frameBorder="0" title="Booking"/>
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default App
