import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const YellowContact = () => {
  return (
    <section className="yellow-contact">
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <p>На час карантину<br />
                  прийом побутових<br />
                  клієнтів здійснюється</p>
                <Link to="/clients/assignment" className='btn-yellow-white'>ЗА ПОПЕРЕДНІМ ЗАПИСОМ</Link>
                <p>за номерами<br />
                  телефонів:</p>
                <p><Link to="tel:0322420568">032 242-05-68</Link><br />
                  <Link to="tel:0676370568">067 637-05-68</Link><br />
                  <Link to="tel:0506370568">050 637-05-68</Link></p>
              </Col>
              <Col md={6}>
                <p>Графік роботи <Link to="">усіх</Link><br />
                  Центрів обслуговування<br />
                  клієнтів на час карантину<br />
                  є наступним:</p>
                <p>Понеділок — четвер<br />
                  <span>8:00 — 17:00</span></p>
                <p>П’ятниця<br />
                  <span>8:00 — 16:00</span></p>
                <p>Обідня перерва<br />
                  <span>12:12 — 13:00</span></p>
                <p>Субота та неділя<br />
                  <span>Вихідні</span></p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default YellowContact