
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

const ElectroService = () => {

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
        <TitleBlock title={'Електро- безпека'}></TitleBlock>
        <Container className="page__container">
          <Row className="page__inner">

            <Row>
              <Col md={6} className="clitarif-attention-red">
                <p>
                  Якщо Ви помітили обірвані проводи лінії електропередачі, відчинені двері трансформаторних підстанцій, або як сторонні особи проникають в приміщення електроустановок чи піднімаються на опори, або інші факти електронебезпеки необхідно терміново повідомити ТОВ «ЛЕЗ Бізнес»  за телефоном: +38 (097) 259 55 99 або на електронну пошту: lez.business.ua@gmail.com
                </p>
                <p>
                  Ваше повідомлення буде терміново надіслано відповідному оператору системи розподілу та службі порятунку (пожежна охорона) — 101 для вжиття відповідних заходів.
                </p>
              </Col>
            </Row>

            <Row>
              <Col md={6} className="clitarif-attention">
                {/* <h4>Увага!</h4> */}
                <p> Повідомити про електронебезпеку можна також безпосередньо відповідного оператора системи розподілу за телефонами, які зазначені нижче або службу порятунку (пожежну охорону) за телефоном -  101
                </p>
              </Col>
            </Row>



            <Row>
              <Col>
                <div className='line' style={{ marginBottom: "30px" }}></div>
                <div className="content" style={{ fontSize: "48px", fontWeight: "800", lineHeight: "56px", marginBottom: "50px", maxWidth: '700px' }}>
                  Пам’ятайте, що на вулиці електрика майже завжди поруч і контакт із нею може закінчитись трагічно!
                </div>
              </Col>
            </Row>

            {/* <Row>
              <Col md={6} className="clitarif-attention">
                <h4>Зверніть увагу!</h4>
                <p> У будь-якому віці та будь-якому контакті з електроенергію життєво необхідно дбати про особисту безпеку, дотримуватись правил безпеки не лише самому, а й застерігати інших.
                  Пам’ятайте, що на вулиці електрика майже завжди поруч і контакт із нею може закінчитись трагічно!
                </p>
              </Col>
            </Row> */}

            <Row>
              <Col>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">01</p>
                  <p className="styleText">Заборонено підніматись на опори ліній електропередачі, відчиняти двері і проникати в приміщення електроустановок, втручатись в їхню роботу, накидати чи наближати до струмопровідних частин сторонні предмети.</p>
                </div>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">02</p>
                  <p className="styleText">Заборонено рибалити, розпалювати вогнища, спалювати суху траву, вилазити на дерева поблизу повітряних ліній електропередачі та електрообладнання, діставати будь-які предмети, що застрягли між проводами.</p>
                </div>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">03</p>
                  <p className="styleText">Заборонено садити дерева, складати дрова чи інші легкозаймисті матеріали під проводами повітряних ліній електропередачі.</p>
                </div>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">04</p>
                  <p className="styleText">Заборонено самостійно зрізати гілки і дерева, які можуть впасти на проводи повітряних ліній електропередачі.</p>
                </div>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">05</p>
                  <p className="styleText">Заборонено проводити земляні роботи в охоронних зонах кабельних ліній.</p>
                </div>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">06</p>
                  <p className="styleText">Заборонено проїжджати машинами і механізмами, що мають загальну висоту більше 4,5 метра, під проводами ліній електропередачі.</p>
                </div>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">07</p>
                  <p className="styleText">Заборонено підходити до обірваного дроту повітряної лінії, який лежить на землі чи звисає з опори, ближче, ніж на 8 м. Якщо з тих чи інших причин людина опинилась ближче, ніж на 8 метрів до обірваного проводу, необхідно відходити на безпечну відстань, переміщуючи ступні ніг по землі і не відриваючи їх одну від одної.</p>
                </div>

                {/* <p className="styleText" style={{ color: "#EBC74D" }}>
                  Якщо Ви помітили обірвані проводи лінії електропередачі, відчинені двері трансформаторних підстанцій, або як сторонні особи проникають в приміщення електроустановок чи піднімаються на опори, необхідно терміново повідомити відповідного оператора системи розподілу.
                </p> */}
              </Col>
            </Row>

            <Row>
              <Col>
                <div className='line' style={{ marginBottom: "30px" }}></div>
                <div className="content" style={{ fontSize: "48px", fontWeight: "800", lineHeight: "56px", marginBottom: "50px" }}>
                  Вдома правила безпеки <br />
                  не менш актуальні!
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">01</p>
                  <p className="styleText">Заборонено доторкатися до дротів, ізоляція яких ушкоджена, користуватись зіпсованими вимикачами, розетками та вилками; витягати за шнур вилку з розетки; вставляти в розетку сторонні предмети.</p>
                </div>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">02</p>
                  <p className="styleText">Не залишайте ввімкненими в мережу електроприлади, коли ними не користуєтесь або ідете з дому. Може статись коротке замикання, і, як наслідок — пожежа!</p>
                </div>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">03</p>
                  <p className="styleText">Заборонено витирати електроприлади, розетки та вимикачі мокрою чи вологою ганчіркою, доторкатись до електроприладів мокрими руками, коли вони ввімкнені в електромережу.</p>
                </div>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">04</p>
                  <p className="styleText">Не затискайте електропроводи дверима, віконними рамами; необхідно стежити, щоб дроти не потрапляли під ніжки столів та стільців; не можна прикріпляти електропровід до труб опалення, водопровідних, каналізаційних мереж та що-небудь вішати на електропроводку. Адже ізоляція проводу може пошкодитись.</p>
                </div>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">05</p>
                  <p className="styleText">Необхідно чітко дотримуватись інструкції, коли користуйтесь електроприладами, а ремонтувати їх можуть виключно фахівці!</p>
                </div>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">06</p>
                  <p className="styleText">Не можна застосовувати домашні електроприлади в сирих приміщеннях.</p>
                </div>
                <div className="styleIt" style={{ display: "flex" }}>
                  <p className="styleNum">07</p>
                  <p className="styleText">Перша дія, яку потрібно зробити, коли помітили, що з приладу йде дим, видно іскринки чи чути запах плавленої пластмаси — це вимкнути прилад з електромережі. Якщо біля розетки горить, і неможливо вимкнути, то потрібно відключити вимикач — він розташований біля лічильника.</p>
                </div>
              </Col>
            </Row>
            {/* <Row>
              <Col md={5} className="clitarif-attention">
                <h4>Запам’ятайте телефон <br />
                  служба порятунку</h4>
                <p style={{ marginBottom: "25px" }}>пожежна охорона</p>
                <p style={{ color: "#fff", fontSize: "64px", fontWeight: "799" }}> 101
                </p>
              </Col>
            </Row> */}
            <Row>
              <Col>
                <div className='line' style={{ marginBottom: "30px" }}></div>
                {/* <div className="content" style={{ fontSize: "48px", fontWeight: "800", lineHeight: "56px", marginBottom: "50px" }}>
                  Телефони для <br />
                  зв’язку
                </div> */}
                <p style={{ marginBottom: "30px", color: "#949494", fontSize: '24px', fontWeight: '700' }}>
                Оператори системи розподілу:
                </p>
                <ul className="styleList" style={{ marginBottom: "30px" }}>
                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПрАТ </span> «Львівобленерго» —  0 800 30 15 68</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>АТ </span> «Укрзалізниця» — 0 800 50 31 11</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ДП </span> «Регіональні електричні мережі» західна філія — +380 33 444 02 68</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ВАТ </span>«Тернопільобленерго» — 0 800 50 90 40</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>АТ </span>«ДТЕК Дніпровські електромережі» — +380 56 790 99 00</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>АТ </span>«Харківобленерго» — +380 57 342 44 13</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПАТ </span>«Полтаваобленерго» кол-центр — 0 800 30 50 35</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>АТ </span>«Чернігівобленерго» — 0 800 21 03 10</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПрАТ </span>«Рівнеобленерго» — +380 362 69 42 98</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПАТ </span>«Вінницяобленерго» — 0 800 21 72 17</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>АТ </span> «Чернівціобленерго» — +380 372 58 49 80</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПАТ ДТЕК </span>«Київські електромережі» — 1588</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПрАТ </span>«Київобленерго» — +380 44 459 07 40</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>АТ </span>«Херсонобленерго» —  055 248 06 20</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>АТ </span>«Житомиробленерго» — 0 800 30 92 82</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>АТ </span>«Миколаївобленерго» — 0 800 50 40 01</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПрАТ </span>«ПЕЕМ «ЦЕК» — 0 800 30 00 15</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПрАТ </span>«Закарпаттяобленерго» — 0 800 50 16 20</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПАТ </span>«Черкасиобленерго» — +380 472 33 87 87</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПАТ </span>«Сумиобленерго» — 0 800 30 02 47</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПрАТ </span>«Кіровоградобленерго» — 0 800 50 11 48</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>АТ </span>«ДТЕК ДОНЕЦЬКІ ЕЛЕКТРОМЕРЕЖІ» — 0 800 50 04 73</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПАТ </span>«Запоріжжяобленерго» — 0 800 30 45 02</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ПАТ </span>«Волиньобленерго» — 0 800 21 01 31</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>АТ </span>«Одесаобленерго» — +380 48 705 90 90</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>АТ </span>«Хмельницькобленерго» — 0 800 50 50 62</li>

                  <li style={{ marginBottom: "10px" }}><span style={{ color: "#949494" }}>ТОВ </span>«Нафтогаз Тепло» — м. Новояворівськ; +380 63 308 63 67; м. Новий Розділ +380 67 478 16 01</li>
                </ul>
              </Col>
            </Row>




          </Row>
        </Container>
        {/* <SliderNews /> */}
      </section>
  )
}

export default ElectroService