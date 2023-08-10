import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'

const ApplicationInstruction = () => {
  return (
    <Container className='instruction'>
        <Row className="instruction__info">
           <Col md={7} className="instruction__info-content">
                    <p>Якість обслуговування клієнтів є одним із найголовніших принципів для нашої компанії.</p>
                    <p>ТОВ «Львівенергозбут» планомірно впроваджує заходи, аби зробити наші послуги максимально комфортними та зручними.</p>
                    <p>Ми завжди відкриті до співпраці і готові вислухати думку кожного клієнта.</p>
                </Col>
                <Col md={5} className="instruction__download">
                   <Link to="/page/instruc_zvernennia" className="instruction__download-link">
                    Інструкція про подання звернень,скарг та <br /> претензій та процедура розгляду звернень, <br /> скарг та претензій   
                   </Link>
                   <div className="instruction__additional">
                    Ви можете подати своє звернення, скаргу чи пропозицію до нашої компанії онлайн, заповнивши відповідну форму.
                   </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ApplicationInstruction