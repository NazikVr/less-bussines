import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const VacancieItem = ({features,guarantees,advantages,schedule}) => {
  return (
        <Accordion.Body>
            <h4>Особливості роботи:</h4>
             {features.map((feature, index)=>{
                return <p key={index}> — {feature}</p>
             })}

            <h4>Ми гарантуємо:</h4>
            {guarantees.map((guarantee, index)=>{
                return <p key={index}> — {guarantee}</p>
             })}

            <h4>Буде перевагою:</h4>
            {advantages.map((advantage, index)=>{
                return <p key={index}> — {advantage}</p>
             })}

            <Row>
                <Col md={6}>
                <Row>
                    <h4>Графік роботи:</h4>
                    <Col md = {4}>
                        <p className='vacancie-days'>{schedule.days}</p>
                        <p className='vacancie-hours'>{schedule.hours}</p>
                        <p className='vacancie-days'>Обідня перерва</p>
                        <p className='vacancie-hours'> 12:00 — 13:00</p>
                    </Col>
                    <Col md = {4}>
                        <p className='vacancie-days'>П’ятниця</p>
                        <p className='vacancie-hours'>8:00 — 16:00</p>
                        <p className='vacancie-days'>Обідня перерва</p>
                        <p className='vacancie-hours'> 12:12 — 13:00</p>
                    </Col>
                    <Col md = {4}>
                        <p className='vacancie-days'>Субота та неділя</p>
                        <p className='vacancie-hours'>Вихідні</p>
                    </Col>
                </Row>
                </Col>
                <Col md={6}>
                    <h4>Звертайтесь у відділ управління персоналом:</h4>
                    <p><b>Електронна адреса:</b><br/>
                        o.novikov@lvivenergozbut.com<br/><br/>

                        <b>Детальну інформацію можна отримати<br/>
                        від фахівців за телефоном:</b><br/>
                        032 259-59-59 після звукового сигналу <br/>
                        необхідно набрати 25-023 або 25-025</p>

                </Col>
                <Col md={12} className = 'anket-title'>
                    <h4>Будемо раді бачити Вас у нашому дружньому колективі!</h4>
                    <p>Будь ласка, заповніть анкету для <br /> того щоб надіслати своє резюме</p>
                </Col>
                <Col md={6}>
                    <div className="form-left d-flex align-items-center height0">
                        <span className="number-form-norm">01</span> 
                        <span className="number-text">Особисті данні</span>
                    </div>
                </Col>
                <Col md={6}>
                    <input className="form-control" type="text" placeholder="Ім’я*" aria-label="default input"/>
                    <input className="form-control" type="text" placeholder="Прізвище*" aria-label="default input"/>
                    <input className="form-control" type="text" placeholder="Ім’я по батькові" aria-label="default input"/>
                </Col>
                <Col md={6}>
                    <div className="form-left d-flex align-items-center height0">
                        <span className="number-form-norm">02</span> 
                        <span className="number-text">Контактні данні</span>
                    </div>
                </Col>
                <Col md={6}>
                     <input className="form-control" type="email" placeholder="Електронна пошта*" aria-label="default input"/>
                </Col>
                <Col md={6}>
                    <div className="form-left d-flex align-items-center height0">
                        <span className="number-form-norm">03</span> 
                        <span className="number-text">Оберіть файл</span>
                    </div>
                </Col>
                <Col md={6}>
                <Form.Group controlId="formFileLg" className='file-input'>
                    <Form.Control type="file" size="lg" />
                </Form.Group>
                   <Link to={''}className='file-input-example'><img src="/img/example-cv.svg" alt="cv"/> Зразок резюме</Link>
                </Col>
                <Col md={6}>
                    <p className="text-left fs-12">Поле помічене зірочкую «*»<br/> обов’язкове для заповнення</p>
                </Col>
                <Col md={6}>
                    <button type="submit" className="btn-submit">Відправити резюме</button>
                </Col>
            </Row>
        </Accordion.Body>
  )
}

export default VacancieItem