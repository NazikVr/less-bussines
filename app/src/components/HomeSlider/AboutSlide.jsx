import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import TitleBlock from '../TitleBlock'

const AboutSlide = () => {
  const br = ( <br /> )
  return (
    <>
      <Row>
        <Col>
          <TitleBlock subtitle={`Про нас`} />
          <p style={{ fontSize: "32px", fontWeight: "600", lineHeight: "40px"}}>
          Енергопостачальна компанія <span style={{ color: "#6CCC0A" }}>ТОВ «ЛЕЗ Бізнес» —</span> <br />
          компанія, котра постачає електричну<br />
          енергію та природний газ юридичним клієнтам.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4} className='about'>
          <div className="about__inner">
            <img className='homeslide-rectangle' src="/img/rectangle-about.svg" alt="rec" />
            <p>
              Наша енергопостачальна компанія створена у 2023 році на базі Групи компаній «Львівенергозбут» як спеціалізований сервіс для бізнесу.
            </p>
          </div>
        </Col>
        <Col md={4} className='about'>
          <div className="about__inner">
            <img className='homeslide-rectangle' src="/img/rectangle-about.svg" alt="rec" />
            <p>
              Ми — постачальник електричної електроенергії для споживачів за вільною ціною на території України та постачальник природного газу для усіх категорій споживачів: <br />
              — усіх видів бізнесу;<br />
              — бюджетних організацій;<br />
              — комунальних установ тощо.<br />
            </p>
          </div>
        </Col>
        <Col md={4} className='about'>
          <div className="about__inner">
            <img className='homeslide-rectangle' src="/img/rectangle-about.svg" alt="rec" />
            <p>
              Якість обслуговування клієнтів ТОВ «ЛЕЗ Бізнес» є одним із найголовніших принципів нашої команди. «ЛЕЗ Бізнес» — це:<br />
              — персональний менеджер;<br />
              — цифрові кастомізовані сервіси;<br />
              — гарантована краща пропозиція.<br />
            </p>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default AboutSlide