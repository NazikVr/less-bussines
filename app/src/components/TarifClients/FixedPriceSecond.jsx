import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const FixedPriceSecond = () => {

  return (
        <Container>
            <Row>
            <Col md={12}>
                <div className='fixed-title__inner'>
                <div className="fixed-title__number">02</div>
                <p className="fixed-title__descr">Фіксовані ціни, визначені пунктом <span>01</span>, застосовуються до електричної енергії, <br /> 
                що купується у постачальників універсальних послуг та споживається:</p>
                </div>
                </Col>
            </Row>
            <Row className='fixed-price-second'>
            <Col md = {6} >
                <div className="fixed-price-second__inner">
                    <p className='fixed-price-second__number'>01</p>
                    <p className='fixed-price-second__contsnt'>Індивідуальними та колективними побутовими споживачами, в тому числі у гуртожитках, що розраховуються за 
                    електричну енергію за загальним розрахунковим засобом обліку в частині споживання електричної енергії фізичними особами для задоволення власних 
                    побутових потреб, які не включають професійну та, або, господарську діяльність</p>
                </div>
                <div className="fixed-price-second__inner">
                    <p className='fixed-price-second__number'>02</p>
                    <p className='fixed-price-second__contsnt'>У багатоквартирних житлових будинках 
                    <span> (у тому числі гуртожитках)</span> на технічні цілі <span>(аварійне та евакуаційне освітлення, роботу індивідуальних теплових пунктів, котелень, ліфтів, 
                    насосів, замково-переговорних пристроїв, протипожежних систем, систем вентиляції, димовидалення та кондиціонування, систем сигналізації, авіаційних маяків, 
                    що належать власникам квартир багатоквартирного будинку на праві спільної власності)</span> та освітлення дворів, східців і номерних знаків</p>
                </div>
            </Col>
            <Col md = {6} className="fixed-price-second__col-2">
                <div className="fixed-price-second__inner">
                    <p className='fixed-price-second__number'>03</p>
                    <p className='fixed-price-second__contsnt'>У дачних та дачно-будівельних кооперативах, садових товариствах, гаражно-будівельних кооперативах на технічні цілі 
                    <span>(роботу насосів)</span> та освітлення території</p>
                </div>
                <div className="fixed-price-second__inner">
                    <p className='fixed-price-second__number'>04</p>
                    <p className='fixed-price-second__contsnt'>Юридичними особами, які є власниками <span>(балансоутримувачами)</span> майна, що 
                    використовується для компактного поселення внутрішньо переміщених осіб <span>(містечок із збірних модулів, гуртожитків, оздоровчих таборів, будинків відпочинку, 
                    санаторіїв, пансіонатів, готелів тощо)</span>, у частині задоволення власних побутових потреб внутрішньо переміщених осібь</p>
                </div>
                <div className="fixed-price-second__inner">
                    <p className='fixed-price-second__number'>05</p>
                    <p className='fixed-price-second__contsnt'> Релігійними організаціями в частині споживання електричної енергії на комунально-побутові потреби </p>
                </div>
            </Col>
        </Row>
     </Container>    
  )
}

export default FixedPriceSecond