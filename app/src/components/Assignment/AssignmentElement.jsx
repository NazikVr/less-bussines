import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleBlock from "../TitleBlock";
import AssignmentItem from './AssignmentItem';
import { Link } from 'react-router-dom';

const AssignmentElement = () => {
    
  const steps = [
    {_id: 1, items:[
        {title:"Оберіть Центр обслуговування клієнтів з випадаючого списку"}, 
        {title:"Оберіть адресу розташування ЦОК з випадаючого списку"}, 
        {title:"Натисніть кнопку «Далі»"} ]},
    {_id: 2, items:[
        {title:"Оберіть тип клієнта з випадаючого списку"}, 
        {title:"Оберіть послугу з випадаючого списку"}, 
        {title:"Натисніть кнопку «Далі»"} ]},
    {_id: 3, items:[
        {title:"Оберіть дату і час", description:"Для вибору дати натисніть іконку календаря, для вибору часу натисніть на вікно із часом"}, 
        {title:"Натисніть кнопку «Далі»"} ]},
    ]

  return (
    <>
    <section className='assignment'>
        <Container>
            <Row className="info">
                <Col md={7} className="info__content">
                    <p>Для ідентифікації особи у центрі обслуговування клієнтів Ви можете скористатися електронним паспортом громадянина України із застосунку Дія.</p>
                    <p>Також, на період дії «червоної зони» карантину, візит до центрів можна здійснити лише за наявності «зеленого» сертифікату вакцинації від COVID-19, або ПЛР-тесту, який діє 72 години.</p>
                </Col>
                <Col md={5} className="info__logo">
                  <img src='/img/Logoblock_02 1.png' alt='logo'/> 
                </Col>
            </Row>
            <Row>
            <div className="assignment__button">
                <Link to="https://lvivenergozbut.qsolutions.com.ua:4483/" target={'_blank'}>Здійснити попередній онлайн запис у центр</Link>
                <span>За допомогою сервісу Ви можете здійснити попередній запис на <br/> прийом до центрів обслуговування клієнтів (ЦОК) нашої компанії.</span>
            </div>
            </Row>
        </Container>
    </section>
    <TitleBlock subtitle={'Як здійснити попередній онлайн запис у центри обслуговування клієнтів «Львівенергозбут»?'}/>
    <Container className='assignment__steps'>
        {steps.map((step,index)=>{
            return <AssignmentItem key={index} steps={step.items} number = {index}/>
        })}
        <Row className = "service-list">
        <Col md={6}>
        <div className="number"> 04 </div>
        <h3> Крок </h3> 
        </Col>
        </Row>
        <Col md={6}>
               <div className="step-item"><span>1</span> Правильно заповніть поля нижче, у яких вкажіть:
                    <p>— Прізвище<br/>
                        — Ім’я<br/>
                        — По батькові<br/>
                        — Електронну пошту для відправлення талону<br/>
                        — Особовий рахунок (10-значний код)<br/>
                        — Номер телефону</p>
                </div>
                <div className="step-item"><span>2</span> Поставте галочку навпроти:
                    <p>«Згоден з передачою та подальшою<br/> обробкою персональних даних»</p>
                </div>
                <div className="step-item"><span>3</span> Поставте галочку навпроти:
                    <p>«Врахуйте, будь ласка, що у випадку<br/> запізнення Ваш візит буде скасовано»</p>
                    <p><b style={{"color": "#FF3D00"}}>Важливо:</b><br/>
                        При запізнення більше ніж на <b>5 хвилин</b><br/>
                        онлайн запис <b style={{"color": "#FF3D00"}}>скасовується</b></p>

                    <p>Для відміни онлайн запису просимо<br/>
                        зателефонувати за номерами:</p>

                    <p><Link to="tel:032 242-05-68"> 032 242-05-68 </Link><br/>
                       <Link to="tel:067 637-05-68"> 067 637-05-68 </Link><br/>
                       <Link to="tel:050 637-05-68"> 050 637-05-68 </Link><br/>
                       <Link to="tel:073 637-05-68"> 073 637-05-68 </Link></p>
                </div>
         <p className="step-paragraf">Ви можете редагувати інформацію у розділі, натиснувши кнопку «Назад», або іконку «Редагувати» у шкалі нумерації</p>
         </Col>
        <Row className = "service-list last-step">
        <Col md={6}>
        <div className="number"> 05 </div>
        <h3> Крок </h3> 
        </Col>
        </Row>
         <Col md={6}>
         <div className="step-item"><span>1</span> Уважно перевірте надану інформацію
                    <p><b style={{"color": "#FF3D00"}}>Важливо:</b><br/>
                     У наступному кроці ви <b style={{"color": "#FF3D00"}}>не зможите</b><br/>
                      редагувати заповнену інформацію!</p>
                </div>
            <p></p>
        </Col>
        <Row className = "service-list last-step">
        <Col md={6}>
        <div className="number"> 06 </div>
        <h3> Крок </h3> 
        </Col>
        </Row>
         <Col md={6}>
         <div className="step-item"><span>1</span>Вітаємо, Ви здійснили попередній запис на візит до Центру обслуговування клієнтів «Львівенергозбут»</div>
                <div className="step-item"><span>2</span> Натисніть кнопку «Надрукувати»<br/>
                    або «Зберегти», щоб отримати талон запису
                <p>Ви можете редагувати інформацію у розділі, натиснувши кнопку «Назад», або іконку «Редагувати» у шкалі нумерації</p>
          </div>
        </Col>
    <div className="assignment__button">
      <Link to="https://lvivenergozbut.qsolutions.com.ua:4483/" target={'_blank'}>Здійснити попередній онлайн запис у центр</Link>
      <span>Ласкаво просимо у Центр <br/> обслуговування клієнтів <br/> «Львівенергозбут»!</span>
    </div>
    </Container>
</>
  )
}

export default AssignmentElement