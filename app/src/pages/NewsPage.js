
import TitleBlock from "../components/TitleBlock";
import Container from 'react-bootstrap/Container';
// import SliderNews from "../components/News/SliderNews";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { getNewsItem } from "../Axios/getNews";
import 'react-lazy-load-image-component/src/effects/blur.css';
import * as dayjs from 'dayjs';
import * as DOMPurify from 'dompurify';
import NewsImage from "../components/News/NewsImage";
import Loader from "../components/Loader";
import { clearContent, setDeafaultImg } from "../utils/news";

const NewsItem = () => {
  
const param = useParams();
const [newsItem, SetNewsItem] = useState({});
const [loading, SetLoading] = useState(true);

useEffect (()=>{
    window.scrollTo(0,0);
    let active = false;
    
    getNewsItem(SetLoading,param.id).then((response)=>{
      const newsContent =  clearContent(response.newsFull);
      const newsItem = {
        id: response.id,
        idImg: response.id.toString().slice(-1),
        title: response.name,
        time: dayjs(response.date).format('DD.MM.YYYY'),
        imglink: response.imgLink,
        content: newsContent,
      }
      if(!active) {
        SetNewsItem(newsItem);
      }
    });

    return () => {
      active = true;
    };
    
  },[param.id])

  return (
     <>
     <Container>
      { loading ? <Loader/>  
      : <>
          <Row className="newsline">
              <Col md={6} className="time">
                {newsItem.time}
              </Col>
              <Col md={6} className="text-end count-news">
                Новина {newsItem.id}
              </Col>
              </Row>
            <Row>
                <Col xs={12} className="text-center inner-news-item">
                  <NewsImage path={newsItem?.imglink || setDeafaultImg(newsItem.idImg)?.path} styl = {'news-page-img'}/>
                </Col>
            </Row>
            <Row className="item-news">
                <Col>
                  <TitleBlock subtitle={newsItem.title}></TitleBlock>
                  <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(newsItem.content)}}></div>
                </Col>
            </Row>
        </>
      }
    </Container> 
    {/* <SliderNews/> */}
    </>
  )
}

export default NewsItem