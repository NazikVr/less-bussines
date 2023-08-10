// import { useMemo } from "react";
import Row from 'react-bootstrap/esm/Row'
import Container from 'react-bootstrap/esm/Container'
// import { useMap } from 'react-leaflet/hooks'
import CustomMap from './CustomMap'

const PaymentMap = ({count, paymentList}) => {
  return  ( 
        <>
          <Container className='payment-map'> 
            <Row>
                <h3>Найближчи пункти прийому платежів <span>— {count}</span></h3>
            </Row>
            <CustomMap paymentList={paymentList}/>
          </Container>
        </>
  )}

export default PaymentMap
