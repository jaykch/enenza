import { Link } from "gatsby"
import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "./header.scss"
import logo from "../images/logo.svg"

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
            =
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto main-nav">
              <Navbar.Text><Link to="/services" activeClassName="active">Services</Link></Navbar.Text>
              <Navbar.Text><Link to="/business" activeClassName="active">Business</Link></Navbar.Text>
              <Navbar.Text><Link to="/support" activeClassName="active">Support</Link></Navbar.Text>
              <Navbar.Text onClick={showModal}>Book Now</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </header>
  )
}

export default Header
