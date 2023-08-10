import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'

const ComTarifPlansItem = ({nameTariff, isOsr, payment, nameCom, url, cols}) => {
  return (
    <Col md={cols} className={cols===3 ? 'tarif-plans short' : 'tarif-plans long'}>
        <Link className="tarif-plans__inner" to={url} target={'_blank'}>
            <p className="tarif-plans__define">Тарифний план</p>
            <p className="tarif-plans__name">{nameTariff}</p>
            {isOsr 
                ? <p className="tarif-plans__osr active">З тарифом ОСР</p>
                : <p className="tarif-plans__osr">Без тарифу ОСР</p>
            }
            <div className="tarif-plans__price">
                { payment === 1 && <><p>Оплата по факту</p> <img src="/img/tarif-comer1.svg" alt=""/> </> }
                { payment === 2 && <><p>Оплата плановими платежами</p> <img src="/img/tarif-comer2.svg" alt=""/> </>}
                { payment === 3 && <><p>Попередня оплата</p> <img src="/img/tarif-comer3.svg" alt=""/> </>}
            </div>
            <p className="tarif-plans__offer-type">{nameCom}</p>
            <img src="/img/tarif-comer-download.svg" className="download" alt="download"/>
        </Link>      
    </Col>
  )
}

export default ComTarifPlansItem