import TitleBlock from "../components/TitleBlock";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import NewsItem from "../components/News/NewsItem";
import { getNewsList } from "../Axios/getNews";
import * as dayjs from 'dayjs';
import Loader from "../components/Loader";
import PaginationLez from "../components/PaginationLez";
import { useSearchParams } from "react-router-dom";
import { getLastImg, setDeafaultImg } from "../utils/news";

const News = () => {

  const [newsList, SetNewsList] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [totalPage, SetTotalPage] = useState(0);
  let [searchParams, setSearchParams] = useSearchParams({ page: '1' });

  function initTotalPages(page) {
    const url = new URL("https://" + page)
    const params = new URLSearchParams(url.search)
    const total = parseInt(params.get('page'));
    SetTotalPage(total);
  }

  const handleChangePage = (currentPage) => {
    setSearchParams({ page: currentPage });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    let active = false;
    const pagecurrent = parseInt(searchParams.get('page'));
    getNewsList(SetLoading, pagecurrent).then((response) => {
      const data = response['hydra:member'];
      const view = response['hydra:view'];
      initTotalPages(view['hydra:last']);

      const newData = data.map((item) => {
        return {
          id: item.id,
          idImg: item.id.toString().slice(-1),
          title: item.name,
          time: dayjs(item.date).format('DD.MM.YYYY'),
          imglink: item.imgLink || getLastImg(item.newsFull),
        };
      })
      if (!active) {
        SetNewsList(newData);
      }
    });

    return () => {
      active = true;
    };

  }, [searchParams])

  return (
    <>
      <Container className="news">
        <TitleBlock title={'Наші новини'} />
        {
          loading ? <Loader />
            : <Row>
              {newsList.map((news) => {
                return <Col md={4} key={news.id} className="news__inner">
                  <NewsItem
                    id={news.id}
                    path={news?.imglink || setDeafaultImg(news.idImg).path}
                    time={news.time}
                    title={news.title} />
                </Col>
              })}
            </Row>
        }
        <Row>
          {totalPage > 1 &&
            <PaginationLez
              changePage={handleChangePage}
              currentPage={parseInt(searchParams.get('page'))}
              total={totalPage}
            />}
        </Row>
      </Container>
    </>
  )
}

export default News