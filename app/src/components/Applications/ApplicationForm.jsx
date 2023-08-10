import React, { useRef, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import InputMask from 'react-input-mask';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const initialValues = {
    rahunok: "",
    address: "",
    phone: "",
    pokaz: "",
};

const ApplicationForm = () => {

const [values, setValues] = useState(initialValues); 
const adress = useRef(null);

function setGreenActive (event) {
    const allNum = document.querySelectorAll('.number-form');
    for (let i = 0; i < allNum.length; i++) {
        allNum[i].style['background-color'] = '';
        allNum[i].style['color'] = '#858A8F';
    } // очищаємо всі номера не в фокусі

    const parent = event.target.closest('.green-inner'); // знаходимо найближчий батьківський контейнер
    const currentNum = parent.querySelector('.number-form'); // забираємо номер контейнера
    currentNum.style['background-color'] = '#77C043';
    currentNum.style['color'] = '#FFFFFF';
}

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
};

function changeFocus (e) { 
    if(typeof(e.target.nextSibling?.tagName) === 'undefined'){
        adress.current.focus();
    }  
    if(e.target.nextSibling?.tagName === 'INPUT'){
        e.target.nextSibling.focus();
    }
}
    
return (
    <section className="green application-form">
    <Container>
        <Row>
        <Col md={12}>
                <Row>
                    <Col md={6} className='h2-green'>
                        <h3>Онлайн-звернення</h3>
                    </Col>
                </Row>
            </Col>
            <div className="application-form__inner">
            <div className="application-form__inner-gray">
            <div className="green-inner" onFocus={setGreenActive}>
            <Col md={6} className= "header-green">
                    <div className="form-left d-flex align-items-center height0">
                        <span className="number-form">01</span> 
                        <span className="number-text">Особисті дані</span>
                    </div>
                </Col>
                <Col md={6} className= "header-green">
                    <input className="form-control" type="text" placeholder="Ім’я*" aria-label="default input"/>
                    <input className="form-control" type="text" placeholder="Прізвище*" aria-label="default input"/>
                    <input className="form-control" type="text" placeholder="Ім’я по батькові" aria-label="default input"/>
                </Col>
            </div>
            <div className="green-inner" onFocus={setGreenActive}>
            <Col md={6} className= "header-green">
                 <div className="form-left d-flex align-items-center"><span className="number-form">02</span> <span className="number-text">Особовий рахунок</span></div>
            </Col>
            <Col md={6} className= "header-green" >
                <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>

                <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>

                <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>

                <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>

                <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>

            </Col>
            </div>
            <div className="green-inner" onFocus={setGreenActive}>
            <Col md={6} className= "header-green">
               <div className="form-left d-flex align-items-center height0"><span className="number-form">03</span> <span className="number-text">Місце проживання</span></div>
            </Col>
            <Col md={6} className= "header-green">
                <input onChange={handleInputChange} name='address' ref={adress} value={values.address} className="form-control" type="text" placeholder="Адреса*" aria-label="default input"/> 
            </Col>
            </div>
            <div className="green-inner" onFocus={setGreenActive}>
            <Col md={6} className= "header-green">
               <div className="form-left d-flex align-items-center height0"><span className="number-form">04</span> <span className="number-text">Контактні данні</span></div>
            </Col>
            <Col md={6} className= "header-green">
            <InputMask 
                mask='(+380) 99 99 99 999' 
                onChange={handleInputChange} 
                value={values.phone}
                name='phone'
                placeholder='Номер мобільного телефону*'
                className='form-control'
            >
            </InputMask>
            <input className="form-control" type="text" placeholder="Електронна пошта*" aria-label="default input"/>
            </Col>
            </div>
            <div className="green-inner" onFocus={setGreenActive}>
            <Col md={6} className= "header-green">
               <div className="form-left d-flex align-items-center height0"><span className="number-form">05</span> <span className="number-text">Текст запитання</span></div>
            </Col>
            <Col md={6} className= "header-green">
            <textarea className="form-control" placeholder="Текст" aria-label="default textarea" style={{minHeight:"144px"}}/>
            </Col>
            </div>
            <div className="green-inner" onFocus={setGreenActive}>
                <Col md={6} className= "header-green">
                    <div className="form-left d-flex align-items-center height0">
                        <span className="number-form">06</span> 
                        <span className="number-text">Оберіть файл</span>
                    </div>
                </Col>
                <Col md={6} className= "header-green">
                <Form.Group controlId="formFileLg" className='file-input'>
                    <Form.Control type="file" size="lg" />
                </Form.Group>
                   <p className='grey-text'>Ви можете додати файли формата doc, docx, xls, xlsx, png, tiff, bmp, jpg, jpeg, gif, pdf, txt  розміром не більше чим 20Мб</p>
                   <Link to={''} className='file-input-example' style={{margin:"25px 10px 25px 0"}}><img src="/img/example-cv.svg" alt="cv"/> Зразок файлу</Link>
                   <Form.Check
                        type={'checkbox'}
                        id={`default-checkbox}`}
                        label={`Надаю згоду ТОВ «Львівенергозбут» на автоматизовану обробку моїх персональних даних згідно із чинним законодавством та можливу їх передачу третім особам, які мають право на отримання цих даних.`}
                    />
                </Col>
            </div>
            <div className="green-inner">
            <Col md={6} className= "header-green">
                    <p className="text-left fs-12">Поле помічене зірочкою «*»<br/> обов’язкове для заповнення</p>
                </Col>
            <Col md={6} className= "header-green">  
                <button type="submit" className="btn-submit" >Надіслати запитання</button>                  
            </Col>
            </div>
            </div>
            </div>
        </Row>
    </Container>
    </section>
  )
}

export default ApplicationForm