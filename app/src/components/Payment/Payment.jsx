import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import PaymentItem from './PaymentItem';
import TitleBlock from "../TitleBlock";

const Payment = ({title, subtitle, payImgs}) => {
    
  return (
    <>
    <TitleBlock subtitle={title} type={subtitle}/>
    <Container>
        <Row className='payment-online'>
            {payImgs.map((payImg,index)=>{
                return <Col key={index} md={4}>
                          <PaymentItem type={payImg.img} isCommision={payImg.comission} path={payImg.path}/>
                       </Col>
            })}
        </Row>
    </Container>
    </>
  )
}

export default Payment