import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const TarifOsr = () => {
 
  return (
        <Container className='tarif-osr'>
            <Row className='tarif-osr__row'>
            <Col md={5}>
                <div className="tarif-osr__descr">
                    <p>Складові фіксованої ціни на електроенергію для населення затверджені НКРЕКП</p>
                </div>
            </Col>
            <Col md={7}>
                <div className="tarif-osr__title">
                    <p className='tarif-osr__title-date'>На 2021р.</p>
                    <p>грн/МВт*год без ПДВ</p>
                    <p>Затверджено НКРЕКП</p>
                </div>
            </Col>
            </Row>
            <Row>
                <Col md={5} className="tarif-osr__content-inner">
                    <div className="tarif-osr__content">
                        <p>Постановою КМУ № 483 від 05.06.2019р. затверджено Положення про покладання спеціальних обов’язків на учасників ринку електричної енергії для 
                            забезпечення загальносуспільних інтересів у процесі функціонування ринку електричної енергії.</p>
                        <p>Це Положення визначає обсяг та умови виконання спеціальних обов’язків учасниками ринку електричної енергії для забезпечення загальносуспільних 
                            інтересів у процесі функціонування ринку електричної енергії (далі - спеціальні обов’язки), що передбачають, зокрема, надання послуг 
                            із забезпечення доступності електричної енергії для побутових споживачів з метою забезпечення стабільності, належної якості та доступності 
                            електричної енергії, підтримання належного рівня безпеки її постачання споживачам без загрози першочерговій цілі створення повноцінного ринку 
                            електричної енергії, заснованого на засадах вільної конкуренції з дотриманням принципів прозорості та недискримінації.</p>
                        <p>Згідно п. 6 Положення, ціна на електричну енергію, за якою гарантований покупець здійснює продаж електричної енергії постачальникам універсальних послуг, 
                            розраховується як різниця між середньозваженою фіксованою ціною на електричну енергію для побутових споживачів і тарифами на послуги з передачі 
                            електричної енергії, на послуги з розподілу електричної енергії та на послуги постачальника універсальних послуг.
                            Середньозважена фіксована ціна визначається з урахуванням фактичних обсягів споживання електричної енергії побутовими споживачами у місяці, що 
                            передував попередньому розрахунковому місяцю.</p>
                        <p>Щодо таких складових як тарифи на послуги з передачі електричної енергії, на послуги з розподілу електричної 
                            енергії та на послуги постачальника універсальних послуг, то такі затверджені НКРЕКП.</p>
                    </div>
                </Col>
             <Col md={7} className="tarif-osr__item-inner">
                <div className="tarif-osr__title hide">
                        <p className='tarif-osr__title-date'>На 2021р.</p>
                        <p>грн/МВт*год без ПДВ</p>
                        <p>Затверджено НКРЕКП</p>
                </div>
                <div className="tarif-osr__item">
                    <p className='tarif-osr__name'>Тариф на послуги з передачі електричної енергії</p>
                    <p className='tarif-osr__mvt'>293,93</p>
                    <p className='tarif-osr__nkre'>Постанова НКРЕКП № 1177 від 05.10.2018</p>
                </div>
                <div className="tarif-osr__item mb-5">
                    <p className='tarif-osr__name'>Тариф на послуги постачальника універсальних послуг</p>
                    <p className='tarif-osr__mvt'>78,26</p>
                    <p className='tarif-osr__nkre'>Постанова НКРЕКП № 1177 від 05.10.2018</p>
                </div>
                <div className="tarif-osr__title">
                        <p className='tarif-osr__title-date'>На 2021р.</p>
                        <p>грн/МВт*год без ПДВ</p>
                        <p>Затверджено НКРЕКП</p>
                    </div>
                <div className="tarif-osr__item">
                    <p className='tarif-osr__name'><span> ОСР ПрАТ</span> «Львівобленерго»</p>
                    <p className='tarif-osr__mvt'>955,36</p>
                    <p className='tarif-osr__nkre'>Постанова НКРЕКП № 1177 від 05.10.2018</p>
                </div>
                <div className="tarif-osr__item">
                    <p className='tarif-osr__name'><span> ОСР АТ</span> «Укрзалізниця»</p>
                    <p className='tarif-osr__mvt'>907,44</p>
                    <p className='tarif-osr__nkre'>Постанова НКРЕКП № 1177 від 05.10.2018</p>
                </div>
                <div className="tarif-osr__item">
                    <p className='tarif-osr__name'><span> ОСР ДП</span> «Регіональні електричні мережі»</p>
                    <p className='tarif-osr__mvt'>371,31</p>
                    <p className='tarif-osr__nkre'>Постанова НКРЕКП № 1177 від 05.10.2018</p>
                </div>
                <div className="tarif-osr__item">
                    <p className='tarif-osr__name'><span> ОСР ПрАТ</span> «Прикарпаттяобленерго»</p>
                    <p className='tarif-osr__mvt'>1 276,22</p>
                    <p className='tarif-osr__nkre'>Постанова НКРЕКП № 1177 від 05.10.2018</p>
                </div>
                <div className="tarif-osr__item">
                    <p className='tarif-osr__name'><span> ОСР ТОВ </span> «Нафтогаз Тепло» <br /> м. Новий Розділ</p>
                    <p className='tarif-osr__mvt'>1 300,39</p>
                    <p className='tarif-osr__nkre'>Постанова НКРЕКП № 1177 від 05.10.2018</p>
                </div>
                <div className="tarif-osr__item">
                    <p className='tarif-osr__name'><span> ОСР ТОВ </span> «Нафтогаз Тепло» <br /> м. Новояворівськ</p>
                    <p className='tarif-osr__mvt'>775,66</p>
                    <p className='tarif-osr__nkre'>Постанова НКРЕКП № 1177 від 05.10.2018</p>
                </div>
                </Col>
            </Row>
     </Container>    
  )
}



export default TarifOsr