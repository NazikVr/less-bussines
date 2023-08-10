import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleBlock from "../TitleBlock";
import { Link } from 'react-router-dom';

const HomeServiceSlide = ({ pageType }) => {

  const items = [
    { _id: 1, img: '/img/services-slide-callcntr.svg', descr: 'Кол-центр', link: "/page/callcenter", all: true },
    { _id: 2, img: '/img/services-slide-ikc.svg', descr: 'Інформаційно-консультаційний центр', link: "/page/ikc", all: true },
    { _id: 3, img: '/img/services-slide-tsok.svg', descr: 'Центри обслуговування клієнтів', link: "/center-obslug", all: false },
    { _id: 4, img: '/img/services-slide-online.svg', descr: 'Онлайн-звернення ', link: "/application", all: false },
    { _id: 5, img: '/img/services-slide-personal.svg', descr: 'Персональний кабінет', link: "https://my.lez.com.ua/", all: true, target: "_blank" },
    { _id: 6, img: '/img/services-slide-pay.svg', descr: 'Оплата онлайн', link: "/payment", all: false },
  ]

  return (
    <>
      <Row>
        <Col>
          <TitleBlock subtitle={`Зручні сервіси`} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className='slide-servises-title'>Для наших клієнтів діють зручні сервіси:</h3>
        </Col>
      </Row>
      <Row className='slide-servises'>
        {items.map((item, index) => {
          return <Col key={item._id} md={4} className={"slide-servise-item text-center"}>
            <Link to={!item.all ? pageType + item.link : item.link} className={"slide-servise-link"} target={item?.target}>
              <img src={item.img} alt="" />
              <p>{item.descr}</p>
            </Link>
          </Col>
        })}

      </Row>
      <Row className='media'>
        <Col md={4}><p className='slide-servise-invite'>Завітайте до нас <br /> у соціальних мережах</p></Col>
        <Col md={3} className='social'>
          <Link to={"https://www.facebook.com/LvivEnergoZbut"} target={'_blank'}>
            <img src='/img/fb.svg' alt="" className='social__img' />
            Сторінка у Facebook
          </Link>
          <Link to={"https://www.youtube.com/@lvivenergozbut"} target={'_blank'}>
            <img src='/img/youtube.svg' alt="" className='social__img' />
            Сторінка у Youtube
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default HomeServiceSlide