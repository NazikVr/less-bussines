import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputMask from 'react-input-mask';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // імпорт білліотеки повідомлень
import 'react-toastify/dist/ReactToastify.css';     // імпорт білліотеки повідомлень
import ModalService from '../Modal/ModalService'; // імпорт модалки
import { ServicesReqwestDeepLink } from '../../Axios/services';


const initialValues = {
    phone: "",
    address : "",
    obladdress: "",
    vlnumbers: "",
    resnumbers: "",
    subs: 'n',  
    dor: 'n'
};

const ServiceOnlineZminaVlasnykaStep2 = (props) => {
    
    const [values, setValues] = useState(initialValues); 
    
    const servicesdor = useRef(null);
    const usermail = useRef(null);
    const adress = useRef(null);
    const obadress = useRef(null);
    const vlnumber = useRef(null);
    const resnumber = useRef(null);
    const osernumber = useRef(null);
    // const subsyd = useRef(null);
    const dorlastname = useRef(null);
    const dorsurname = useRef(null);
    const dorname = useRef(null);
    const dorpass = useRef(null);
    const dorresadress = useRef(null);
    const serpass = useRef(null);
    const numberpass = useRef(null);
    
    const [show, setShow] = useState(false); // for modal template
    const handleClose = () => setShow(false); //for modal template 
    const [qr, setQr] = useState(''); // for modal template
    

    let pHeader = '';
        if(props.dataStep.osr === 'loe'){
            pHeader = 'ТОВ «Львівенергозбут» пропонує здійснити переоформлення договору про постачання електричної енергії постачальником універсальних послуг та договору споживача надання послуг з розподілу електричної енергії.';
        }
        else {
            pHeader = 'ТОВ «Львівенергозбут» пропонує здійснити переоформлення договору про постачання електричної енергії постачальником універсальних послуг.';
        }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value
        });
    }

    console.log(values)
    
    function handleOserNumbers (event) {
            setValues ({...values, osernumbers : event.target.value});
        }

    function handleDorLastNames (event) {
            setValues ({...values, dorlastnames : event.target.value});
        }
        
    function handleDorSurNames (event) {
            setValues ({...values, dorsurnames : event.target.value});
        }
        
    function handleDorNames (event) {
            setValues ({...values, dornames : event.target.value});
        }    

    function handleDorPassp (event) {
            setValues ({...values, dorpassp : event.target.value});
        }    

    function handleDorIpn (event) {
            setValues ({...values, doripn : event.target.value});
        }    

    function handleDorResAddress (event) {
            setValues ({...values, dorresaddres : event.target.value});
        }    

    function handleSerpassp (event) {
            setValues ({...values, serpassp : event.target.value});
        }    

    function handleNumberpassp (event) {
            setValues ({...values, numberpassp : event.target.value});
        }   
        
    function handleDor (event) {
            setValues ({...values, dor : event.target.value});
        }

    // function handleSubs (event) {
    //         setValues ({...values, subs : event.target.value});
    //     }

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

    function showFormPasspIpn(){
        document.getElementById('servise_send_ipn1').style.display="none";
        document.getElementById('servise_send_ipn2').style.display="flex";
    }
    
    function showFormDor(e){
        if (e === 'y'){
            document.getElementById('service_dor_form').style.display="flex";
            document.getElementById('ipn_ser_passp_num_rows').innerHTML = '12';
            document.getElementById('ipn_num_passp_num_rows').innerHTML = '13';
           }
        if (e === 'n'){
            document.getElementById('service_dor_form').style.display="none";
            document.getElementById('ipn_ser_passp_num_rows').innerHTML = '11';
            document.getElementById('ipn_num_passp_num_rows').innerHTML = '12';
        }
    }
  
  return (
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
                            <p><strong>{pHeader}</strong></p>
                            <p>Шановний клієнт! Ви ввели дані споживача {props.dataStep.adress}.</p>
                            <p><strong>Аби продовжити оформлення послуги зміни власника особового рахунку:</strong></p>
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
                            <div className="form-left d-flex align-items-center height0"><span className="number-form">01</span> <span className="number-text">Оберіть тип подання документів:</span></div>
                        </Col>
                        <Col md={6} className= "header-green" onChange={handleDor} value={values.dor}>
                        <p>
                        <input type="radio" className="circl" autoComplete="off" name="dor" id="services_dor_n" value="n" checked = {values.dor === 'n'} ref={servicesdor} onClick={() => showFormDor('n') }/>
                        <label className="radiobtn" htmlFor="services_dor_n" onClick={() => showFormDor('n') }>я подаю заяву особисто як власник рахунку.</label>
                        </p>
                        <p>
                        <input type="radio" className="circl" autoComplete="off" name="dor" id="services_dor_y" value="y"  checked = {values.dor === 'y'} onClick={() => showFormDor('y') }  />
                        <label className="radiobtn" htmlFor="services_dor_y" onClick={() => showFormDor('y') } >я подаю заяву за довіреністю від імені власника рахунку.</label>
                        </p>
                        </Col>
                    </div>
                </Row>
                
                <Row>
                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form">02</span> <span className="number-text">Введіть Ваш номер телефону</span></div>
                        </Col>
                        <Col md={6} className= "header-green">
                            <InputMask 
                                mask='(+380) 99 99 99 999' 
                                onChange={handleInputChange} 
                                value={values.phone}
                                name='phone'
                                placeholder='Номер мобільного телефону'
                                className='form-control'
                                id = 'sevice_phone'
                            >
                            </InputMask>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form">03</span> <span className="number-text">Введіть електронну адресу</span></div>
                        </Col>
                        <Col md={6} className= "header-green">
                            <input className="form-control" type="text" id = "services_mail" placeholder="Електронна пошта" aria-label="default input" ref={usermail}/> 
                        </Col>
                    </div>

                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form">04</span> <span className="number-text">Ваша адреса реєстрації</span></div>
                        </Col>
                        <Col md={6} className= "header-green">
                            <input onChange={handleInputChange} value={values.address} name='address' className="form-control" type="text" id = "services_record_res_adress" placeholder="Ваша адреса реєстрації" aria-label="default input" ref={adress}/> 
                        </Col>
                    </div>

                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form">05</span> <span className="number-text">Адреса об'єкта</span></div>
                        </Col>
                        <Col md={6} className= "header-green">
                            <input onChange={handleInputChange} name='obladdress' value={values.obladdress} className="form-control" id="services_record_ob_adress" type="text" placeholder="Адреса об'єкта" aria-label="default input" ref={obadress}/> 
                        </Col>
                    </div>

                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form">06</span> <span className="number-text">Номер запису про право власності</span></div>
                        </Col>
                        <Col md={6} className= "header-green">
                            <input onChange={handleInputChange} name='vlnumbers' value={values.vlnumbers} className="form-control" id="services_record_vl_number" type="text" placeholder="Номер запису про право власності" aria-label="default input" ref={vlnumber}/> 
                        </Col>
                    </div>

                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form">07</span> <span className="number-text">та реєстраційний номер об'єкта нерухомого майна в Державному реєстрі речових прав на нерухоме майно</span></div>
                        </Col>
                        <Col md={6} className= "header-green">
                            <input onChange={handleInputChange} name="resnumbers" value={values.resnumbers} className="form-control" id="services_reestr_number" type="text" placeholder="Реєстраційний номер" aria-label="default input" ref={resnumber}/> 
                        </Col>
                    </div>

                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form">08</span> <span className="number-text">або назва, номер та дата видачі (підписання) документа, який підтверджує право користування об'єктом</span></div>
                        </Col>
                        <Col md={6} className= "header-green">
                            <input onChange={handleOserNumbers} value={values.osernumbers} className="form-control" id="services_other_dok_vl" type="text" placeholder="Назва, номер та дата видачі документа" aria-label="default input" ref={osernumber}/> 
                        </Col>
                    </div>

                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form">09</span> <span className="number-text">Наявність пільг/субсидій:</span></div>
                        </Col>
                        <Col md={6} className= "header-green" onChange={handleInputChange} name='subs' value={values.subs}>
                        
                            <input type="radio" name="subs" className="circl" autoComplete="off"  id="services_subs_y" value="y" checked = {values.subs === 'y'}/>
                            <label className="radiobtn" htmlFor="services_subs_y" >Є</label>
                        
                            <input type="radio" name="subs" className="circl" autoComplete="off" id="services_subs_n" value="n" checked = {values.subs === 'n'}/>
                            <label className="radiobtn" htmlFor="services_subs_n">Немає</label>
                        
                        </Col>
                    </div>

                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form">10</span> <span className="number-text">Джерело обміну документами (номер засобу зв’язку, офіційна електронна адреса та адреса електронної пошти (за наявності):</span></div>
                        </Col>
                        <Col md={6} className= "header-green">
                        <p>
                            <input type="checkbox" id="services_dg_pers" />
                            <span >Через персональний кабінет Простачальника</span>
                        </p>

                        <p>
                        <input type="checkbox" id="services_dg_mail" />
                            <span>Через електронну пошту споживача</span>
                        </p>
                        <p>
                        <input className="form-control" type="text" disabled/> 
                        </p>
                        </Col>
                    </div>
                </Row>
                <Row id = "service_dor_form" className='invisible_form'>
                    
                        <div className="green-inner" onFocus={setGreenActive}>
                            <Col md={6} className= "header-green">
                                <div className="form-left d-flex align-items-center height0"><span className="number-form">11</span> <span className="number-text">Заповніть дані споживача (власника рахунку), від імені якого Ви подаєте документи за довіреністю:</span></div>
                            </Col>
                            <Col md={6} className= "header-green">
                                <input onChange={handleDorLastNames} value={values.dorlastnames} className="form-control" id="services_fname" type="text" placeholder="Прізвище" aria-label="default input" ref={dorlastname}/> 
                            </Col>
                            <Col md={6} className='header-green'>
                                    &nbsp;
                            </Col>
                            <Col md={6} className= "header-green">
                                <input onChange={handleDorNames} value={values.dornames} className="form-control" id="services_name" type="text" placeholder="Ім'я" aria-label="default input" ref={dorname}/> 
                            </Col>
                            <Col md={6} className='header-green'>
                                    &nbsp;
                            </Col>
                            <Col md={6} className= "header-green">
                                <input onChange={handleDorSurNames} value={values.dorsurnames} className="form-control" id="services_pname" type="text" placeholder="По батькові" aria-label="default input" ref={dorsurname}/> 
                            </Col>
                            <Col md={6} className='header-green'>
                                    &nbsp;
                            </Col>
                            <Col md={6} className= "header-green">
                                <input onChange={handleDorPassp} value={values.dorpassp} className="form-control" id="services_passport" type="text" placeholder="Паспорт (серія, номер)" aria-label="default input" ref={dorpass}/> 
                            </Col>
                            <Col md={6} className='header-green'>
                                    &nbsp;
                            </Col>
                            <Col md={6} className= "header-green">
                                <InputMask 
                                    mask='9 9 9 9 9 9 9 9 9 9' 
                                    onChange={handleDorIpn} 
                                    value={values.doripn}
                                    placeholder='Ідентифікаційний код (ІПН)'
                                    className='form-control'
                                    id="services_ipn"
                                >
                                </InputMask>
                            </Col>
                            <Col md={6} className='header-green'>
                                    &nbsp;
                            </Col>
                            <Col md={6} className= "header-green">
                                <input onChange={handleDorResAddress} value={values.dorresaddres} className="form-control" id="services_addres" type="text" placeholder="Адреса реєстрації" aria-label="default input" ref={dorresadress}/> 
                            </Col>
                        </div>
                    
                </Row>

                <Row>
                    <Col md={3} className='header-green'>
                                    &nbsp;
                    </Col>
                    <Col md={6} className='header-green'>
                        <p>
                            <input type="checkbox" id="services_puhoda_ok" />
                            <span><a href="https://lez.com.ua/uploads/files/Publichna_uhoda_pro_elektronnyi_dokumentoobih.pdf">Ознайомитись із публічною угодою про електронний документообіг</a></span>
                        </p>
                        <p>
                            <input type="checkbox" id="services_user_ok" />
                            <span >Надаю згоду на збір, обробку та використання персональних даних</span>
                        </p>
                    </Col>
                    <Col md={3} className='header-green'>
                                    &nbsp;
                    </Col>

                    <Col md={3} className='header-green'>
                                    &nbsp;
                    </Col>
                    <Col md={6} className='header-green'>
                        <h4>Поділіться Вашими ID-карткою та/або РНОКПП через застосунок Дія</h4>
                    </Col>
                    <Col md={3} className='header-green'>
                                    &nbsp;
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className='header-green'>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='header-green'>
                    </Col>
                    <Col md={6} className= "header-green">  
                        <button type="submit" className="btn-submit" onClick={() => ServicesZmVlDeepLink('id') }>Поділитися ID-карткою<img src='/img/arrow-right-green.svg' width="20" height="16" alt=''/> </button>                  
                    </Col>
                </Row>

                <Row id = "servise_send_ipn1">
                    <Col md={6} className='header-green'>
                    </Col>
                    <Col md={6} className= "header-green">  
                        <button type="submit" className="btn-submit" on onClick={showFormPasspIpn} >Поділитися РНОКПП<img src='/img/arrow-right-green.svg' width="20" height="16" alt=''/> </button>                  
                    </Col>
                </Row>

                <Row id = "servise_send_ipn2" className='invisible_form'>
                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form" id = "ipn_ser_passp_num_rows">12</span> <span className="number-text">Серія паспорта</span></div>
                        </Col>
                        <Col md={6} className= "header-green">
                            <input onChange={handleSerpassp} value={values.serpassp} className="form-control" id="services_ser_pass" type="text" placeholder="Серія паспорта" aria-label="default input" ref={serpass}/> 
                        </Col>
                    </div>
                    <div className="green-inner" onFocus={setGreenActive}>
                        <Col md={6} className= "header-green">
                            <div className="form-left d-flex align-items-center height0"><span className="number-form" id = "ipn_num_passp_num_rows">13</span> <span className="number-text">Номер паспорта</span></div>
                        </Col>
                        <Col md={6} className= "header-green">
                            <input onChange={handleNumberpassp} value={values.numberpassp} className="form-control" id="services_num_pass" type="text" placeholder="Номер паспорта" aria-label="default input" ref={numberpass}/> 
                        </Col>
                    </div>
                    <Col md={6} className='header-green'>
                    </Col>
                    <Col md={6} className= "header-green">  
                        <button type="submit" className="btn-submit" onClick={() => ServicesZmVlDeepLink('tc') }>Поділитися РНОКПП<img src='/img/arrow-right-green.svg' width="20" height="16" alt=''/> </button>                  
                    </Col>
                </Row>
                              
                <Row>
                    <Col md={12} className='header-green'>
                    </Col>
                </Row>
                <ModalService show={show} handleClose={handleClose} shering={true} qr={'url'+qr+'.png'}/> {/* контейнер модалки */}
    </>
  )

  function ServicesZmVlDeepLink (type){
    var type_doc = type;
    var allSpacesRe = /\s+/g;
    var PhoneRe = /[\(\)\+\_]/g;
    var phone = document.getElementById('sevice_phone').value.replace(allSpacesRe, "").replace(PhoneRe, "");
    if (phone.length !== 12){
        toast.error ('Ви ввели невірний номер телефону. Спробуйте ще раз.');
        document.getElementById('sevice_phone').focus();
        return false;
    }
    if (phone.substr(0, 3) !== '380'){
        toast.error ('Ви ввели невірний номер телефону. Спробуйте ще раз.');
        document.getElementById('sevice_phone').focus();
        return false;
    }
    var err_number =["0000000", "1111111", "2222222", "3333333", "4444444", "5555555", "6666666", "7777777", "8888888", "9999999"];
    var er_phone = phone.substr(-7);
    if (err_number.includes(er_phone)){
        toast.error ('Ви ввели невірний номер телефону. Спробуйте ще раз.');
        document.getElementById('sevice_phone').focus();
        return false;
    }
    if (phone<380099999999 || phone>380999999999){
        toast.error ('Ви ввели невірний номер телефону. Спробуйте ще раз.');
        document.getElementById('sevice_phone').focus();
        return false;
    }
    var mail = usermail.current.value.replace(allSpacesRe, "");
    if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail)){
        toast.error ('Ви ввели невірний email. Спробуйте ще раз.');
        document.getElementById('services_mail').focus();
        return false;
    }
    


    var vl_number = vlnumber.current.value.trim();
    var r_number = resnumber.current.value.trim();
    var other_dok_vl = osernumber.current.value.trim();
    var ob_adress = obadress.current.value.trim();
    var res_adress = adress.current.value.trim();
    var ser_pass = serpass.current.value.trim();
    var num_pass = numberpass.current.value.trim();

    var p_kab = '';
    var p_post = '';
    var plg_s = 'ni';
    
    if (res_adress.replace(allSpacesRe, "") === ''){
        toast.error ("Ви не ввели Вашу адресу реєстрації.");
        document.getElementById('services_record_res_adress').focus();
        return false;
    }
    if (ob_adress.replace(allSpacesRe, "") === ''){
        toast.error ("Ви не ввели адресу об'єкта.");
        document.getElementById('services_record_ob_adress').focus();
        return false;
    }
    if (vl_number.replace(allSpacesRe, "") === '' && r_number.replace(allSpacesRe, "") === '' && other_dok_vl.replace(allSpacesRe, "") === ''){
        toast.error ("Ви не ввели дані про право власності чи право користування об'єктом.");
        document.getElementById('services_record_vl_number').focus();
        return false;
    }
    if (vl_number.replace(allSpacesRe, "") !== '' && r_number.replace(allSpacesRe, "") === '' && other_dok_vl.replace(allSpacesRe, "") === ''){
        toast.error ("Ви не ввели реєстраційний номер об'єкта нерухомого майна в Державному реєстрі.");
        document.getElementById('services_record_vl_number').focus();
        return false;
    }
    if (vl_number.replace(allSpacesRe, "") === '' && r_number.replace(allSpacesRe, "") !== '' && other_dok_vl.replace(allSpacesRe, "") === ''){
        toast.error ("Ви не ввели номер запису про право власності.");
        document.getElementById('services_reestr_number').focus();
        return false;
    }

    if (!document.getElementById("services_dg_pers").checked && !document.getElementById("services_dg_mail").checked){
        toast.error("Ви не обрали джерело обміну документами.");
        document.getElementById('services_dg_pers').focus();
        return false;
    }
    if ( document.getElementById("services_dg_pers").checked){
        p_kab = 'kab';
    }
    if ( document.getElementById("services_dg_mail").checked){
        p_post = 'post';
    }
    if (document.getElementById("services_subs_y").checked){
        plg_s = 'tak';
    }

    var fname = '';
    var name = '';
    var pname = '';
    var passport = '';
    var ipn = '';
    var addres = '';
    var type_zajava = 'vlasnyk';
    if (document.getElementById("services_dor_y").checked){
        fname = dorlastname.current.value.trim();
        name = dorname.current.value.trim();
        pname = dorsurname.current.value.trim();
        passport = dorpass.current.value.trim();
        ipn = document.getElementById("services_ipn").value.replace(allSpacesRe, "").replaceAll('_', "");
        addres = dorresadress.current.value.trim();
        type_zajava = 'doruchennia';
        if (fname.replace(allSpacesRe, "") === ""){
            toast.error ("Ви не ввели прізвище.");
            document.getElementById('services_fname').focus();
            return false;
        }
        if (name.replace(allSpacesRe, "") === ""){
            toast.error ("Ви не ввели ім\'я.");
            document.getElementById('services_name').focus();
            return false;
        }
        if (pname.replace(allSpacesRe, "") === ""){
            toast.error ("Ви не ввели по батькові.");
            document.getElementById('services_pname').focus();
            return false;
        }
        if (passport.replace(allSpacesRe, "") === ""){
            toast.error ("Ви не ввели серію та номер паспорта.");
            document.getElementById('services_passport').focus();
            return false;
        }
        if (ipn === ""){
            toast.error ("Ви не ввели ідентифікаційний код (ІПН).");
            document.getElementById('services_ipn').focus();
            return false;
        }
        if (ipn.length !== 10){
            toast.error ("Ви ввели невірний ідентифікаційний код (ІПН). Спробуйте ще раз.");
            document.getElementById('services_ipn').focus();
            return false;
        }
        if (addres.replace(allSpacesRe, "") === ""){
            toast.error ("Ви не ввели адресу реєстрації.");
            document.getElementById('services_addres').focus();
            return false;
        }
    }

    if (!document.getElementById('services_puhoda_ok').checked){
        toast.error ("Ви не ознайомились із публічною угодою про електронний документообіг.");
        document.getElementById('services_puhoda_ok').focus();
        return false;
    }

    if (!document.getElementById('services_user_ok').checked){
        toast.error ("Ви не надали згоду на збір, обробку та використання персональних даних.");
        document.getElementById('services_user_ok').focus();
        return false;
    }
    
    if (type_doc === 'tc'){
        if (ser_pass.replace(allSpacesRe, "") === ""){
            toast.error ("Ви не ввели серію паспорта.");
            document.getElementById('services_ser_pass').focus();
            return false;
        }
        if (num_pass.replace(allSpacesRe, "") === ""){
            toast.error ("Ви не ввели номер паспорта.");
            document.getElementById('services_num_pass').focus();
            return false;
        }
    }

    var service_data = {
        service: 'zmina_vlasnyka_rakhunku',
        persuid: props.dataStep.persuid,
        type_doc: type_doc,
        phone: phone,
        email: mail,
        osr: props.dataStep.osr,
        vl_number: vl_number,
        r_number: r_number,
        other_dok_vl: other_dok_vl,
        ob_adress: ob_adress,
        res_adress: res_adress,
        ser_pass: ser_pass,
        num_pass: num_pass,
        p_kab: p_kab,
        p_post: p_post,
        plg_s: plg_s,
        fname_dor: fname,
        name_dor: name,
        pname_dor: pname,
        passport_dor: passport,
        ipn_dor: ipn,
        addres_dor: addres,
        type_zajava: type_zajava,
    };

    ServicesReqwestDeepLink(service_data, setShow, setQr);
    
}    

}



export default ServiceOnlineZminaVlasnykaStep2
