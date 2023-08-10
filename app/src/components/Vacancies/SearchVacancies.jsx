import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VacancieItem from "./VacancieItem";
import { useState, useEffect } from "react";

const SearchVacancies = () => {

  const [countVacancies, SetCountVacancies] = useState(0);
  const [listVacancies, SetlistVacancies] = useState([]);
  const [listCity, SetlistCity] = useState([]);

  useEffect (()=>{

    // code for get requests

    const exampleVacancies =  5683;
    const exampleCity = [
      {id: 1, count: 73, name: "Львів"},
      {id: 2, count: 13, name: "Золочів"},
      {id: 3, count: 11, name: "Яворів"}
    ]

    const exampleList = [
        {id:1, label: "Консультант", features: ["супровід системного та офісного програмного забезпечення", "адміністрування мережевого обладнання", "адміністрування сервісів та служб Active Directory", "надання методичної та консультаційної допомоги користувачам ПК"],
          guarantees: ["своєчасну виплату заробітної плати", "офіційне працевлаштування", "можливість кар'єрного та професійного рост"],
          advantages: ["знання мережевих технологій", "досвід роботи з Mikrotik", "бажаний досвід роботи з Fortinet"], 
          schedule: {days: 'Понеділок — четвер', hours: '8:00 — 17:00'}
        },
        {id:2, label: "Маркетолог", features: ["супровід системного та офісного програмного забезпечення", "адміністрування мережевого обладнання", "адміністрування сервісів та служб Active Directory", "надання методичної та консультаційної допомоги користувачам ПК"],
          guarantees: ["своєчасну виплату заробітної плати", "офіційне працевлаштування", "можливість кар'єрного та професійного рост"],
          advantages: ["знання мережевих технологій", "досвід роботи з Mikrotik", "бажаний досвід роботи з Fortinet"], 
          schedule: {days: 'Понеділок — четвер', hours: '8:00 — 17:00'}
        },
        {id:3, label: "Інженер з комп'ютерних систем відділу інформаційних технологій", features: ["супровід системного та офісного програмного забезпечення", "адміністрування мережевого обладнання", "адміністрування сервісів та служб Active Directory", "надання методичної та консультаційної допомоги користувачам ПК"],
          guarantees: ["своєчасну виплату заробітної плати", "офіційне працевлаштування", "можливість кар'єрного та професійного рост"],
          advantages: ["знання мережевих технологій", "досвід роботи з Mikrotik", "бажаний досвід роботи з Fortinet"], 
          schedule: {days: 'Понеділок — четвер', hours: '8:00 — 17:00'}
        },
        {id:4, label: "Оператор кол-центру «холодні дзвінки»", features: ["супровід системного та офісного програмного забезпечення", "адміністрування мережевого обладнання", "адміністрування сервісів та служб Active Directory", "надання методичної та консультаційної допомоги користувачам ПК"],
          guarantees: ["своєчасну виплату заробітної плати", "офіційне працевлаштування", "можливість кар'єрного та професійного рост"],
          advantages: ["знання мережевих технологій", "досвід роботи з Mikrotik", "бажаний досвід роботи з Fortinet"], 
          schedule: {days: 'Понеділок — четвер', hours: '8:00 — 17:00'}
        },
    ]  

    SetCountVacancies(exampleVacancies) 
    SetlistVacancies(exampleList);
    SetlistCity(exampleCity);
  },[])

  return (
    <section className="green vacancies">
    <Container>
        <Row>
        <Col md={12}>
                <Row>
                    <Col md={6} className='h2-green'>
                        <h3>Пошук<br/>
                            вакансій</h3>
                    </Col>
                    <Col md={6} className='nobg-green'>
                        <p></p>
                    </Col>
                </Row>
            </Col>
            <Col md={12} className='header-green'>
            <p className='vacancies__count'>На данний час існуе вакансій — {countVacancies}</p>
            </Col>
            <Col md={6} className= "header-green">
               <div className="form-left d-flex align-items-center height0"><span className="number-form-norm">01</span> <span className="number-text">Оберіть ваше місто</span></div>
            </Col>
            <Col md={6} className= "header-green">
                   <select className="form-select" aria-label="Default select example">
                   <option defaultValue>Ваше місто</option>
                    {listCity.map((city)=>{
                      return <option key={city.id} value={city.id}>{city.name} - {city.count}</option>
                    })}
                  </select>
            </Col>
            <Col md={12} className='header-green'>
            <Accordion defaultActiveKey="0">
              {listVacancies.map((vacancie,index)=>{
                return <Accordion.Item key={vacancie.id} eventKey={index}>
                        <Accordion.Header><span>{index<9 ? `0${index+1}` : index+1}</span> {vacancie.label}</Accordion.Header>
                        <VacancieItem 
                           features={vacancie.features} 
                           guarantees={vacancie.guarantees} 
                           advantages={vacancie.advantages} 
                           schedule={vacancie.schedule}>
                        </VacancieItem>
                  </Accordion.Item>
                })}
            </Accordion>
         </Col>
        </Row>
    </Container>
   </section>
 )
}

export default SearchVacancies