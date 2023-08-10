import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import { Keyboard, Pagination, Navigation } from "swiper"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HomeServiceSlide from "../components/HomeSlider/HomeServiceSlide";
// import Footer from "../components/Footer/Footer";
import { useState } from "react";
import MainSlide from "../components/HomeSlider/MainSlide";
import AboutSlide from "../components/HomeSlider/AboutSlide";
// import DirectionSlide from "../components/HomeSlider/DirectionSlide";
// import AboutVideoSlide from "../components/HomeSlider/AboutVideoSlide";
import { useOutletContext } from "react-router-dom";

function Home() {

  const [display, SetDisplay] = useState('block');
  const [, setSwiperInstance] = useOutletContext();


  const hanleActive = (isActive) => {
    return isActive ? SetDisplay('block') : SetDisplay('none');
  }

  function renderPagination(index, className) {
    return '<div class="' + className + '"></div>';
  }

  return (
    <div className="home">
      <Container className="slider-home">
        <Row>
          <Col md={12}>
            <Swiper
              slidesPerView={1}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              initialSlide={1}
              autoHeight={true}
              centeredSlides={false}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              // pagination={
              //   {
              //     el: '[data-slider-dots]',
              //     type: "bullets",
              //     clickable: true,
              //     bulletClass: "dot",
              //     bulletActiveClass: "dot_active",
              //     renderBullet: renderPagination,
              //   }}
              navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
              }}
              modules={[Keyboard, Pagination, Navigation]}
              className="slider-home-swiper slider-bg"
            >

              {/* company slide list --------> */}
              {/* <SwiperSlide>
                <HomeServiceSlide pageType={'company'} />
              </SwiperSlide> */}
              {/* <SwiperSlide>
                <AboutVideoSlide embedId={'M7z8-UVW5co'} />
              </SwiperSlide>
              <SwiperSlide>
                <DirectionSlide />
              </SwiperSlide> */}
              {/* <SwiperSlide>
                <AboutSlide />
              </SwiperSlide> */}
              {/* -------------- company slide list  */}

              <SwiperSlide className="main-slide">
                <MainSlide
                  handleActive={hanleActive}
                />
              </SwiperSlide>

              {/* client slide list --------> */}
              {/* <SwiperSlide>
                <AboutSlide />
              </SwiperSlide> */}

              {/* <SwiperSlide>
                <DirectionSlide />
              </SwiperSlide>
              <SwiperSlide>
                <AboutVideoSlide embedId={'M7z8-UVW5co'} />
              </SwiperSlide> */}
              {/* <SwiperSlide>
                <HomeServiceSlide pageType={'clients'} />
              </SwiperSlide> */}
              {/* -------------- client slide list  */}

            </Swiper>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="view-arrows" style={{ 'display': display === 'none' ? 'flex' : 'none' }}>
              <div className="image-swiper-button-prev">
                <img src='/img/arrow-left-main.svg' alt="" />
              </div>

              <div className="image-swiper-button-next" >
                <img src='/img/arrow-right-main.svg' alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="dots" data-slider-dots></div>
      <div className="left-view" style={{ 'display': display }}>
        <div className="image-swiper-button-prev">
          <img src='/img/arrow-left-main-gray.svg' alt="" />
        </div>
      </div>
      <div className="right-view" style={{ 'display': display }}>
        <div className="image-swiper-button-next" >
          <img src='/img/arrow-right-main-gray.svg' alt="" />
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Home