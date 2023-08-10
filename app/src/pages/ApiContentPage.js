
import TitleBlock from "../components/TitleBlock";
import Container from 'react-bootstrap/Container';
// import SliderNews from "../components/News/SliderNews";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect} from "react";
import { useOutletContext, useParams } from 'react-router-dom';

import * as DOMPurify from 'dompurify';
import Loader from "../components/Loader";
import { clearContent } from "../utils/news";
import { getPage } from "../Axios/getPage";
import PickTsok from "../components/PickTsok";

const ApiContentPage = () => {
  
const param = useParams();
const [pageItem, SetPageItem] = useState({});
const [loading, SetLoading] = useState(true);
const [,,theme] = useOutletContext();

useEffect (()=>{
    window.scrollTo(0,0);
    let active = false;

    getPage(SetLoading, param.id).then((response)=>{
      const [data] = response['hydra:member'];
      const pageContent =  clearContent(data.content);
      const pageItem = {...data, content: pageContent}

      if(!active) {
        SetPageItem(pageItem);
      }
    });

    return () => {
      active = true;
    };
    
  },[param.id])

  return (
    loading 
    ? <Loader/>
    : <section className="page">
        {theme === 'light' && <div className="mont-block"></div> }
        <TitleBlock title={pageItem.name}></TitleBlock>
        <Container className="page__container">
           <Row className="page__inner">
               <Col>
                 <div className='line' style={{marginBottom:"30px"}}></div>
                 <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(pageItem.content)}}></div>
               </Col>
           </Row>
        </Container>
        {param.id === "info" && 
        <PickTsok/> 
        } 
        {/* <SliderNews/> */}
    </section> 
  )
}

export default ApiContentPage