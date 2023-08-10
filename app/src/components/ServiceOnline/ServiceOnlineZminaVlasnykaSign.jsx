//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import TitleBlock from "../../components/TitleBlock";

//import { useRef } from 'react';
import { useState, useEffect } from "react";
import { ServicesDataSign } from '../../Axios/services';

import { ToastContainer, toast } from 'react-toastify'; // імпорт білліотеки повідомлень
import 'react-toastify/dist/ReactToastify.css';     // імпорт білліотеки повідомлень
import {ServiceInputFile} from './ServiceInputFile';


const ServiceOnlineZminaVlasnykaSign = () => {

    let requestId = localStorage.getItem('request_id');
    //localStorage.removeItem('request_id');
    //localStorage.removeItem('step');
    //localStorage.removeItem('count_f');
    
    const [dataSign, setDataSign] = useState([]);

    useEffect(()=>{
        window.scrollTo(0,0);
        let active = false;

        ServicesDataSign(requestId, active, setDataSign);
        
        return () => {
            active = true;
        };

    },[requestId]);

    let list_doc_dor = ['', '', ''];
    let file_name_loe = '';
    let spivvlasnyk_loe = false;
    let pass_copy = '';

    //alert(dataSign.file_name);

    if (dataSign.type_zajava === 'doruchennia'){
        list_doc_dor[0] = 'Паспорт нового власника рахунку (усі заповнені сторінки).';
        list_doc_dor[1] = 'Ідентифікаційний код власника рахунку.';
        list_doc_dor[2] = 'Оформлена довіреність, яка уповноважує Вас представляти інтереси споживача (власника рахунку).'
    }
    if (dataSign.file_name){
        var file_s = dataSign.file_name.split("*|*");
    }
   
    if (file_s?.[2] !== 'undefined' && dataSign.osr === 'loe'){
        file_name_loe = 'https://dev-api-lez.inneti.net/uploads/file/tmp/'+file_s?.[2];
        spivvlasnyk_loe = '<p><a href="/uploads/files/Zgoda_spivvlasnykiv_LOE.docx">Згода співвласників для укладення договору про надання послуг з розподілу електричної енергії.</a></p>';
    }

    
    if (dataSign.type_doc === 'tc'){
        pass_copy = 'Паспорт громадянина України (усі заповнені сторінки).'
    }
   
    const [show, setShow] = useState(false); 
    const [count_f, setCount_f] = useState(0); 

    function addListDocFile(setShow, setCount_f) {
        let count = 0;
   
        if (!localStorage.getItem('count_f')){
            count = 1;
        }
        else {
            count = Number(localStorage.getItem('count_f')) + 1;
        }
        localStorage.setItem('count_f', count);
        setCount_f(count);
        setShow(true);
        ServiceInputFile(setShow, setCount_f)
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
                        <p><a href="https://lez.com.ua/uploads/files/Zgoda_spivvlasnykiv.docx" target="_blank">Ознайомитись із заявою на приєднання до договору про постачання 
                        електричної енергії постачальником універсальної послуги</a></p>
                        
                        {file_name_loe&&<p><a href={file_name_loe} target="_blank">Ознайомитись із заявою-приєднання до договору про надання послуг з розподілу електричної енергії</a></p>}
                        
                        <p ><strong>Завантажте сканкопії (фото) необхідних документів:</strong></p>

                                <ol>
                                    <li >Документ про право власності (користування) на об’єкт, за яким здійснюється зміна власника рахунку.</li>
                                    {pass_copy&&<li>{pass_copy}</li>}
                                    <li>Паспорт точки розподілу/передачі об’єкта.</li>
                                    {list_doc_dor[0]&&<li>{list_doc_dor[0]}</li>}
                                    {list_doc_dor[1]&&<li>{list_doc_dor[1]}</li>}
                                    {list_doc_dor[2]&&<li>{list_doc_dor[2]}</li>}
                                </ol>

                                <p ><strong>Важливо!</strong> Якщо за Вашою адресою зареєстровано декілька співвласників,
                                    необхідно додати сканкопію (фото) заповненої та підписаної згоди співвласників
                                    (опікунів зареєстрованих неповнолітніх дітей, неповносправної(них) особи (осіб)).</p>
                                <p><a href="/uploads/files/Zgoda_spivvlasnykiv.docx">Згода співвласників для укладення договору про постачання електричної енергії постачальником універсальних послуг.</a></p>
                                {spivvlasnyk_loe&&<p><a href="/uploads/files/Zgoda_spivvlasnykiv_LOE.docx">Згода співвласників для укладення договору про надання послуг з розподілу електричної енергії.</a></p>}
                               
                        </div>
                     </Col>
                </Row>
           
                    <ServiceInputFile show={show} count_f={count_f}/>
       
                <Row>
                    <Col md={6} className='header-green'>
                    </Col>
                    <Col md={6} className= "header-green">  
                        <button className="btn-submit" onClick={() => addListDocFile(setShow, setCount_f) } id="file_add_btn">Додати файл </button>                  
                    </Col>
                </Row>
               
               </>   
    ) 
}

export default ServiceOnlineZminaVlasnykaSign
