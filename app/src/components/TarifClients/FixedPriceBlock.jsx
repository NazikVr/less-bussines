import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'

const FixedPriceBlock = ({ fixedList }) => {

  return (
    <Row className='fixed-price-block'>
      {fixedList.map((fixedItem) => {

        return <>  {fixedItem.title && <Col md={12}><h4 className='fixed-price-title'>{fixedItem.title}</h4></Col>}
          {/* <Col md ={4} className={fixedItem.sm ? 'fixed-price-volume small-vol' : 'fixed-price-volume'}>
                            <div className="volume-text"><p>{fixedItem.volume.text}</p></div>
                            {fixedItem.volume.kv && 
                            <div className="volume-kv">
                               <p>{fixedItem.volume.kv}</p>
                            </div>}
                            </Col> */}
          <Col md={8} className='fixed-price-count'>
            <div className="count-all">{fixedItem.count.all}</div>
            <div className="count-calc"> = </div>

            <div className="count-pdv-off">{fixedItem.count.pdvOff}</div>
            <div className="count-calc"> + </div>
            <div className="count-pdv-on">{fixedItem.count.pdvOn}</div>
          </Col>
        </>
      })}
      <Col md={12} className='fixed-price-rules'>
        <Link to='#'>«Прикінцеві та перехідні положення» <br /> Закону України «Про ринок електричної енергії»</Link>
        <img src="/img/fixed-price-download.svg" alt="download" />
      </Col>
    </Row>
  )
}

export default FixedPriceBlock