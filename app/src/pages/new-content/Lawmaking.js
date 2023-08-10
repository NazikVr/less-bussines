
import TitleBlock from "../../components/TitleBlock";
import Container from 'react-bootstrap/Container';
// import SliderNews from "../../components/News/SliderNews";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react";
import { Link, useOutletContext, useParams } from 'react-router-dom';

import * as DOMPurify from 'dompurify';
import Loader from "../../components/Loader";
import { clearContent } from "../../utils/news";
import { getPage } from "../../Axios/getPage";
import PickTsok from "../../components/PickTsok";

const Lawmaking = () => {

  const param = useParams();
  const [pageItem, SetPageItem] = useState({});
  const [loading, SetLoading] = useState(false);
  const [, , theme] = useOutletContext();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   let active = false;

  //   getPage(SetLoading, param.id).then((response) => {
  //     const [data] = response['hydra:member'];
  //     const pageContent = clearContent(data.content);
  //     const pageItem = { ...data, content: pageContent }

  //     if (!active) {
  //       SetPageItem(pageItem);
  //     }
  //   });

  //   return () => {
  //     active = true;
  //   };

  // }, [param.id])

  return (
    loading
      ? <Loader />
      : <section className="page">
        {theme === 'light' && <div className="mont-block"></div>}
        <div  className="bg_img"></div>
        <TitleBlock title={'Нормативні документи'}></TitleBlock>
        <Container className="page__container">
          <Row className="page__inner">
            <Col>
              <div className="content">
                <Row>
                  <Col>
                    <div className='line' style={{ marginBottom: "30px" }}></div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/2019-19#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>1. </span> ЗУ «Про ринок електричної енергії»
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/1023-12#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>2. </span>ЗУ «Про захист прав споживачів»
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/393/96-%D0%B2%D1%80#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>3. </span>ЗУ «Про звернення громадян»
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/2297-17#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>4. </span>ЗУ «Про захист персональних даних»
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/2657-12#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>5. </span>ЗУ «Про інформацію»
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/2939-17#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>6. </span>ЗУ «Про доступ до публічної інформації»
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/1540-19#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>7. </span>ЗУ «Про національну комісію, що здійснює державне регулювання у сферах енергетики та комунальних послуг»
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/v0310874-18#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>8. </span>Кодекс системи розподілу
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/v0309874-18#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>9. </span>Кодекс системи передачі
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/v0311874-18#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>10. </span>Кодекс комерційного обліку електричної енергії
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/v1469874-17#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>11. </span>Ліцензійні умови провадження господарської діяльності з постачання електричної енергії споживачу
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/v0312874-18#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>12. </span>Правила роздрібного ринку електричної енергії
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/v0307874-18#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>13. </span>Правила ринку
                        </Link>
                      </p>
                    </div>
                    <div className="styleIt" style={{ display: "flex" }}>
                      <p className="styleText">
                        <Link to="https://zakon.rada.gov.ua/laws/show/v0375874-18#Text" target="_blank" style={{ maxWidth: "600px", fontSize: "16px" }}>
                          <span style={{ color: "#ebc74d" }}>14. </span>Порядок забезпечення стандартів якості електропостачання та надання компенсації споживачам за їх недотримання
                        </Link>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <SliderNews /> */}
      </section >
  )
}

export default Lawmaking