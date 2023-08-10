import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify'; // імпорт білліотеки повідомлень
import 'react-toastify/dist/ReactToastify.css';     // імпорт білліотеки повідомлень
import axios from 'axios';
import ModalService from './Modal/ModalService'; // імпорт модалки

const initialValues = {
    rahunok: "",
    zone: 1,
    address: "",
    phone: "",
    pokaz: "",
};

const SendPokaz = () => {

const [show, setShow] = useState(false); // for modal template
const handleClose = () => setShow(false); //for modal template 

const [values, setValues] = useState(initialValues); 

const adress = useRef(null);
const lastPokaz = useRef(null);
const firstZone = useRef(null);
const sendRef = useRef(null);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };


// function handleZone (event) {
//     setValues ({...values, zone : event.target.value});
// }
// function handleAddress (event) {
//     setValues ({...values, address : event.target.value});
// }

// function handlePhone (event) {
//     setValues ({...values, phone : event.target.value});
// }

function setGreenActive (event) {
    const allNum = document.querySelectorAll('.number-form');
    for (let i = 0; i < allNum.length; i++) {
        allNum[i].style['background-color'] = '';
        allNum[i].style['color'] = '#FAFAFA';
    } // очищаємо всі номера не в фокусі

    const parent = event.target.closest('.green-inner'); // знаходимо найближчий батьківський контейнер
    const currentNum = parent.querySelector('.number-form'); // забираємо номер контейнера
    currentNum.style['background-color'] = '#37591f';
    currentNum.style['color'] = '#9BE650';
}

function sendForm (event) {
    event.preventDefault();
    console.log(values);
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }

    axios.post('put you url', values, config)
        .then(response => {
            setValues(initialValues);
            toast.success("Запит відправлено успішно!")
        })
        .catch(error => {
            setValues(initialValues);
            toast.error("Помилка при відправці запиту: " + error.message);
    });
}
//////////////////////////////////////////////////////////////// додавання елементу по кліку
  
const [count_f, setCount_f] = useState({count: 0}); 
  
  function addElement() {
    setCount_f(({ count }) => ({
        count: count + 1,
      }));
  } 

  function handleFile(e) {
    console.log('якісь дії з файлом: ' + e.target.value);
  }

////////////////////////////////////////////////////////////////////////////////////////

function changeFocus (e) {
    if(typeof(e.target.nextSibling?.tagName) === 'undefined'){
        lastPokaz.current.focus();
    }
    
    if(e.target.nextSibling?.tagName === 'INPUT'){
        e.target.nextSibling.focus();
    }

    if(e.target.nextSibling?.tagName === 'A') {
        firstZone.current.focus();
        firstZone.current.checked = true;
    }

    if(e.target === lastPokaz.current) {
        sendRef.current.focus();
    }
}

  return (
    <section className="green">
    <Container>
        <Row>
        <Col md={12}>
                <Row>
                    <Col md={6} className='h2-green'>
                        <h3>Передати показання<br/>
                            лічильника — легко<br/>
                            
                            та швидко!</h3>
                    </Col>
                    <Col md={6} className='nobg-green'>
                        <p></p>
                    </Col>
                </Row>
            </Col>
            <Col md={12} className='header-green'>
            <p>ТОВ «Львівенергозбут» продовжує впроваджувати додаткові сервіси для полегшення способів комунікації із своїми клієнтами. Наразі пропонується нова форма для передачі показань без входу в Особистий кабінет. Триває налагодження процесу автоматичного інфообміну між ТОВ «Львівенергозбут» та операторами системи розподілу (ОСР) АТ «Укрзалізниця». У зв’язку з цим, клієнтам, що приєднані до мереж цих ОСР, рекомендовано продовжувати передавати показання лічильника безпосередньо своїм ОСР.</p>
            </Col>
            <div className="green-inner" onFocus={setGreenActive}>
            <Col md={6} className= "header-green">
                 <div className="form-left d-flex align-items-center"><span className="number-form">01</span> <span className="number-text">Введіть номер особового рахунку</span></div>
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
                
                <Link to="#" className="help">?</Link>

            </Col>
            </div>
            <div className="green-inner" onFocus={setGreenActive}>
            <Col md={6} className= "header-green">
                 <div className="form-left d-flex align-items-center"><span className="number-form">02</span> <span className="number-text">Виберіть кількість зон Вашого лічильника</span></div>
            </Col>
            <Col md={6} className= "header-green" onChange={handleInputChange} name='zone' value={values.zone}>
            
                <input type="radio" name="options-outlined" value={1} className="circl" id="btn-check-outlined18" autoComplete="off" ref={firstZone}/>
                <label className="radiobtn" htmlFor="btn-check-outlined18" >1 зона</label> 

                <input type="radio" name="options-outlined" value={2} className="circl" id="btn-check-outlined19" autoComplete="off"/>
                <label className="radiobtn" htmlFor="btn-check-outlined19">2 зона</label> 

                <input type="radio" name="options-outlined" value={3} className="circl" id="btn-check-outlined20" autoComplete="off"/>
                <label className="radiobtn" htmlFor="btn-check-outlined20">3 зона</label> 

                <Link to="#" className="link">Інформація про зони лічильників <img src='/img/link.svg' alt=''/></Link>
            </Col>
            </div>
            <div className="green-inner" onFocus={setGreenActive}>
            <Col md={6} className= "header-green">
               <div className="form-left d-flex align-items-center height0"><span className="number-form">03</span> <span className="number-text">Ваша адреса</span></div>
            </Col>
            <Col md={6} className= "header-green">
                <input onChange={handleInputChange} name='address' value={values.address} className="form-control" type="text" placeholder="Адреса*" aria-label="default input" ref={adress}/> 
            </Col>
            </div>
            <div className="green-inner" onFocus={setGreenActive}>
            <Col md={6} className= "header-green">
               <div className="form-left d-flex align-items-center height0"><span className="number-form">04</span> <span className="number-text">Введіть Ваш номер телефону</span></div>
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
            </Col>
            </div>
            <div className="green-inner" onFocus={setGreenActive}>
            <Col md={6} className= "header-green">
                 <div className="form-left d-flex align-items-center height0"><span className="number-form">05</span> <span className="number-text">Введіть показання лічильника</span></div>
            </Col>
            <Col md={6} className= "header-green">
                <div className="bg-grey-line">
                    <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                    <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>

                    <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                    <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>

                    <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                    <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                </div>
                <span className="kome">,</span>
                <div className="bg-grey-line">
                <input type="number" className="input1" max={1} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0" ref={lastPokaz}/>
                </div>
                {[...Array(count_f.count)].map((count) => <input type="file" key={count} onChange={handleFile} /> )}
            </Col>
            </div>
            <div className="green-inner">
            <Col md={6} className= "header-green"></Col>
            <Col md={6} className= "header-green">  
                <button type="submit" className="btn-submit" ref={sendRef} onClick={addElement}>Надіслати <img src='/img/arrow-right-green.svg' width="20" height="16" alt=''/> </button>                  
            </Col>
            </div>
        </Row>
    </Container>
    <ToastContainer /> {/* контейнер для відображення повідомлення */}
    <ModalService show={show} handleClose={handleClose} qr={'/img/LEZ_logo_small.png'}/> {/* контейнер модалки */}
   </section>
 )
}

export default SendPokaz