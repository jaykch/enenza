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
              <h2>Get in touch</h2>
              <li><a href="mailto:hello@enenza.com">Hello@enenza.com</a></li>
              <li><a href="tel:+4402039941969">+44 0203 994 1969</a></li>
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
          <Col md={4} className="text-right site-map">
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/business">For Business</Link></li>
              <li><Link to="/support">Support & FAQ</Link></li>
              <li><Link to="/driver">Become a driver</Link></li>
            </ul>
          </Col>
        </Row>
        <Row className="copyright">
          <Col md={4}>
            <p>© {new Date().getFullYear()} Enenza Limited</p>
          </Col>
          <Col md={4}>
            <p className="text-center"><Link to="/terms">Terms & Conditions &nbsp; Privacy Policy</Link></p>
          </Col>
          <Col md={4} className="text-right">
            <p>London, UK</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
