import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Modal } from "react-bootstrap"
import { MdClose } from "react-icons/md"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [show, setShow] = React.useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return (
    <>
      <Helmet>
        < meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} showModal={handleShow}/>
      <main>{children}</main>
      <Footer/>
      <Modal show={show} onHide={handleClose} centered>
        <MdClose onClick={handleClose}/>
        <Modal.Body>
          <iframe src="https://enenzabooking.web.app/" frameBorder="0" title="Booking"/>
        </Modal.Body>
      </Modal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
