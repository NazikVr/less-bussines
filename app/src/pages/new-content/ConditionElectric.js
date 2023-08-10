
import TitleBlock from "../../components/TitleBlock";
import Container from 'react-bootstrap/Container';
// import SliderNews from "../../components/News/SliderNews";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react";
import { useOutletContext, useParams } from 'react-router-dom';

import * as DOMPurify from 'dompurify';
import Loader from "../../components/Loader";
import { clearContent } from "../../utils/news";
import { getPage } from "../../Axios/getPage";
import PickTsok from "../../components/PickTsok";

const ConditionElectric = () => {

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
        <TitleBlock title={'Загальні умови електропостачання'}></TitleBlock>
        <Container className="page__container">
          <Row className="page__inner">
            <div className="content">
              <Row>
                <Col>
                  <div className='line' style={{ marginBottom: "30px" }}></div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <p>
                    Постачання електричної енергії споживачу здійснюється, якщо:
                  </p>
                  <div className="styleIt" style={{ display: "flex" }}>
                    <p className="styleNum">01</p>
                    <p className="styleText">Об'єкт споживача підключений до мереж оператора системи у встановленому законодавством порядку;</p>
                  </div>
                  <div className="styleIt" style={{ display: "flex" }}>
                    <p className="styleNum">02</p>
                    <p className="styleText">Електропостачальник за договором з оператором системи отримав доступ до мереж та можливість продажу електричної енергії на території діяльності оператора системи</p>
                  </div>
                  <div className="styleIt" style={{ display: "flex" }}>
                    <p className="styleNum">03</p>
                    <p className="styleText">Споживач є стороною діючих договорів:</p>
                  </div>
                  <Col style={{ marginLeft: "50px" }}>
                    <div className="styleIt" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "20px", height: "3px", backgroundColor: "#EBC74D" }}></div>
                      <p className="styleText">Про надання послуг з розподілу (передачі) електричної енергії, крім випадку здійснення розподілу (передачі) електричної енергії оператором системи до власних електроустановок;</p>
                    </div>
                    <div className="styleIt" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "20px", height: "3px", backgroundColor: "#EBC74D" }}></div>
                      <p className="styleText">Про постачання електричної енергії споживачу або про постачання електричної енергії постачальником універсальних послуг, або про постачання електричної енергії постачальником "останньої надії";</p>
                    </div>
                    <div className="styleIt" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "20px", height: "3px", backgroundColor: "#EBC74D" }}></div>
                      <p className="styleText">Про надання послуг комерційного обліку електричної енергії, крім випадків, коли роль постачальника послуг комерційного обліку виконує оператор системи, до мереж якого приєднаний цей споживач;</p>
                    </div>
                  </Col>
                  <div className="styleIt" style={{ display: "flex" }}>
                    <p className="styleNum">04</p>
                    <p className="styleText">За усіма точками комерційного обліку на об'єкті (об'єктах) споживача, за якими здійснюється (планується) постачання електричної енергії, укладено договір з постачальником послуг комерційного обліку про надання послуг комерційного обліку електричної енергії</p>
                  </div>
                  <div className="styleIt" style={{ display: "flex" }}>
                    <p className="styleNum">05</p>
                    <p className="styleText">Відсутній факт припинення/призупинення постачання електричної енергії або надання послуг з розподілу (передачі) електричної енергії у випадках, передбачених законодавством у сфері енергетики;</p>
                  </div>
                  <div className="styleIt" style={{ display: "flex" }}>
                    <p className="styleNum">06</p>
                    <p className="styleText">Відсутня прострочена заборгованість за договорами про постачання електричної енергії або про надання послуг системи розподілу/передачі.</p>
                  </div>
                  <p>
                    За наявності боргу в розмірі більшому ніж вартість електричної енергії, спожитої протягом
                    двох попередніх місяців, електропостачальник (крім постачальника універсальних послуг
                    та постачальника &quot;останньої надії&quot;) має право розірвати договір про постачання
                    електричної енергії згідно з його умовами, якщо інше не передбачено умовами договору
                    (комерційною пропозицією).
                  </p>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
        {/* <SliderNews /> */}
      </section>
  )
}

export default ConditionElectric