import { Link } from "gatsby"
import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import "./header.scss"
import logo from "../images/logo.svg"
import { FaEllipsisV, FaInstagram, FaFacebookSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Header = ({ showModal }) => {

  const [scroll, setScroll] = React.useState(1)

  React.useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [scroll, setScroll])

  return (
    <header>
      <Navbar expand="lg" fixed="top" className={scroll ? "" : "scrolled"}>
        <Container>
          <Link to="/" className="logo">
            <img src={logo} alt="CX"/>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaEllipsisV/>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto main-nav">
              <Navbar.Text><Link to="/services" activeClassName="active">Services</Link></Navbar.Text>
              <Navbar.Text><Link to="/business" activeClassName="active">Business</Link></Navbar.Text>
              <Navbar.Text><Link to="/support" activeClassName="active">Support</Link></Navbar.Text>
              <Navbar.Text onClick={showModal}>Book Now</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="mobile-navbar">
            <Nav className="ml-auto main-nav">
              <Navbar.Text><Link to="/driver">Become a driver</Link></Navbar.Text>
              <Navbar.Text><Link to="/support">Support & FAQ</Link></Navbar.Text>
              <NavDropdown.Divider />
              <Navbar.Text><Link to="/terms">Terms and Conditions</Link></Navbar.Text>
              <Navbar.Text><Link to="/terms">Privacy Policy</Link></Navbar.Text>
              <Navbar.Text className="nav-section-header">Get in touch</Navbar.Text>
              <Navbar.Text><a href="mailto:hello@enenza.com">Hello@enenza.com</a></Navbar.Text>
              <Navbar.Text> <a href="tel:+4402039941969">+44 0203 994 1969</a></Navbar.Text>
              <Navbar.Text className="nav-section-header">Connect with us</Navbar.Text>
              <Navbar.Text>
                <ul className="social-icons">
                  <li><a href="https://www.instagram.com/enenza/" target="_blank"
                         rel="noopener noreferrer"><FaInstagram/></a></li>
                  <li><a href="https://www.facebook.com/enenza/" target="_blank"
                         rel="noopener noreferrer"><FaFacebookSquare/></a></li>
                  <li><a href="https://www.linkedin.com/company/enenza/" target="_blank"
                         rel="noopener noreferrer"><FaLinkedinIn/></a></li>
                  <li><a href="https://twitter.com/enenzauk" target="_blank" rel="noopener noreferrer"><FaTwitter/></a></li>
                </ul>
              </Navbar.Text>
              <Navbar.Text>London, UK</Navbar.Text>
              <Navbar.Text>© {new Date().getFullYear()} Enenza Limited</Navbar.Text>

            </Nav>
          </Navbar.Collapse>

          <Nav className="phone-nav">
            <Navbar.Text><Link to="/services" activeClassName="active">Services</Link></Navbar.Text>
            <Navbar.Text><Link to="/business" activeClassName="active">Business</Link></Navbar.Text>
            <Navbar.Text onClick={showModal}>Book Now</Navbar.Text>
          </Nav>
        </Container>

      </Navbar>
    </header>
  )
}

export default Header
