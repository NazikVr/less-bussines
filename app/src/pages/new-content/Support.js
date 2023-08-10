
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

const Support = () => {

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
        <TitleBlock title={'З в е р н е н н я'}></TitleBlock>
        <Container className="page__container">
          <Row className="page__inner">
            <Col>
              <div className='line' style={{ marginBottom: "30px" }}></div>
              <div className="content">
                <Link to="https://docs.google.com/document/d/1lf4UDdJsXLwPtIawCD_zvq_nGr2CuMUq/edit" className="btn-yellow-white" target="_blank">Приклад Звернення <br />
                  (зауваження, пропозиції, заява, скарга, прохання, вимога, претензія)
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <SliderNews /> */}
      </section >
  )
}

export default Support