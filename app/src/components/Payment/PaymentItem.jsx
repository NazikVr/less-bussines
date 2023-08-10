import React from 'react'
import { Link } from 'react-router-dom'

const PaymentItem = ({type, isCommision, path}) => {
  return (
    <div className='online-item'>
        <Link to={path} target="_blank"><img src={type} alt="payment"/>
        {isCommision 
        ? <p className='payment-comission active'>Можлива комісія</p>
        : <p className='payment-comission'>Без комісії</p>
        }
        </Link>
    </div>
  )
}

export default PaymentItem