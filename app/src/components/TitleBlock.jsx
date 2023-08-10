import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TitleBlock = ({ title, subtitle, type, addClass }) => {
  return (
    <section className={"heading " + addClass}>
      <Container>
        <Row>
          <Col>
            <div className='line'> </div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div className='type'>
              {type === 'Для населення' && <img src="/img/naselennya-ic.svg" alt="nas-ic" />}
              {type}</div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TitleBlock