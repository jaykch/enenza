import React from "react"
import { Col, Row, Container } from "react-bootstrap"
import "./footer.scss"
import { FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4}>
            <ul className="site-links">
              <li>
                <Link to="/driver" className="logo">Become a driver</Link>
              </li>
              <li><a href="mailto:webmaster@example.com">Get in touch</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h3 className="text-center">Connect with us</h3>
            <ul>
              <li><a href="https://www.instagram.com/enenza/" target="_blank"
                     rel="noopener noreferrer"><FaInstagram/></a></li>
              <li><a href="https://www.facebook.com/enenza/" target="_blank"
                     rel="noopener noreferrer"><FaFacebookSquare/></a></li>
              <li><a href="https://www.linkedin.com/company/enenza/" target="_blank"
                     rel="noopener noreferrer"><FaLinkedinIn/></a></li>
              <li><a href="https://twitter.com/enenzauk" target="_blank" rel="noopener noreferrer"><FaTwitter/></a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            © {new Date().getFullYear()} Enenza Limited
          </Col>
          <Col md={4}>
            <p className="text-center"> Terms & Conditions &nbsp; Privacy Policy</p>
          </Col>
          <Col md={4} className="text-right">
            London, UK
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
