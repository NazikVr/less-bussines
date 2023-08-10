import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const OperPeriodPrice = ({operator, klas, prices}) => {

  const calcAll = (price_1, price_2,price_3,price_4) => {
        return (price_1 + price_2 + price_3 + price_4).toFixed(2);
  }

  const calcPdv = (price) => {
    return (price * 1.2).toFixed(2);
  }

  return (
    <section className='tarif-plan-first'>
      <Row className='tarif-plan'>
        <Col md={12} className='tarif-plan__clients'>
            <p >Для споживачів універсальної послуги, розподіл електричної енергії здійснюється від мереж <span>{operator}</span> на {klas}-му класі напруги</p>
        </Col>
        <Col md={4} className='tarif-plan__title-price'>
            <p>Складові ціни</p>
        </Col>
        <Col md={3} className='tarif-plan__title-mv'>
            <p>грн/МВт·год <span>без ПДВ</span></p>
        </Col>
        <Col md={3} className='tarif-plan__title-mv'>
            <p>грн/МВт·год <span>разом з ПДВ</span></p>
        </Col>
        <Col md={2} className='tarif-plan__title-addit'>
            <p>Примітка</p>
        </Col>
      </Row>
      <Row className='oper-yrid'>
        <Row className='oper-yrid__item'>
            <Col md={4} className='oper-yrid__name'> <p>Прогнозована середня закупівельна ціна на електроенергію</p></Col>
            <Col md={3} className='oper-yrid__price'> <p>{prices.price_1}</p></Col>
            <Col md={3} className='oper-yrid__price'> <p><b> {calcPdv(prices.price_1)} </b></p></Col>
            <Col md={2} className='oper-yrid__posctan'> <p>Постанова НКРЕКП <span>№1177</span> від 05.10.2018</p></Col>
        </Row>
        <Row className='oper-yrid__item'>
            <Col md={4} className='oper-yrid__name'> <p>Тариф на послуги з розподілу електричної енергії</p></Col>
            <Col md={3} className='oper-yrid__price'> <p>{prices.price_2}</p></Col>
            <Col md={3} className='oper-yrid__price'> <p><b> {calcPdv(prices.price_2)} </b></p></Col>
            <Col md={2} className='oper-yrid__posctan'> <p>Постанова НКРЕКП <span>№ 2372</span> від 09.12.2020</p></Col>
        </Row>
        <Row className='oper-yrid__item'>
            <Col md={4} className='oper-yrid__name'> <p>Тариф на послуги постачальника універсальних послуг</p></Col>
            <Col md={3} className='oper-yrid__price'> <p>{prices.price_3}</p></Col>
            <Col md={3} className='oper-yrid__price'> <p><b> {calcPdv(prices.price_3)} </b></p></Col>
            <Col md={2} className='oper-yrid__posctan'> <p>Постанова НКРЕКП <span>№ 2291</span> від 02.12.2020</p></Col>
        </Row>
        <Row className='oper-yrid__item'>
            <Col md={4} className='oper-yrid__name'> <p>Тариф на послуги з передачі електричної енергії</p></Col>
            <Col md={3} className='oper-yrid__price'> <p>{prices.price_4}</p></Col>
            <Col md={3} className='oper-yrid__price'> <p><b> {calcPdv(prices.price_4)} </b></p></Col>
            <Col md={2} className='oper-yrid__posctan'> <p>Постанова НКРЕКП <span>№ 2291 </span> від 02.12.2020</p></Col>
        </Row>
        <Row className='oper-yrid__item all'>
            <Col md={4} className='oper-yrid__price desc'> <p>Всього</p></Col>
            <Col md={3} className='oper-yrid__price'> <p>{calcAll(prices.price_1, prices.price_2, prices.price_3, prices.price_4)}</p></Col>
            <Col md={3} className='oper-yrid__price'> <p><b> {calcPdv(calcAll(prices.price_1, prices.price_2, prices.price_3, prices.price_4))} </b></p></Col>
        </Row>        

      </Row>
    </section>
  )
}

export default OperPeriodPrice