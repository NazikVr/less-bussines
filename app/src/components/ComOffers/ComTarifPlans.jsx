import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import ComTarifPlansItem from './ComTarifPlansItem'

const ComTarifPlans = ({planList, planListLong}) => {
  return (
    <Container>
        <Row className='tarif-plans-inner'>
        {planList && planList.map((plan,index)=>{
                return <ComTarifPlansItem key = {index}
                          nameTariff = {plan.nameTariff}
                          isOsr = {plan.isOsr}
                          payment = {plan.payment}
                          nameCom = {plan.nameCom}
                          url = {plan.url}
                          cols = {3}
                    />
            })}
        {planListLong && planListLong.map((plan,index)=>{
                return <ComTarifPlansItem key = {index}
                          nameTariff = {plan.nameTariff}
                          isOsr = {plan.isOsr}
                          payment = {plan.payment}
                          nameCom = {plan.nameCom}
                          url = {plan.url}
                          cols = {6}
                    />
            })}
        </Row>
    </Container>
  )
}

export default ComTarifPlans