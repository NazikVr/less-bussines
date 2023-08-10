import { Outlet } from "react-router-dom";
import Offline from '../components/Offline';
import { createRef, useState } from "react";
import Header from "../components/Header";
import Prefooter from "../components/Footer/Prefooter";
import Footer from "../components/Footer/Footer";
import { useTheme } from "../hooks/useTheme";
import { NewPrefooterBlock } from "../components/Footer/NewPrefooterBlock";


const Layout = () => {
  const [sliderInstanse, setSwiperInstance] = useState(null);

  const [online, setOnline] = useState(false);
  const { theme, SetTheme } = useTheme();

  const refFooter = createRef();

  function scrollToFooter() {
    refFooter.current.scrollIntoView();
  }

  function changeSlide(id) {
    if (!sliderInstanse?.destroyed) {
      return sliderInstanse?.slideTo(id);
    }
  }

  if (window.navigator.onLine) {
    if (!online)
      setOnline(true);
  } else {
    if (online)
      setOnline(false);
  }
  window.addEventListener('online', () => {
    if (!online)
      setOnline(true);
  });
  window.addEventListener('offline', () => {
    if (online)
      setOnline(false);
  });
  return (

    <>
      <div className="main-bg">
        <Header sliderContext={sliderInstanse} handleScroll={scrollToFooter} />
        {(!online) ? <Offline /> : ''}
        <Outlet context={[sliderInstanse, setSwiperInstance, theme]} />
        {/* <Prefooter ref={refFooter} /> */}
        <NewPrefooterBlock slide={changeSlide} ref={refFooter} />
        <Footer setTheme={SetTheme} theme={theme} />
      </div>
    </>
  )
};

export default Layout;
