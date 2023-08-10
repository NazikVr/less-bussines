import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationElement from "./Navigation/NavigationElement";
import { createRef, useRef } from 'react';


const Header = ({ sliderContext, handleScroll }) => {

  const navigationCompany = createRef();
  const navigationClient = createRef();
  const refHeader = useRef(null);
  const pad = useRef(null);

  function changeSlide(id) {
    if (!sliderContext?.destroyed) {
      return sliderContext?.slideTo(id);
    }
  }


  function addClasses(ref, className) {
    if (className === 'company') {
      ref.current.classList.toggle('active');
      navigationClient.current.classList.remove('active');
      refHeader.current.classList.remove('client');
      refHeader.current.classList.toggle(className);
    }
    if (className === 'client') {
      ref.current.classList.toggle('active');
      navigationCompany.current.classList.remove('active');
      refHeader.current.classList.remove('company');
      refHeader.current.classList.toggle(className);
    }
  }

  function removeClasses() {
    navigationCompany.current.classList.remove('active');
    navigationClient.current.classList.remove('active');
    refHeader.current.classList.remove('client');
    refHeader.current.classList.remove('company');
    pad.current.style.display = "none";
  }

  const scrollToFooter = () => {
    // Find the footer element by ID (assuming it has an ID attribute)
    const footerElement = document.getElementById('footer');

    if (footerElement) {
      // Get the height of the footer element
      const footerHeight = footerElement.getBoundingClientRect().height;

      // Calculate the Y position to scroll to (footer's top position)
      const scrollToY = footerElement.offsetTop - footerHeight;

      // Scroll to the footer
      window.scrollTo({
        top: scrollToY,
        behavior: 'smooth', // Use 'auto' if you want an instant scroll
      });
    }
  };

  return (
    <>
      <header className="header" ref={refHeader}>
        <Container>
          <NavigationElement ref={navigationCompany} handleClass={addClasses} type={"company"} sliderContext={sliderContext} />
          <NavigationElement ref={navigationClient} handleClass={addClasses} type={"client"} sliderContext={sliderContext} />

          <Row className='align-items-center header__inner'>
            <Col md={2} className="text-start header__icons" >
              {/* <Link className='header__icons-fb' to='https://www.facebook.com/LvivEnergoZbut' target={'_blank'}> <img src='/img/fb.svg' alt="" /></Link> */}
              {/* <Link className='header__icons-youtube' to='https://www.youtube.com/@lvivenergozbut' target={'_blank'}> <img src='/img/youtube.svg' alt="" /></Link> */}
            </Col>
            <Col md={3} className="text-start header__company">
              <svg className='header__company-svg' width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.256282 11.7489C-0.0854272 11.4142 -0.0854273 10.8715 0.256282 10.5368L4.88756 6L0.256281 1.46323C-0.0854277 1.1285 -0.0854277 0.585786 0.256281 0.251051C0.59799 -0.083684 1.15201 -0.083684 1.49372 0.251051L6.74372 5.39391C7.08543 5.72864 7.08543 6.27136 6.74372 6.60609L1.49372 11.7489C1.15201 12.0837 0.59799 12.0837 0.256282 11.7489Z" fill="#77C043" />
              </svg>
              <button className='nav-btn company' onClick={() => { addClasses(navigationCompany, 'company'); pad.current.style.display = "block" }}>Електроенергія</button>
            </Col>
            <Col md={2} className="text-center logo__inner">
              <Link to='/'><div className="logo" onClick={() => changeSlide(1)}></div></Link>
            </Col>
            <Col md={3} className="text-end header__company">
              <button className='nav-btn client' onClick={() => { addClasses(navigationClient, 'client'); pad.current.style.display = "block" }}>Природний газ </button>
              <svg className='header__company-svg right' width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.256282 11.7489C-0.0854272 11.4142 -0.0854273 10.8715 0.256282 10.5368L4.88756 6L0.256281 1.46323C-0.0854277 1.1285 -0.0854277 0.585786 0.256281 0.251051C0.59799 -0.083684 1.15201 -0.083684 1.49372 0.251051L6.74372 5.39391C7.08543 5.72864 7.08543 6.27136 6.74372 6.60609L1.49372 11.7489C1.15201 12.0837 0.59799 12.0837 0.256282 11.7489Z" fill="#77C043" />
              </svg>
            </Col>
            <Col md={2} className="text-end menu-map">
              <img src='/img/menu.svg' alt="" onClick={scrollToFooter} />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="pad" onClick={removeClasses} ref={pad} style={{ display: "none" }}></div>
    </>
  );
};

export default Header;