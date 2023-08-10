import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import TitleBlock from '../TitleBlock'


const AboutVideoSlide = ({embedId}) => {
  return (
    <>
    <Row>
      <Col className='about-video__title'>
        <TitleBlock subtitle={`Про нас`}/>
      </Col>
    </Row>
    <Row className='about-video-inner'>
        <Col md={12} className='about-video__frame'>
        <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
        </Col>
        <Col md={6} className='about-video__content'>
            <p>
                Якість обслуговування наших клієнтів є одним із найголовніших принципів для компанії. 
                Ми планомірно впроваджуємо заходи, аби зробити наші послуги максимально комфортними та зручними.
            </p>
        </Col>
        <Col md={6} className='about-video__content'>
            <p className='right'>Приємного перегляду!</p>
        </Col>
    </Row>
    </>
  )
}

export default AboutVideoSlide