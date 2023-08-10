import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputMask from 'react-input-mask';

const Green = ({optionsActivity,optionsСommerce}) => {

  let count = 0;

  if(optionsActivity || optionsСommerce){
    count = 1
  } 
  if(optionsActivity && optionsСommerce){
    count = 2
  }

  return (
    <section className="green">
    <Container>
        <Row>
            <Col md={12}>
                <Row>
                    <Col md={6} className='h2-green'>
                        <h2>Залишити заявку</h2>
                        <p>Залиште заявку і швидко отримайте<br/>
                            вигідне рішення для Вашого бізнесу</p>
                    </Col>
                    <Col md={6} className='nobg-green'>
                        <p></p>
                    </Col>
                </Row>
            </Col>
            {optionsСommerce && 
            <>
            <Col md={6} className='header-green'>
                <div className="form-left d-flex align-items-center"><span className="number-form">0{count-1}</span> <span className="number-text">Оберіть комерційну пропозицію</span></div>
            </Col>
            <Col md={6} className='header-green'>
              <Form.Select size="lg">
              {optionsСommerce.map((commerce)=>{
                return <option key={commerce.id} value={commerce.id}>{commerce.type}</option>
              })}
              </Form.Select>
            </Col>
            </>}

            {optionsActivity && 
            <>
            <Col md={6} className='header-green'>
                <div className='form-left d-flex align-items-center'>
                    <span className='number-form'>0{count}</span> 
                    <span className='number-text'>Оберіть вид діяльності</span>
                </div>
            </Col>
            <Col md={6} className='header-green'>
               {optionsActivity.map((option,index)=>{
                return (<span key={index}>  
                            <input type="radio" name="options-outlined" className="btn-check" id={`btn-check-outlined${index}`} autoComplete="off"/>
                            <label className="btn-btn" htmlFor={`btn-check-outlined${index}`}>{option}</label>
                        </span>
                   )
               })}
            </Col>
            </>}

            <Col md={6} className='header-green'>
                <div className="form-left d-flex align-items-center height0">
                    <span className="number-form-norm">0{count+1 }</span> 
                    <span className="number-text">Особисті дані</span>
                </div>
            </Col>
            <Col md={6} className='header-green'>
                <input className="form-control" type="text" placeholder="Ім’я*" aria-label="default input"/>
                <input className="form-control" type="text" placeholder="Прізвище*" aria-label="default input"/>
                <input className="form-control" type="text" placeholder="Ім’я по батькові" aria-label="default input"/>
            </Col>
            <Col md={6} className='header-green'>
                <div className="form-left d-flex align-items-center height0">
                    <span className="number-form-norm">0{count+2}</span> 
                    <span className="number-text">Контактні данні</span>
                </div>
            </Col>
            <Col md={6} className='header-green'>
                <InputMask 
                mask='(+380) 99 99 99 999' 
                // value={props.value} 
                // onChange={props.onChange}
                placeholder='Номер мобільного телефону*'
                className='form-control'
                />
                <input className="form-control" type="email" placeholder="Електронна пошта*" aria-label="default input"/>
            </Col>
            <Col md={6} className='header-green'>
                <div className="form-left d-flex align-items-center height0">
                    <span className="number-form-norm">0{count+3}</span> 
                    <span className="number-text">Ваше повідомлення</span>
                </div>
            </Col>
            <Col md={6} className='header-green'>
                <textarea className="form-control" placeholder="Текст" rows="5"></textarea>
            </Col>
            <Col md={6} className='header-green'>
                <p className="text-center fs-12">Поле помічене зірочкою «*»<br/> обов’язкове для заповнення</p>
            </Col>
            <Col md={6} className='header-green'>
                <button type="submit" className="btn-submit">Відправити</button>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Green