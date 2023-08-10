import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import OfferPowerItem from './OfferPowerItem'

const OfferPower = ({checkList, getValue}) => {
  return (
    <Container>
        <Row className='tab-power' onChange={getValue}>
          {checkList.map((checkItem,index)=>{
            return <OfferPowerItem 
                      key={index} 
                      content={checkItem.content} 
                      title = {checkItem.title} 
                      idElem = {index+1} 
                      idBlock ={checkItem.id}
                      bold = {checkItem.bold}
                  />
          })}
        </Row>
   </Container>
  )
}

export default OfferPower