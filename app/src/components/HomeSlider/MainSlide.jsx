import React, { useEffect } from 'react'
import { useSwiperSlide } from 'swiper/react';

function MainSlide({ handleActive }) {

  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    handleActive(swiperSlide.isActive)
  }, [swiperSlide.isActive, handleActive])

  return (
    <>
      <h1>
        <span className="main-slide__electro">
          Електроенергія<br />
          і природний газ  <br />
        </span>
        <span>для </span>
        <span className="main-slide__electro">юридичних </span>
        <span>клієнтів</span>
      </h1>
    </>
  )
}

export default MainSlide
