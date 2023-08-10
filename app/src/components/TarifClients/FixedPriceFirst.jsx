import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import FixedPriceBlock from './FixedPriceBlock'

const FixedPriceFirst = () => {

  const fixedListInd = [
    {   title : 'Для індивідуальних та колективних побутових споживачів (зокрема гуртожитків), а також споживачів (цілей споживання), які визначені в абзацах одинадцятому — чотирнадцятому пункту 13 розділу XVII “Прикінцеві та перехідні положення” Закону України “Про ринок електричної енергії”',
        volume: {text : 'Місячний обсяг споживання', kv: '≤ 250'},
        count : {all: '2,64', pdvOn: '0,44', pdvOff: '2,2'},
    },
    // {   volume: {text : 'Місячний обсяг споживання', kv: '> 250'},
    //     count : {all: '1,68', pdvOn: '0,28', pdvOff: '1,40'},   
    // },
  ]

  // const fixedListGurt = [
  //   {   title : 'Для гуртожитків',
  //       volume: {text : 'За весь обсяг споживання'},
  //       count : {all: '1,68', pdvOn: '0,28', pdvOff: '1,40'},
  //       sm: true, 
  //   }
  // ]

  // const fixedListCollect = [
  //   {   title : 'Для колективних побутових споживачів (крім гуртожитків) А також споживачів (цілі споживання), які визначені в абзацах 11...14 пункту 13 розділу XVII ',
  //       volume: {text : 'За весь обсяг споживання'},
  //       count : {all: '1,68', pdvOn: '0,28', pdvOff: '1,40'}, 
  //       sm: true, 
  //   }
  // ]
 
    
  return (
    <Container>
        <Row>
            <Col md={12}>
            <div className='fixed-title__inner'>
              <div className="fixed-title__number">01</div>
              <p className="fixed-title__descr">Фіксовані ціни на електричну енергію для індивідуальних побутових <br />
               споживачів становлять з 
              <span> 1 червня 2023 р.</span> по 
              <span> 31 грудня 2023 р. включно:</span></p>
            </div>
            </Col>
        </Row>
        <FixedPriceBlock fixedList={fixedListInd}/>
        {/* <FixedPriceBlock fixedList={fixedListCollect}/>
        <FixedPriceBlock fixedList={fixedListGurt}/> */}
    </Container>
  )
}

export default FixedPriceFirst