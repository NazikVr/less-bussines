
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

const ClientInfo = () => {

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
        <div className="bg_img"></div>
        <TitleBlock title={'Інформація для клієнтів'}></TitleBlock>
        <Container className="page__container">
          <Row className="page__inner">
            <Row>
              <Col>
                <div className='line' style={{ marginBottom: "30px" }}></div>
                <div className="content" style={{ fontSize: "48px", fontWeight: "800", lineHeight: "56px", marginBottom: "50px" }}>
                  Загальні умови <br />
                  електропостачання
                </div>
              </Col>
            </Row>
            <Row style={{ marginBottom: "50px" }}>
              <Col style={{ maxWidth: "600px", fontSize: "16px" }}>
                <p>
                  Постачання електричної енергії споживачу здійснюється, якщо:
                </p>
                <ol>
                  <li style={{ marginBottom: "10px" }}>
                    Об'єкт споживача підключений до мереж оператора системи у встановленому законодавством порядку;
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Електропостачальник за договором з оператором системи отримав доступ до мереж та можливість продажу електричної енергії на території діяльності оператора системи;
                  </li>
                  <li style={{ marginBottom: "10px" }}>Споживач є стороною діючих договорів:
                    <ul style={{ marginBottom: "10px" }}>
                      <li style={{ marginBottom: "10px" }}>
                        про надання послуг з розподілу (передачі) електричної енергії, крім випадку здійснення розподілу (передачі) електричної енергії оператором системи до власних електроустановок;
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        про постачання електричної енергії споживачу або про постачання електричної енергії постачальником універсальних послуг, або про постачання електричної енергії постачальником "останньої надії";
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        про надання послуг комерційного обліку електричної енергії, крім випадків, коли роль постачальника послуг комерційного обліку виконує оператор системи, до мереж якого приєднаний цей споживач;
                      </li>
                    </ul>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    За усіма точками комерційного обліку на об'єкті (об'єктах) споживача, за якими здійснюється (планується) постачання електричної енергії, укладено договір з постачальником послуг комерційного обліку про надання послуг комерційного обліку електричної енергії;
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Відсутній факт припинення/призупинення постачання електричної енергії або надання послуг з розподілу (передачі) електричної енергії у випадках, передбачених законодавством у сфері енергетики;
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Відсутня прострочена заборгованість за договорами про постачання електричної енергії або про надання послуг системи розподілу/передачі.
                  </li>
                </ol>
                <p style={{ fontWeight: "600" }} >
                  За наявності боргу в розмірі більшому ніж вартість електричної енергії, спожитої протягом двох попередніх місяців, електропостачальник (крім постачальника універсальних послуг та постачальника "останньої надії") має право розірвати договір про постачання електричної енергії згідно з його умовами, якщо інше не передбачено умовами договору (комерційною пропозицією).
                </p>
              </Col>
            </Row>
            <Row style={{ marginBottom: "50px" }}>
              <Col>
                <div className='line' style={{ marginBottom: "30px" }}></div>
                <div className="content" style={{ fontSize: "48px", fontWeight: "800", lineHeight: "56px", marginBottom: "50px" }}>
                  Показники якості надання послуг з електропостачання, порядок та розмір компенсації за недотримання показників якості електропостачання
                </div>
              </Col>
            </Row>
            <Row style={{ marginBottom: "50px" }}>
              <Col>
                <ul>
                  <li style={{ marginBottom: "20px", fontSize: "20px" }}>
                    <Link to="https://zakon.rada.gov.ua/laws/show/v0375874-18#n281" target="_blank">
                      Cтандарти якості надання послуг електропостачальника;
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px", fontSize: "20px" }}>
                    <Link to="https://zakon.rada.gov.ua/laws/show/v0375874-18#n281" target="_blank">
                      Порядок компенсації за недотримання показників якості електропостачання</Link>
                  </li>
                  <li style={{ marginBottom: "20px", fontSize: "20px" }}>
                    <Link to="https://zakon.rada.gov.ua/laws/show/v0375874-18#Text:~:text=%D0%A0%D0%9E%D0%97%D0%9C%D0%86%D0%A0%20%D0%9A%D0%9E%D0%9C%D0%9F%D0%95%D0%9D%D0%A1%D0%90%D0%A6%D0%86%D0%87%0A%D0%B7%D0%B0%20%D0%BD%D0%B5%D0%B4%D0%BE%D1%82%D1%80%D0%B8%D0%BC%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%B3%D0%B0%D1%80%D0%B0%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%85%20%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D1%96%D0%B2%20%D1%8F%D0%BA%D0%BE%D1%81%D1%82%D1%96%20%D0%BD%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BF%D0%BE%D1%81%D0%BB%D1%83%D0%B3%20%D0%9E%D0%A1%D0%A0" target="_blank">
                      Розмір компенсації за недотримання гарантованих стандартів якості надання послуг електропостачальника;
                    </Link>
                  </li>
                  <li style={{ marginBottom: "20px", fontSize: "20px" }}>
                    <Link to="https://zakon.rada.gov.ua/laws/show/v0375874-18#Text:~:text=5.%20%D0%97%D0%B2%D1%96%D0%BB%D1%8C%D0%BD%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B0%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B8%20%D0%B0%D0%B1%D0%BE%20%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B0%20%D0%B2%D1%96%D0%B4%20%D0%BE%D0%B1%D0%BE%D0%B2%E2%80%99%D1%8F%D0%B7%D0%BA%D1%83%20%D0%BD%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B5%D0%BD%D1%81%D0%B0%D1%86%D1%96%D1%97" target="_blank">
                      Компенсація за недотримання гарантованих стандартів якості надання послуг електропостачальником не надається у випадках;
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row style={{ marginBottom: "50px" }}>
              <Col>
                <div className='line' style={{ marginBottom: "30px" }}></div>
                <div className="content" style={{ fontSize: "48px", fontWeight: "800", lineHeight: "56px", marginBottom: "50px" }}>
                  Порядок зміни електропостачальника
                </div>
              </Col>
            </Row>
            <Row style={{ marginBottom: "50px", fontSize: "20px" }}>
              <Col>
                <Link to="https://www.nerc.gov.ua/sferi-diyalnosti/elektroenergiya/zmina-elektropostachalnika/zmina-postachalnika-elektrichnoyi-energiyi" target="_blank">
                  Порядок зміни електропостачальника
                </Link>
              </Col>
            </Row>
            <Row style={{ marginBottom: "50px" }}>
              <Col>
                <div className='line' style={{ marginBottom: "30px" }}></div>
                <div className="content" style={{ fontSize: "48px", fontWeight: "800", lineHeight: "56px", marginBottom: "50px" }}>
                  Загальний порядок зняття показів засобів вимірювання
                </div>
              </Col>
            </Row>
            <Row style={{ marginBottom: "50px", fontSize: "20px" }}>
              <Col>
                <Link to="https://zakon.rada.gov.ua/laws/show/v0311874-18#n1899:~:text=8.6.%20%D0%97%D1%87%D0%B8%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D1%96%D0%B2%20%D0%BB%D1%96%D1%87%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D1%96%D0%B2%2C%20%D0%B2%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%85%20%D1%83%20%D1%81%D0%BF%D0%BE%D0%B6%D0%B8%D0%B2%D0%B0%D1%87%D1%96%D0%B2" target="_blank">
                  Загальний порядок зняття показів засобів вимірювання
                </Link>
              </Col>
            </Row>
            <Row style={{ marginBottom: "50px" }}>
              <Col>
                <div className='line' style={{ marginBottom: "30px" }}></div>
                <div className="content" style={{ fontSize: "48px", fontWeight: "800", lineHeight: "56px", marginBottom: "50px" }}>
                  Загальний порядок оплати спожитої електричної енергії
                </div>
              </Col>
            </Row>
            <Row style={{ marginBottom: "50px" }}>
              <Col>
                <p>
                  Розрахунки між споживачем та електропостачальником (іншими учасниками роздрібного ринку, якщо вони беруть участь у розрахунках) здійснюються згідно з даними, отриманими від адміністратора комерційного обліку в порядку, передбаченому&nbsp;
                  <Link to="https://zakon.rada.gov.ua/laws/show/v0311874-18#n9" target="_blank">
                    Кодексом комерційного обліку
                  </Link>
                  , про обсяги поставленої, розподіленої (переданої) та купленої електричної енергії. Плата за спожиту протягом розрахункового періоду електричну енергію вноситься не пізніше 20 числа наступного місяця, якщо договором не встановлено іншого терміну.
                </p>
                <ul>
                  <li style={{ marginBottom: "10px" }}>
                    Рахунок за спожиту електричну енергію оплачується:
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    протягом 5 робочих днів від дня отримання рахунка непобутовим споживачем;
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    протягом 10 робочих днів від дня отримання рахунка побутовим споживачем;
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    в інший термін, передбачений договором, але не пізніше 20 календарного дня після закінчення розрахункового періоду.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Для здійснення розрахунків за фактично спожиту електричну енергію електропостачальник має сформувати та виставити споживачу платіжний документ у паперовій або електронній формі (у випадку згоди споживача на отримання електронного платіжного документа), на підставі даних комерційного обліку, отриманих у порядку, передбаченому&nbsp;
                    <Link to="https://zakon.rada.gov.ua/laws/show/v0311874-18#n9" target="_blank">
                      Кодексом комерційного обліку
                    </Link>
                    .
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Платіжний документ (рахунок) формується електропостачальником за обсяг електричної енергії згідно з обраною комерційною пропозицією до договору про постачання електричної енергії споживачу.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Платіжні документи (рахунки) надаються електропостачальниками споживачам безкоштовно.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Платіжні документи (рахунки) на оплату надаються споживачам у відповідних структурних підрозділах електропостачальника, через персональну сторінку споживача на вебсайті електропостачальника або електронною поштою, факсимільним зв'язком, поштовим зв'язком, кур'єром чи іншими способами з використанням інформаційних технологій у системі електронного документообігу у порядку, передбаченому договором про постачання електричної енергії споживачу.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Платіжний документ (рахунок) має надаватися споживачу в терміни та спосіб, визначені відповідно до обраної споживачем комерційної пропозиції або умов договору.
                  </li>
                </ul>

                <Link style={{ fontSize: "20px" }} to="https://zakon.rada.gov.ua/laws/show/v0312874-18#n2991:~:text=VII.%20%D0%A3%D0%BC%D0%BE%D0%B2%D0%B8%20%D1%82%D0%B0%20%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA%20%D0%BF%D1%80%D0%B8%D0%BF%D0%B8%D0%BD%D0%B5%D0%BD%D0%BD%D1%8F%20%D1%82%D0%B0%20%D0%B2%D1%96%D0%B4%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D1%87%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%BD%D0%BE%D1%97%20%D0%B5%D0%BD%D0%B5%D1%80%D0%B3%D1%96%D1%97%20%D1%81%D0%BF%D0%BE%D0%B6%D0%B8%D0%B2%D0%B0%D1%87%D1%83" target="_blank">
                  Порядок відключення/відновлення електроживлення споживача
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className='line' style={{ marginBottom: "30px" }}></div>
                <div className="content" style={{ fontSize: "48px", fontWeight: "800", lineHeight: "56px", marginBottom: "50px" }}>
                  Переваги ефективного кінцевого використання енергії споживачами та порад щодо підвищення енергоефективності при споживанні електроенергії
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  На сьогоднішній день ми задуємуємось над енергоефективністю тоді, коли отримуємо рахунки на оплату за електроенергію.
                </p>
                <p>
                  Пропонуємо Вашій увазі 10 правил для того щоб зменшити витрати за електроенергію та здійснити свій внесок у збереження довкілля для наших нащадків.
                </p>
                <ol>
                  <li style={{ marginBottom: "10px" }}>
                    Вимикайте з електромережі електроприлади якими не користуєтесь, для прикладу: телевізори в режимі очікування споживають близько 9 кВт▪год на місяць, DVD-плеєри — 4 кВт▪год, комп’ютери — 3,6 кВт▪год.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Замініть звичайні жарівки на енергозберігаючі.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Користуйтесь електричними приладами виключно по інструкції.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Перейдіть на зонний тариф: використовуйте нічний тариф з 23:00 до 7:00 для побутових потреб. Ваші витрати за спожиту в нічний час електроенергію зменшаться на 50%.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Якщо користуєтесь електрочайником змініть його на традиційний або кип"ятіть стільки води скільки потрібно.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Максимально використовуйте денне світло - заберіть об"ємні вазони з підвіконь або речі які заступають світло.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Замініть електричні прилади на нові енергоощадні ( класу А, А+, або А++).
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Утепліть дах будинку і стіни.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Пофарбуйте стіни і стелі кімнат у білий колір. Біла стіна відбиває 80% променів. Для порівняння: темно-зелена поверхня відбиває тільки 15% світла, чорна — 9%.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Встановіть світлорегулятори та датчики, які автоматично вмикають освітлення при появі людини—  таким чином ви зменшите споживання електричної енергії.
                  </li>
                </ol>
                <Link style={{ fontSize: "20px" }} to="https://zakon.rada.gov.ua/laws/show/v0312874-18#n2991:~:text=5.5.%20%D0%9F%D1%80%D0%B0%D0%B2%D0%B0%20%D1%82%D0%B0%20%D0%BE%D0%B1%D0%BE%D0%B2%27%D1%8F%D0%B7%D0%BA%D0%B8%20%D1%81%D0%BF%D0%BE%D0%B6%D0%B8%D0%B2%D0%B0%D1%87%D0%B0" target="_blank">
                  Права споживачів
                </Link>
              </Col>
            </Row>
          </Row>
        </Container>
        {/* <SliderNews /> */}
      </section>
  )
}

export default ClientInfo