import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import NavApp from './NavApp';
export default function ContactUs() {
  return (
    <React.Fragment>
        <NavApp></NavApp>
        <Container className='bg-primary p-5 mt-5'>
          <h1 className='text-center text-white'>Contact Us<span className="bi bi-telephone-fill fs-2 ms-2"></span>          
          </h1>
          <Row className="mt-4 gx-5">
            <Col md={5} className='shadow p-3 ms-5 bg-white'></Col>
            <Col md={5} className='shadow p-3 ms-5  bg-white'></Col>
          </Row>
          
        </Container>
    </React.Fragment>
  )
}
