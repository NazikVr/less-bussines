import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMemo, useState } from 'react';
import { getCulcPrice, getOperRozpElement } from '../../Axios/calculationsYr';

const CalculatorPrice = ({rozpodilList, monthList, yearList}) => {

  const [rozpValue, SetRozpValue] = useState(0);
  const [klas, SetKlas] = useState(1);
  const [currentPeriod, SetCurrentPeriod] = useState('2023_01');
  const [calcList, SetCalcList] = useState([]);

  function rozpChange(e) {
    SetRozpValue(parseInt(e.target.value));
    
    parseInt(e.target.value) && getOperRozpElement(e.target.value).then((response)=>{
        let urls = response.calculatorPriceYurs;
        let requests = urls.map(url => getCulcPrice(url));
        let calcListAll = [];

        Promise.all(requests)
        .then((responses) =>{responses.forEach(response => {
            calcListAll.push(response);
        })
            SetCalcList(calcListAll);
        });
    })
  }

function handleClas(event) {
    SetKlas(parseInt(event.target.value));
}

function handlePeriod(event) {
    SetCurrentPeriod(event.target.value);
}

const showPrice = useMemo(() => {
    if (calcList.length > 0) {
      return calcList.filter(calcItem => {
        console.log(currentPeriod);
        console.log(calcItem.period);
                return calcItem.period === currentPeriod && calcItem.klas === klas;
            })
    }
}, [calcList,currentPeriod,klas])

const calcAll = (price_1, price_2,price_3,price_4) => {
    return (price_1 + price_2 + price_3 + price_4).toFixed(2);
}

const calcPdv = (price) => {
    return (price * 1.2).toFixed(2);
}

  return (
    <section className="green">
        <Container>
            <Row>
                <Col md={12}>
                    <Row>
                        <Col md={6} className='h2-green'>
                          <h3>Калькулятор для<br/> розрахунку ціни<br/> електроенергії</h3>
                        </Col>
                        <Col md={6} className='nobg-green'>
                          <p></p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className='header-green'>
                    <p>Для непобутових споживачів*</p>
                </Col>
                <Col md={6} className='header-green'>
                    <p>Цей розрахунок застосовується до непобутових споживачів електроенергії із дозволеною потужністю до 50 кВт включно, які мають право на універсальну послугу</p>
                </Col>
                <Col md={6} className='header-green'>
                   <div className="form-left d-flex align-items-center"><span className="number-form">01</span> <span className="number-text">Розрахунковий період</span></div>
                </Col>
                <Col md={6} className='header-green'>
                    <select className="form-select" aria-label="Default select" onChange={handlePeriod} value={currentPeriod}>
                         {yearList.map((year)=>{
                               return monthList.map((month,ind)=>{
                                    return <option key={ind} value={year + '_' + month.id}>{month.id+' '}{month.name}{' '+year}</option>
                                })
                         })}
                    </select>
                </Col>
                <Col md={6} className='header-green'>
                   <div className="form-left d-flex align-items-center"><span className="number-form">02</span> <span className="number-text">Оператор системи розподілу, до мереж якого належить електроустановка</span></div>
                </Col>
                <Col md={6} className='header-green'>
                    <select className="form-select" aria-label="Default select" value={rozpValue} onChange={rozpChange}>
                    <option value='0' defaultValue = '0'> Оберіть оператора системи розподілу</option>
                       {rozpodilList && 
                             rozpodilList.map((rozp)=>{
                                return <option key={rozp.id} value={rozp.id}>{rozp.name}</option>
                             })
                         }
                    </select>
                </Col>
                <Col md={6} className='header-green'>
                   <div className="form-left d-flex align-items-center height0"><span className="number-form-norm">03</span> <span className="number-text">Клас напруги</span></div>
                </Col>
                <Col md={6} className='header-green' onChange={handleClas}>
                    <input type="radio" value={1} name="options-outlined" className="circl" id="btn-check-outlined18" autoComplete="off" defaultChecked />
                    <label className="radiobtn" htmlFor="btn-check-outlined18">1-й клас</label>
                    <input type="radio" value={2} name="options-outlined" className="circl" id="btn-check-outlined19" autoComplete="off"/>
                    <label className="radiobtn" htmlFor="btn-check-outlined19">2-й клас</label>
                </Col>    
            </Row>
            {!!showPrice?.length && 
            <Row className='calculator-yrid'>
                <Row className='calculator-yrid__head'>
                    <Col md={6} className='calculator-yrid__descr'>Складові ціни</Col>
                    <Col md={3} className='pdv'>грн/МВт·год <span>без ПДВ</span></Col>
                    <Col md={3} className='pdv'>грн/МВт·год <span>разом з ПДВ</span></Col>
                </Row>
                <Row className='calculator-yrid__item'>
                    <Col md={6} className='calculator-yrid__descr'>Прогнозована середня закупівельна ціна на електроенергію</Col>
                    <Col md={3} className='calculator-yrid__price'>{showPrice[0].price_1}</Col>
                    <Col md={3} className='calculator-yrid__price'><b>{calcPdv(showPrice[0].price_1)}</b></Col>
                </Row>
                <Row className='calculator-yrid__item'>
                    <Col md={6} className='calculator-yrid__descr'>Тариф на послуги з розподілу електричної енергії</Col>
                    <Col md={3} className='calculator-yrid__price'>{showPrice[0].price_2}</Col>
                    <Col md={3} className='calculator-yrid__price'><b>{calcPdv(showPrice[0].price_2)}</b></Col>
                </Row>
                <Row className='calculator-yrid__item'>
                    <Col md={6} className='calculator-yrid__descr'>Тариф на послуги постачальника універсальних послуг</Col>
                    <Col md={3} className='calculator-yrid__price'>{showPrice[0].price_3}</Col>
                    <Col md={3} className='calculator-yrid__price'><b>{calcPdv(showPrice[0].price_3)}</b></Col>
                </Row>
                <Row className='calculator-yrid__item'>
                    <Col md={6} className='calculator-yrid__descr'>Тариф на послуги з передачі електричної енергії</Col>
                    <Col md={3} className='calculator-yrid__price'>{showPrice[0].price_4}</Col>
                    <Col md={3} className='calculator-yrid__price'><b>{calcPdv(showPrice[0].price_4)}</b></Col>
                </Row>
                <Row className='calculator-yrid__item all'>
                    <Col md={6} className='calculator-yrid__descr'>Всього</Col>
                    <Col md={3} className='calculator-yrid__price'>{calcAll(showPrice[0].price_1, showPrice[0].price_2, showPrice[0].price_3, showPrice[0].price_4)}</Col>
                    <Col md={3} className='calculator-yrid__price'><b>{calcPdv(calcAll(showPrice[0].price_1, showPrice[0].price_2, showPrice[0].price_3, showPrice[0].price_4))}</b></Col>
                </Row>
            </Row> }
        </Container>
    </section>
  )
}

export default CalculatorPrice