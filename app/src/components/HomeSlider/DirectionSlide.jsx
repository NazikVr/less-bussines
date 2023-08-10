import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import TitleBlock from '../TitleBlock'

const DirectionSlide = () => {
  return (
    <>
    <Row>
      <Col>
        <TitleBlock subtitle={`Дирекція ТОВ «Львівенергозбут»`} />
      </Col>
    </Row>
    <Row className='direction-slide'>
        <Col md={2} className='direction'>
            <div className="direction__inner">
                <img className='direction__photo' src="/img/STYDIO_PH8.png" alt="photos"/>
                <p className='direction__name'>Костянтин <span>ющак</span></p>
                <img className='homeslide-rectangle' src="/img/rectangle-about.svg" alt="rec"/>
                <p className='direction__position'>Директор</p>
            </div>
        </Col>
        <Col md={2} className='direction'>
            <div className="direction__inner">
                <img className='direction__photo' src="/img/STYDIO_PH10.png" alt="photos"/>
                <p className='direction__name'>Роман <span>гринчук</span></p>
                <img className='homeslide-rectangle' src="/img/rectangle-about.svg" alt="rec"/>
                <p className='direction__position'>Заступник директора</p>
            </div>
        </Col>
        <Col md={2} className='direction'>
            <div className="direction__inner">
                <img className='direction__photo' src="/img/STYDIO_PH4.png" alt="photos"/>
                <p className='direction__name'>Ірина <span>линда</span></p>
                <img className='homeslide-rectangle' src="/img/rectangle-about.svg" alt="rec"/>
                <p className='direction__position'>Заступник директора з роздрібного продажу</p>
            </div>
        </Col>
        <Col md={2} className='direction'>
            <div className="direction__inner">
                <img className='direction__photo' src="/img/STYDIO_PH1.png" alt="photos"/>
                <p className='direction__name'>Мирослав <span>денько</span></p>
                <img className='homeslide-rectangle' src="/img/rectangle-about.svg" alt="rec"/>
                <p className='direction__position'>Начальник юридичного відділу</p>
            </div>
        </Col>
        <Col md={2} className='direction'>
            <div className="direction__inner">
                <img className='direction__photo' src="/img/STYDIO_PH13.png" alt="photos"/>
                <p className='direction__name'>Олена <span>овчиннікова</span></p>
                <img className='homeslide-rectangle' src="/img/rectangle-about.svg" alt="rec"/>
                <p className='direction__position'>Головний бухгалтер</p>
            </div>
        </Col>
        <Col md={12} className='direction__title'>
            <h2> — Світло — легко <br /> з Львівенергозбут!</h2>
        </Col>
    </Row>
    </>
  )
}

export default DirectionSlide