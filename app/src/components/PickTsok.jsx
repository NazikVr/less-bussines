import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { forwardRef, useState } from 'react';

const PickTsok = forwardRef((props, ref) => {

  const tsokList = [
    { id: 1, city: 'Львів', name: 'Центральний ЦОК', addr: 'м.Львів вул. Шевченка, 1', tel: '(032) 259-51-31' },
    { id: 2, city: 'Старий Самбір', name: 'Самбірський ЦОК', addr: 'Львівська обл. м. Старий Самбір, вул. Лева Галицького 96 Б', tel: '(032) 259-59-59' },
    { id: 3, city: 'Самбір', name: 'Самбірський ЦОК', addr: 'Львівська обл. м. Самбір, вул. Мазепи, 15', tel: '(032) 259-59-59' },
    { id: 4, city: 'Турка', name: 'Самбірський ЦОК', addr: 'Львівська обл. м. Турка вул. Шептицького, 3 д', tel: '(032) 259-59-59' },
    { id: 5, city: 'Дрогобич', name: 'Дрогобицький ЦОК', addr: 'Львівська обл. м. Дрогобич, вул. Бориславська, 2', tel: '(032) 259-59-59' },
    { id: 6, city: 'Борислав', name: 'Дрогобицький ЦОК', addr: 'Львівська обл. м. Борислав, вул. Шевченка, 179б, каб.101', tel: '(032) 259-59-59' },
    { id: 7, city: 'Стрий', name: 'Стрийський ЦОК', addr: 'Львівська обл. м. Стрий, вул. Успенська, 3', tel: '(032) 259-59-59' },
    { id: 8, city: 'Сколе', name: 'Стрийський ЦОК', addr: 'Львівська обл. м. Сколе, вул. Чайківського, 11-в', tel: '(032) 259-59-59' },
    { id: 9, city: 'Миколаїв', name: 'Стрийський ЦОК', addr: "Львівська обл. м. Миколаїв,вул. Возз'єднання, 5-Б", tel: '(032) 259-59-59' },
    { id: 10, city: 'Жидачів', name: 'Стрийський ЦОК', addr: 'Львівська обл. м. Жидачів, вул. Енергетична, 5/1', tel: '(032) 259-59-59' },
    { id: 11, city: 'Яворів', name: 'Яворівський ЦОК', addr: 'Львівська обл. м.Яворів,площа Ринок, 8', tel: '(032) 259-59-59' },
    { id: 12, city: 'Мостиська', name: 'Яворівський ЦОК', addr: 'Львівська обл. м. Мостиська, вул. Шевченка, 144-а', tel: '(032) 259-59-59' },
    { id: 13, city: 'Червоноград', name: 'Червоноградський ЦОК', addr: 'Львівська обл. м. Червоноград, просп. Шевченка, 3', tel: '(032) 259-59-59' },
    { id: 14, city: 'Сокаль', name: 'Червоноградський ЦОК', addr: 'Львівська обл. м. Сокаль, вул. Яворницького, 82-а', tel: '(032) 259-59-59' },
    { id: 15, city: 'Радехів', name: 'Червоноградський ЦОК', addr: 'Львівська обл. м. Радехів,вул. Мишуги, 16-а', tel: '(032) 259-59-59' },
    { id: 16, city: 'Золочів', name: 'Золочівський ЦОК', addr: 'Львівська обл. м. Золочів, вул. Шашкевича М., 23а', tel: '(032) 259-59-59' },
    { id: 17, city: 'Буськ', name: 'Золочівський ЦОК', addr: 'Львівська обл. м. Буськ, вул. Шкільна, 2', tel: '(032) 259-59-59' },
    { id: 18, city: 'Броди', name: 'Золочівський ЦОК', addr: 'Львівська обл. м. Броди, вул. Січових Стрільців, 14', tel: '(032) 259-59-59' },
    { id: 19, city: 'Пустомити', name: 'Львівський ЦОК', addr: 'Львівська обл.м. Пустомити, вул. Глинська, 2В', tel: '(032) 259-59-59' },
    { id: 20, city: 'Жовква', name: 'Львівський ЦОК', addr: 'Львівська обл., м. Жовква, вул. Воїнів УПА, буд. 8Г', tel: '(032) 259-59-59' },
    { id: 21, city: 'Городок', name: 'Львівський ЦОК', addr: 'Львівська обл. м. Городок, майдан Гайдамаків, 12А', tel: '(032) 259-59-59' },
    { id: 22, city: "Кам'янка-Бузька", name: 'Львівський ЦОК', addr: 'Львівська обл. м. Кам’янка-Бузька, вул. Ю.Струмила, 2-б', tel: '(032) 259-59-59' },
    { id: 23, city: 'Перемишляни', name: 'Львівський ЦОК', addr: 'Львівська обл. м. Перемишляни, вул. Івасюка, 3 ', tel: '(032) 259-59-59' },
  ]

  const [city, setCity] = useState(1);

  function formatNum(str) {
    const regex = /[- ()]/g;
    return str.replace(regex, "");
  }

  const filtredList = tsokList.filter(list => {
    return list.id === parseInt(city)
  })

  return (
    <section className="green-tsok" ref={ref}>
      <Container>
        <Row>
          <Col md={12}>
            <div className="tsok-line"></div>
            <h3>Оберіть потрібний <br /> Центр обслуговування <br /> клієнтів</h3>
          </Col>
        </Row>
        <Row>
          <Col md={6} className='tsok-select'>
            <p className='tsok-desc'>Місто</p>
            <Form.Select size="lg" onChange={(e) => { setCity(e.target.value) }} value={city}>
              {tsokList.map((tsok) => {
                return <option key={tsok.id} value={tsok.id}>{tsok.city}</option>
              })}
            </Form.Select>
          </Col>
          <Col md={6} className='tsok-count city'>
            <p> <span>23</span> Міста</p>
          </Col>
        </Row>
        <Row className='tsok-name__inner'>
          <Col md={6} className='tsok-name'>
            <p className='tsok-desc'>Назва Центра обслуговування клієнтів</p>
            <p className='tsok-name__title'>{filtredList[0].name}</p>
          </Col>
          <Col md={6} className='tsok-count inner'>
            <p> <span>8</span> ЦОКів</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p className='tsok-desc'>Адреса</p>
            <p className='tsok-addr'>{filtredList[0].addr}</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p className='tsok-desc'>Графік роботи</p>
            <p className='tsok-day'>Понеділок-Четверг</p>
            <p className='tsok-time'>08:00 — 19:00</p>
            <p className='tsok-day'>П’ятниця</p>
            <p className='tsok-time'>08:00 — 18:00</p>
            <p className='tsok-day'>Субота</p>
            <p className='tsok-time'>10:00 — 14:00</p>
            <p className='tsok-day'>Неділя</p>
            <p className='tsok-time'>Вихідний</p>
          </Col>
          <Col md={6} className='tsok-contacts'>
            <p className='tsok-desc'>Контакти</p>
            <Link to={`tel:${formatNum(filtredList[0].tel)}`} className='tsok-time'>{filtredList[0].tel}</Link> <br />
            {/* <Link to = {`tel:${formatNum(filtredList[0].vn)}`} className='tsok-time'>{filtredList[0].vn}</Link> */}
            <Link to="/clients/assignment" className='btn-yellow-white'>ЗА ПОПЕРЕДНІМ ЗАПИСОМ</Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
})

export default PickTsok