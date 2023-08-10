import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import TarifZone from './TarifZone'

const FixedPriceThird = () => {

  const listTwoZone = [
    {period: 'Нічний', coef: '0,5', count: '1,32', pdvOff: '1,1', pdvOn: '0,22', periodList : [ '23:00 — 07:00' ] },
    {period: 'Денний', coef: '1,0', count: '2,64', pdvOff: '2,2', pdvOn: '0,44', periodList : [ '07:00 — 23:00' ]},
  ]  

  const listThreeZone = [
    {period: 'Нічний', coef: '0,5', count: '1,32', pdvOff: '1,1', pdvOn: '0,22', periodList : [ '23:00 — 07:00' ] },
    {period: 'Напівпіковий', coef: '1,0', count: '2,64', pdvOff: '2,2', pdvOn: '0,44', periodList : [ '07:00 — 08:00', '11:00 — 20:00', '22:00 — 23:00' ]},
    {period: 'Піковий', coef: '1,5', count: '3,96', pdvOff: '3,3', pdvOn: '0,66', periodList : [ '08:00 — 11:00', '20:00 — 22:00' ]},
  ]  

  return (
        <Container>
            <Row>
            <Col md={12}>
                <div className='fixed-title__inner'>
                <div className="fixed-title__number">03</div>
                <p className="fixed-title__descr">  За наявності обліку споживання електричної енергії за періодами часу <br /> розрахунки споживачів, зазначених у підпункті 
                    <span className='gry'> 01</span> пункту <span className='grn'>02</span> , 
                    проводяться <br /> за фіксованою ціною на електричну енергію, визначеною пунктом <span>01</span>, <br />
                    із застосуванням таких коефіцієнтів <span className='ylw'>(за вибором споживача)</span>:</p>
                </div>
                </Col>
            </Row>
            <Row className='fixed-price-third'>
                <Col md={12}>
                <div className='zone__inner'>
                    <div className="zone__number">01</div>
                    <p className="zone__descr"> <span>2</span>-зонний тариф, диференційований за періодами часу </p>
                </div>
                </Col>
                <Col md={12}> 
            </Col>
          </Row>
          <TarifZone listZone={listTwoZone}/>
          <Row>
            <Col md={12} className='price-period'>
                <img src="/img/price-period.svg" alt="period" />
            </Col>
          </Row>
          <Row className='fixed-price-third'>
                <Col md={12}>
                <div className='zone__inner'>
                    <div className="zone__number">02</div>
                    <p className="zone__descr"> <span>3</span>-зонний тариф, диференційований за періодами часу </p>
                </div>
                </Col>
                <Col md={12}> 
            </Col>
          </Row>
          <TarifZone listZone={listThreeZone}/>
          <Row>
            <Col md={12} className='price-period'>
                <img src="/img/price-period-second.svg" alt="period" />
            </Col>
          </Row>
     </Container>    
  )
}

export default FixedPriceThird