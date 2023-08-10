
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

const Example = () => {

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
        <TitleBlock title={'Приклад – роз’яснення рахунку за електричну енергію'}></TitleBlock>
        <Container className="page__container">
          <Row className="page__inner">
            <Col>
              <div className='line' style={{ marginBottom: "30px" }}></div>
              <div className="content">
                <Link to="https://dev-api-lez.inneti.net/uploads/business/ScoreLE32.pdf" target="_blank" download="ScoreLE32" >
                  Приклад – роз’яснення рахунку за електричну енергію, який отримують юридичні особи та фізичні особи-підприємці.
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center" style={{ marginBottom: "50px" }}>
            <Col sm={8}>
              <div className="video-container">
                {/* Вставте код для вбудовування з YouTube */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dg_J7OQfaA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <SliderNews /> */}
      </section>
  )
}

export default Example