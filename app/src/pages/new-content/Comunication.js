
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

const Comunication = () => {

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
        <TitleBlock title={'Про засоби комунікації'}></TitleBlock>
        <Container className="page__container">
          <Row className="page__inner">
            <Col>
              <div className='line' style={{ marginBottom: "30px" }}></div>
              <div className="content">
                <p>
                  ТОВ «ЛЕЗ Бізнес»
                </p>
                <p>
                <Link to="https://goo.gl/maps/DreQiJcH9t31fyws6" target="_blank">
                  Адреса: 79016, м.Львів, вул. Шевченка Т., 1
                </Link>
                </p>
                <p>
                <Link to="tel:+380972595599">
                Тел.: +38 (097) 259-55-99
                </Link>
                </p>
                <p>
                <Link to="mailto:lez.business.ua@gmail.com">
                Електронна скринька: lez.business.ua@gmail.com
                </Link>
                </p>
                <p>Графік роботи: з понеділка по четвер: з 8:00 до 17:00 год., <br />
                у п’ятницю: з 8:00 до 16:00 год.</p>
                <p>Вихідні: субота та неділя</p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <SliderNews /> */}
      </section>
  )
}

export default Comunication