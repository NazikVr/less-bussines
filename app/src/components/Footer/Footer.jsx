import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import SwitchTheme from '../SwitchTheme';

const Footer = ({ setTheme, theme, slide }) => {

  const getCurrentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
            <Col xs={12} style={{ width: "100%", justifyContent: "center" }} className="text-center download-app" >
              <p className="fs-6 text-center">Завантажити<br />додаток <br /><br /> “Енергетика онлайн”</p>
            </Col>
        </Row>
        <Row style={{ marginBottom: "40px" }}>
          <Col xs={12} className="text-center py-2 download-inner">
            <Link to="https://apps.apple.com/ua/app/%D0%B5%D0%BD%D0%B5%D1%80%D0%B3%D0%B5%D1%82%D0%B8%D0%BA%D0%B0-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1441399796?l=uk " target="_blank">
              <svg className='download-svg' width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3432 8.18608C20.2286 8.25293 17.5006 9.66372 17.5006 12.7918C17.6292 16.3591 20.9432 17.6102 21 17.6102C20.9432 17.677 20.4997 19.3144 19.186 21.0308C18.1435 22.5093 16.9863 24 15.2292 24C13.5577 24 12.9577 23.0146 11.0292 23.0146C8.95804 23.0146 8.37202 24 6.7863 24C5.02915 24 3.78629 22.4295 2.68691 20.9648C1.25864 19.0479 0.0446668 16.0396 0.00180951 13.1512C-0.0270726 11.6206 0.287835 10.116 1.08722 8.83808C2.21548 7.05397 4.22977 5.84286 6.42947 5.80292C8.11487 5.74996 9.61488 6.8812 10.6435 6.8812C11.6292 6.8812 13.472 5.80292 15.5571 5.80292C16.4571 5.80379 18.8571 6.05643 20.3432 8.18608ZM10.5009 5.49732C10.2009 4.09955 11.0292 2.70178 11.8006 1.81016C12.7863 0.731877 14.3432 0 15.6857 0C15.7714 1.39777 15.2282 2.76863 14.2574 3.76704C13.3863 4.84532 11.8863 5.65707 10.5009 5.49732Z" fill="#858A8F" />
              </svg>
            </Link>
            <Link to="https://play.google.com/store/apps/details?id=com.energyonline&hl=uk&gl=US" target="_blank">
              <svg className='download-svg' width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.9014 0.816403C7.81836 0.296369 8.8751 0 10 0C11.1249 0 12.1816 0.296369 13.0986 0.816403L13.7695 0.135182C13.947 -0.0450605 14.2348 -0.0450605 14.4123 0.135182C14.5898 0.315423 14.5898 0.607654 14.4123 0.787895L13.8738 1.33472C15.3878 2.51592 16.3636 4.37301 16.3636 6.46154H3.63636C3.63636 4.37301 4.61223 2.51592 6.12622 1.33472L5.58768 0.787895C5.41017 0.607654 5.41017 0.315423 5.58768 0.135182C5.76519 -0.0450605 6.05299 -0.0450605 6.2305 0.135182L6.9014 0.816403ZM8.18182 3.69231C8.18182 4.20211 7.77481 4.61538 7.27273 4.61538C6.77065 4.61538 6.36364 4.20211 6.36364 3.69231C6.36364 3.18251 6.77065 2.76923 7.27273 2.76923C7.77481 2.76923 8.18182 3.18251 8.18182 3.69231ZM12.7273 4.61538C13.2294 4.61538 13.6364 4.20211 13.6364 3.69231C13.6364 3.18251 13.2294 2.76923 12.7273 2.76923C12.2252 2.76923 11.8182 3.18251 11.8182 3.69231C11.8182 4.20211 12.2252 4.61538 12.7273 4.61538Z" fill="#858A8F" />
                <path d="M0 8.76923C0 8.00453 0.610521 7.38462 1.36364 7.38462C2.11675 7.38462 2.72727 8.00453 2.72727 8.76923V14.3077C2.72727 15.0724 2.11675 15.6923 1.36364 15.6923C0.610521 15.6923 0 15.0724 0 14.3077V8.76923Z" fill="#858A8F" />
                <path d="M6.36364 19.3846V22.6154C6.36364 23.3801 6.97416 24 7.72727 24C8.48039 24 9.09091 23.3801 9.09091 22.6154V19.3846H10.9091V22.6154C10.9091 23.3801 11.5196 24 12.2727 24C13.0258 24 13.6364 23.3801 13.6364 22.6154V19.3846H14.5455C15.5496 19.3846 16.3636 18.5581 16.3636 17.5385V7.38462H3.63636V17.5385C3.63636 18.5581 4.45039 19.3846 5.45455 19.3846H6.36364Z" fill="#858A8F" />
                <path d="M17.2727 8.76923C17.2727 8.00453 17.8832 7.38462 18.6364 7.38462C19.3895 7.38462 20 8.00453 20 8.76923V14.3077C20 15.0724 19.3895 15.6923 18.6364 15.6923C17.8832 15.6923 17.2727 15.0724 17.2727 14.3077V8.76923Z" fill="#858A8F" />
              </svg>
            </Link>
            {/* <Link to="https://play.google.com/store/apps/details?id=com.utilsuite.lez.prod" target="_blank">
                <img src="/img/app_new.png" alt="" height="46px" />
              </Link> */}
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col md={12} className="text-center partners">
            <Link to="https://amcu.gov.ua/" target="_blank"><img src='/img/logo_antimonopoly.png' alt="" /></Link>
            <Link to="https://lv.dsns.gov.ua/" target="_blank"><img src='/img/logo_dsns.png' alt="" /></Link>
            <Link to="https://city-adm.lviv.ua/" target="_blank"><img src='/img/logo_lmr.png' alt="" /></Link>
            <Link to="https://lv.tax.gov.ua/" target="_blank"><img src='/img/logo_dps.png' alt="" /></Link>
            <Link to="https://www.loda.gov.ua/" target="_blank"><img src='/img/logo_loda.png' alt="" /></Link>
            <Link to="https://mev.gov.ua/" target="_blank"><img src='/img/logo_mev.png' alt="" /></Link>
            <Link to="https://www.nerc.gov.ua/" target="_blank"><img src='/img/logo_nerc.png' alt="" /></Link>
            <Link to="https://sies.gov.ua/" target="_blank"><img src='/img/logo_sies.png' alt="" /></Link>
            <Link to="https://ua.energy/" target="_blank"><img src='/img/logo-ukre.png' alt="" /></Link>
            <Link to="https://www.oree.com.ua/" target="_blank"><img src='/img/logo-oper.png' alt="" /></Link>
            <Link to="https://loe.lviv.ua/" target="_blank"><img src='/img/logo-loe.png' alt="" /></Link>
            <Link to="https://www.uz.gov.ua/" target="_blank"><img src='/img/logo-ukrzal.png' alt="" /></Link>
            <Link to="https://www.naftogazteplo.com.ua/" target="_blank"><img src='/img/logo-teplon' alt="" /></Link>
            <Link to="https://m.meregi.com/" target="_blank"><img src='/img/logo-new.png' alt="" /></Link>
            <Link to="https://www.oe.if.ua/uk" target="_blank"><img src='/img/logo-oble.png' alt="" /></Link>
            <Link to="https://www.toe.com.ua/ " target="_blank"><img src='/img/logo-oblte.png' alt="" /></Link>
          </Col>
          {/* <Col md={2} className="text-end theme-inner">
                    <SwitchTheme setTheme = {setTheme} theme={theme}/>
                </Col> */}
          {/* <Col md={1} className="text-end footer-chat">
            <Link to="#" target="_blank"><img src='/img/chat.svg' alt="" /></Link>
          </Col> */}
          <Col md={12} className="text-center description">
            <p>Енергопостачальна компанія «ЛЕЗ Бізнес» © 2023<br /> Всі права захищено. Використання матеріалів цього сайту можливе тільки з посиланням на джерело.</p>
          </Col>
        </Row>

      </Container>
    </footer>
  )
}

export default Footer