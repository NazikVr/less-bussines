import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AssignmentItem = ({steps,number}) => {
  return (
    <>
    <Row className = "service-list">
    <Col md={6}>
        <div className="number">{number<9 ? "0"+(number+1) : number+1}</div>
        <h3> Крок </h3> 
   </Col>
   </Row>
   <Col md={6}>
    {steps.map((step,index)=>{
     return  <div key={index} className="step-item">
              <span>{index+1}</span>
              {step.title}
              <p>{step.description}</p>
            </div>
    }) }
    <p className="step-paragraf">Ви можете редагувати інформацію у розділі, натиснувши кнопку «Назад», або іконку «Редагувати» у шкалі нумерації</p>
    </Col>
  </>
  )
}

export default AssignmentItem