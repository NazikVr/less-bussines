import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleBlock from "../../components/TitleBlock";
//import InputMask from 'react-input-mask';
//import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useState, useEffect } from "react";


import { ToastContainer, toast } from 'react-toastify'; // імпорт білліотеки повідомлень
import 'react-toastify/dist/ReactToastify.css';     // імпорт білліотеки повідомлень
//import { AxiosInstance } from "../../Axios/axios";

//import ServiceOnlineCliZminaVl from '../../pages/ServiceOnline/Clients/ServiceOnlineCliZminaVl';
import ServiceOnlineZminaVlasnykaStep2 from './ServiceOnlineZminaVlasnykaStep2';
import ServiceOnlineZminaVlasnykaSign from './ServiceOnlineZminaVlasnykaSign';
import { ServicesPersidIn } from '../../Axios/services';

const persuidvalues = {
    persuid: "",
    family: "",
    osr: "",
};

const ServiceOnlineZminaVlasnyka = () => {

    const family = useRef(null);
    const osrV = useRef(null);

    //const [values, setValues] = useState(persuidvalues); 
    const [data, setData] = useState(null);

    let step = '';
    if (localStorage.getItem('step')){
        step = localStorage.getItem('step');
    }
    
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

    function changeFocus (e) {
        if(e.target.nextSibling.tagName === 'INPUT'){
            e.target.nextSibling.focus();
        }
    }

    function submitData() {
        let persuid = '';
        for (let i=0; i<10; i++){
            if (document.getElementById('persuid_' + i).value === ''){
                persuid = persuid + '0';
            }
            else {
                persuid = persuid + document.getElementById('persuid_' + i).value;
            }
        }
        ServicesPersidIn(family.current.value, osrV.current.value,persuid,setData);
    }

    return (
        <>
                <Container>
                    <Row>
                        <Col>
                            <TitleBlock subtitle={`Зміна власника особового рахунку`}/>
                        </Col>
                    </Row>
                </Container>
            
            <section className="green">
            <Container>
                <div id = "Service-Form">
                {data?.step === '2' ? <ServiceOnlineZminaVlasnykaStep2 dataStep = {data}/>
                : 
                step === 'signature' ? <ServiceOnlineZminaVlasnykaSign/> 
                :
                
                 <>
                <Row>
                    <Col md={6} className='h2-green'>
                                    <h3>&nbsp;</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='header-green'>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='header-green'>
                        <div>
                            <p>Для зміни власника особового рахунку необхідно укласти договір споживача надання послуг з розподілу електричної енергії та договір про постачання електричної енергії постачальником універсальних послуг.</p>
                            <p>За допомогою цієї послуги Ви можете дистанційно звернутись до ТОВ «Львівенергозбут» для переукладення договору про постачання електричної енергії постачальником універсальних послуг (при зміні власника особового рахунку для населення) або особисто в <a href="https://lvivenergozbut.qsolutions.com.ua:4483/index"><b>центри обслуговування клієнтів.</b></a> Послуга безкоштовна.</p>
                            <p><strong>Зверніть увагу:</strong> під час заповнення онлайн-форми вам потрібно надати копію ID-картки через застосунок Дія. Якщо у вас немає ID-картки у застосунку — можете поділитись через Дію копією РНОКПП, проте фото паспорта громадянина України потрібно буде завантажити на сайт ТОВ "Львівенергозбут" вручну.</p>
                            <p>Щоб ділитись копіями цифрових документів через Дію та підписати сформовану заяву, впевніться, що маєте активований Дія.Підпис у застосунку.</p>
                        </div>
                     </Col>
                </Row>
                <Row>
                    <Col md={12} className='header-green'>
                    </Col>
                </Row>
                <Row>
                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form">01</span> <span className="number-text">Виберіть Вашого оператора системи розподілу:</span></div>
                        </Col>
                        <Col md={6} className= "header-green">
                            <select id="osr" className="form-select-light" ref = {osrV}>
                                <option selected value="loe">ПрАТ «Львівобленерго»</option>
                                <option value="ngt">ТОВ «Нафтогаз Тепло»</option>
                                <option value="uz">АТ «Укрзалізниця»</option>
                                <option value="poe">АТ «Прикарпаттяобленерго»</option>
                                <option value="rem">Регіональні електричні мережі</option>
                                <option value="toe">ВАТ «Тернопільобленерго»</option>
                            </select>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col md={12} className= "header-green">
                        <p><strong>Необхідні документи для укладення договору про постачання електричної енергії постачальником універсальних послуг:</strong></p>
                        <p>
                            <ol className="ps-3">
                                <li className="fst-italic">Заява-приєднання до договору про постачання електричної енергії постачальником універсальних послуг;</li>
                                <li className="fst-italic">Паспорт громадянина України;</li>
                                <li className="fst-italic">Довідка про присвоєння ідентифікаційного номера фізичної особи - платника податків або реєстраційного номера картки платника податків або копію паспорта (для фізичних осіб, які через свої релігійні або інші переконання відмовляються від прийняття
                        ідентифікаційного номера, офіційно повідомили про це відповідні органи державної влади і мають відмітку у паспорті);</li>
                                <li className="fst-italic">Документ, що посвідчує право на представництво інтересів особи у випадку подання заяви представником;</li>
                                <li className="fst-italic">Документ про право власності (користування) на об’єкт, за яким здійснюється зміна власника рахунку;</li>
                                <li className="fst-italic">Якщо об'єкт перебуває у власності кількох осіб, необхідно додати оформлену згоду співвласників (опікунів зареєстрованих неповнолітніх дітей,
                        неповносправної(них) особи (осіб). <a href="/uploads/files/Zgoda_spivvlasnykiv.docx">Зразок заяви (переглянути)</a>.</li>
                                <li className="fst-italic"><strong>Паспорт точки розподілу/передачі об’єкта, (площадки вимірювання)*</strong></li>
                            </ol>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form">02</span> <span className="number-text">Для замовлення послуги введіть прізвище попереднього власника особового рахунку
    (особи, на яку зареєстрований рахунок на цей час).</span></div>
                        </Col>
                        <Col md={6} className= "header-green">
                            <input id = "userfamily" className="form-control" type="text" placeholder="Прізвище" aria-label="default input" ref={family}/> 
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                        <div className="form-left d-flex align-items-center"><span className="number-form">03</span> <span className="number-text">Введіть номер особового рахунку</span></div>
                            </Col>
                            <Col md={6} className= "header-green">
                                <input id="persuid_0" type="number" className="input1" max={9} min={0} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                                <input id="persuid_1" type="number" className="input1" max={9} min={0} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>

                                <input id="persuid_2" type="number" className="input1" max={9} min={0} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                                <input id="persuid_3" type="number" className="input1" max={9} min={0} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>

                                <input id="persuid_4" type="number" className="input1" max={9} min={0} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                                <input id="persuid_5" type="number" className="input1" max={9} min={0} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>

                                <input id="persuid_6" type="number" className="input1" max={9} min={0} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                                <input id="persuid_7" type="number" className="input1" max={9} min={0} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>

                                <input id="persuid_8" type="number" className="input1" max={9} min={0} onChange={changeFocus} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                                <input id="persuid_9" type="number" className="input1" max={9} min={0} onFocus={(e)=>e.target.value = ''} placeholder="0"/>
                            </Col>
                    </div>
                </Row>
                <Row>
                    <Col md={12} className='header-green'>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='header-green'>
                    </Col>
                    <Col md={6} className= "header-green">  
                        <button className="btn-submit" onClick={submitData}>Знайти <img src='/img/arrow-right-green.svg' width="20" height="16" alt=''/> </button>                  
                    </Col>
                </Row>
                               
                <Row>
                    <Col md={12} className='header-green'>
                        <p><strong>* Для отримання паспорта точки розподілу/передачі об’єкта, (площадки вимірювання) Вам необхідно звернутись до Вашого оператора системи розподілу.</strong></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='header-green'>
                    </Col>
                </Row>
                </>
                }
                </div>
            </Container>
            <ToastContainer /> {/* контейнер для відображення повідомлення */}
            </section>
           
       
        </>   
    ) 
}

export default ServiceOnlineZminaVlasnyka
