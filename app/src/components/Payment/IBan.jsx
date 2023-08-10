import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'

const IBan = () => {
  return (
    <Container className='iban'>
        <Row className='iban__title'>
            <h3>
              Побутові споживачі ТОВ «Львівенергозбут» можуть здійснити оплату за спожиту електроенергію через електронні системи, 
              в пунктах прийому платежів або платіжних терміналах.
            </h3>
        </Row>
        <Row className="iban__info">
           <Col md={7} className="iban__info-content">
                    <p>Звертаємо Вашу увагу, що з 13.01.2020 року відбудеться повний перехід на використання міжнародного номера банківського рахунку IBAN.</p>
                    <p>Для наших клієнтів, котрі здійснюють оплату через платіжні сервіси Ощадбанку, Приватбанку, Укрпошти, Монобанку, IPay, EasyPay та Portmone, перехід відбудеться в автоматичному режимі.</p>
                </Col>
                <Col md={5} className="iban__download">
                   <Link to="/pdf/rakhunok-dlia-oplaty.pdf" target='_blank' className="iban__download-link">
                    Надаємо рахунок у міжнародному форматі <b>IBAN</b><br/> для оплати за спожиту електричну енергію    
                   </Link>
                   <div className="iban__number">
                      UA803257960000026034314234709
                   </div>
            </Col>
        </Row>
    </Container>
  )
}

export default IBan