import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServicesItem from "./ServicesItem";
import TitleBlock from "../../components/TitleBlock";

const Services = ({services, questions, requests, scroll}) => {
  return (
    <section className="services">
        <Container>
            <Row>
              <Col>
              <TitleBlock subtitle={`Послуги, які надає тов «Львівенергозбут»`}/>
              </Col>
            </Row>
            <Row className='service-list'>
                <Col md={6} className='d-flex service-list-title'>
                  <div className="number"> 01 </div>
                    <h3> У центрах обслуговування клієнтів <br/> «Львівенергозбут» Ви можете <br/> отримати наступні послуги: </h3>
                </Col>  
            </Row>
            <Row className='justify-content-between mx-0'>
              {services.map((servise)=>{
                return <ServicesItem key={servise.id} text ={servise.text} scroll={scroll}/>
              })}
            </Row>
            <Row className='service-list'>
                <Col md={6} className='d-flex service-list-title'>
                  <div className="number"> 02 </div>
                    <h3> Клієнти «Львівобленерго» можуть <br/> звертатися у «Львівенергозбут» <br/> для вирішення наступних питань: </h3>
                </Col>  
            </Row>
            <Row className='justify-content-between mx-0'>
              {questions.map((question)=>{
                return <ServicesItem key={question.id} text ={question.text} scroll={scroll}/>
              })}
            </Row>
            <Row className='service-list'>
                <Col md={6} className='d-flex service-list-title'>
                  <div className="number"> 03 </div>
                    <h3> Також клієнти «Львівобленерго» <br/> можуть оформити у «Львівенергозбут» <br/> звернення щодо: </h3>
                </Col>  
            </Row>
            <Row className='justify-content-between mx-0'>
              {requests.map((request)=>{
                return <ServicesItem key={request.id} text ={request.text} scroll={scroll}/>
              })}
            </Row>
        </Container>
    </section>
  )
}

export default Services;