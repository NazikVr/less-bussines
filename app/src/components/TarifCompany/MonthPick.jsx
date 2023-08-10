import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const MonthPick = ({index, monthList}) => {

  return (
        <Row className="pick-inner" >
            {monthList.map((month,ind)=>{
              return <Col md={4} className="pick-block" key={ind}>
                    <input type="radio" id={index + 'pc' + ind} value={month.id} name="month" className="pick-block__input"/>
                    <label htmlFor={index + 'pc' + ind} className="pick-block__label">
                        <p><span>{month.id}</span> {month.name}</p>
                    </label>
                </Col>
            })}
        </Row>
  )
}

export default MonthPick