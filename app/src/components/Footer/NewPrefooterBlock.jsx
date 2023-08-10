import React from 'react'
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

export const NewPrefooterBlock = ({ slide }) => {
  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <Container id="footer">
      <Row className="prefooter" style={{ marginBottom: "50px" }}>
        <Row>
          <Col xs={12}>
            <h3 className="footer-head">{"ЛЕЗ Бізнес"}</h3>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h3 className="both" >
              <img src="/img/lamp-w.svg" alt="" width="20px" height="20px" style={{ marginRight: "5px" }} />
              Електроенергія</h3>
            <Col xs={4}>
              <Link to="/condition-electric" className="btn-white" target="_blank">
                Постачання
              </Link>
            </Col>
            <Col md={12}>
              <div className="myLine"></div>
            </Col>
            <Col className="prefooter">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Link to="/condition-electric" target="_blank">
                    Загальні умови електропостачання
                  </Link>
                </li>
                <li>
                  <Link to="/client-info" target="_blank">
                    Інформація для клієнтів
                  </Link>
                </li>
                <li>
                  <Link to="/example" target="_blank">
                    Приклад роз’яснення рахунку за електричну енергію
                  </Link>
                </li>
                <li>
                  <Link to="/lawmaking" target="_blank">
                    Нормативні документи (Постачання природного газу)
                  </Link>
                </li>
                <li>
                  <Link to="/electro-service" target="_blank">
                    Електробезпека
                  </Link>
                </li>
                <li>
                  <Link to="/submission-procedure" target="_blank">
                    Порядок подання та розгляду електропостачальником звернень, скарг, претензій
                  </Link>
                </li>
              </ul>
            </Col>
          </Col>


          <Col md={6}>
            <h3 className="both" ><img src="/img/gas-w.svg" alt="" width="20px" height="20px" /> Природний газ</h3>
            <Col xs={4} className="text-end">
              <Col xs={12} className="my-2 foot-info">
                <Link to="/gas" className="btn-white" target="_blank">
                  Постачання
                </Link>
              </Col>
            </Col>
            <Col md={12}>
              <div className="myLine"></div>
            </Col>
            <Col>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Link to="/gas" target="_blank">
                    Постачання газу
                  </Link>
                </li>
              </ul>
            </Col>
          </Col>
        </Row>
      </Row>
      <Row className="prefooter" style={{ marginBottom: "20px" }}>
        <Col xs={12}>
          <ul style={{ display: "flex", justifyContent: "center" }}>
            {/* <li style={{ padding: "10px 25px", borderLeft: "1px solid #484C50" }}>
              <Link onClick={() => (slide(0), scrollToTop())}>
                Про нас
              </Link>
            </li> */}
            <li style={{ padding: "10px 25px", borderLeft: "1px solid #484C50", borderRight: "1px solid #484C50" }}>
              <Link to="/comunication" target="_blank">
                Контакти
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container >

  )
}
