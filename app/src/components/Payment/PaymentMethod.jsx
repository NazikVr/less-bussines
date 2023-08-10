import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import PaymentItem from './PaymentItem';

const PaymentMethod = () => {
  return (
        <Container className='payment-method'>
            <h3 className='payment-method__title'>Аби оплатити за електроенергію необхідно:</h3>
            <Row>
                <Col md={3} className='payment-method__banner'>
                    <div className="banner-inner">
                        <img src="/img/payment-method-1-1.png" alt="" />
                        <img src="/img/payment-method-1-1.png" alt="" />
                        <img src="/img/payment-method-1-1.png" alt="" />
                        <img src="/img/payment-method-1-1.png" alt="" />
                        <img src="/img/payment-method-1-1.png" alt="" />
                        <img src="/img/payment-method-1-1.png" alt="" />
                    </div>
                    <p>Клікнути на банер обраної Вами платіжної системи</p>
                </Col>
                <Col md={3} className='payment-method__item'>
                    <img src="/img/payment-method-2.png" alt="" />
                    <p>Ввести десятизначний код, який є на Вашій квитанції про оплату спожитої електроенергії</p>
                </Col>
                <Col md={3} className='payment-method__item'>
                    <img src="/img/payment-method-3.png" alt="" />
                    <p>Ввести дані Вашої платіжної картки будь-якого банку</p>
                </Col>
                <Col md={3} className='payment-method__item'>
                    <img src="/img/payment-method-4.png" alt="ticket"/>
                    <p>Здійснити оплату</p>
                </Col>
            </Row>
            <Row>
                <Col md={3} className='payment-ticket'>
                    <img src="/img/payment-tiket.png" alt="" />
                </Col>
                <Col md={6} className='payment-yellow'>
                    <p>Підтвердженням проведеної Вами оплати за спожиту електроенергію є квитанція, яку Ви можете роздрукувати безпосередньо з сайту, а також SMS-повідомлення,
                        якщо така послуга активована для Вашої картки</p>
                </Col>
            </Row>
            <Row>
               <Col md={4} className='payment-method__block'>
                    <p>Окрім цього, Ви можете сплатити за електроенергію з допомогою мобільного додатку «Монобанк»</p>
                </Col>
                <Col md={4}>
                <PaymentItem
                    type="/img/banclviv.svg"
                    isCommision={false}
                />
                </Col>
                <Col md={2} className="qr">
                    <img src="/img/qr-code.svg" alt="qr" />
                </Col>
            </Row>
    </Container>
    
  )
}

export default PaymentMethod