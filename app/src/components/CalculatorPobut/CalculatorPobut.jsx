import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from "react";
import { getCalculatorDeviceList } from "../../Axios/getCalculatorPobut";


const CalculatorPobut = () => {
  /*const [listDevices, SetlistDevices] = useState([]);
  useEffect (()=>{
      const deviceList = JSON.parse(getCalculatorDeviceList); 
      SetlistDevices(deviceList);
  },[])*/

  const [listDevices, SetlistDevices] = useState([]);
  useEffect(() => {
    getCalculatorDeviceList().then((response) => {
      SetlistDevices(response["hydra:member"])
    })

  }, [])

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col md={6}>
              <div className='header-text'>
                <p>Онлайн-калькулятор «Львівенергозбут» - це інструмент для приблизного розрахунку витрат електроенергії (у кВт⋅год) на місяць у Вашому помешканні.</p>
                <p>Підрахунок витрат електроенергії є приблизним, але він допоможе Вам споживати електроенергію раціонально. Адже за допомогою онлайн-калькулятора Ви зможете розрахувати споживання електроенергії різними типами приладів.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="green calculator-pobut">
        <Container>
          <Row>
            <Col md={12}>
              <Row>
                <Col md={6} className='h2-green'>
                  <h3>
                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H20C22.2091 32 24 30.2091 24 28V4C24 1.79086 22.2091 0 20 0H4ZM6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8H18C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4H6ZM18 18C19.1046 18 20 18.8954 20 20V26C20 27.1046 19.1046 28 18 28C16.8954 28 16 27.1046 16 26V20C16 18.8954 16.8954 18 18 18ZM12 24C10.8954 24 10 24.8954 10 26C10 27.1046 10.8954 28 12 28H12.02C13.1246 28 14.02 27.1046 14.02 26C14.02 24.8954 13.1246 24 12.02 24H12ZM4 26C4 24.8954 4.89543 24 6 24H6.02C7.12457 24 8.02 24.8954 8.02 26C8.02 27.1046 7.12457 28 6.02 28H6C4.89543 28 4 27.1046 4 26ZM6 18C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22H6.02C7.12457 22 8.02 21.1046 8.02 20C8.02 18.8954 7.12457 18 6.02 18H6ZM10 20C10 18.8954 10.8954 18 12 18H12.02C13.1246 18 14.02 18.8954 14.02 20C14.02 21.1046 13.1246 22 12.02 22H12C10.8954 22 10 21.1046 10 20ZM18 12C16.8954 12 16 12.8954 16 14C16 15.1046 16.8954 16 18 16H18.02C19.1246 16 20.02 15.1046 20.02 14C20.02 12.8954 19.1246 12 18.02 12H18ZM10 14C10 12.8954 10.8954 12 12 12H12.02C13.1246 12 14.02 12.8954 14.02 14C14.02 15.1046 13.1246 16 12.02 16H12C10.8954 16 10 15.1046 10 14ZM6 12C4.89543 12 4 12.8954 4 14C4 15.1046 4.89543 16 6 16H6.02C7.12457 16 8.02 15.1046 8.02 14C8.02 12.8954 7.12457 12 6.02 12H6Z" fill="white" />
                    </svg>&nbsp;
                    Калькулятор
                  </h3>
                </Col>
              </Row>
            </Col>

            <Col md={12} className='header-green'>

            </Col>
          </Row>
          <Row>
            <Col md={12} className='header-green'>
              <div id="calculator_header"></div>

              <Accordion defaultActiveKey="0">

                {listDevices.map((devicelist, index) => {
                  const div_id = 'dev_type_kwt_' + devicelist.id;
                  return <Accordion.Item key={devicelist.id} eventKey={index}>
                    <Accordion.Header>
                      <Row className='calculator_rows'>
                        <Col md={1}><span>{index < 9 ? `0${index + 1}` : index + 1}</span></Col>
                        <Col md={6}>{devicelist.name}</Col>
                        <Col md={4} className='d-flex'><div id={div_id} kwt="0">0,00</div><div className='calculator_mg_left'>кВт·год/місяць</div></Col>
                      </Row>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Row className='calculator_header_top'>
                        <Col md={5} className='my-auto'>Підключені <br /> прилади</Col>
                        <Col md={2} className='my-auto'>Потужність</Col>
                        <Col md={2} className='my-auto'>Кількість<br /> приладів</Col>
                        <Col md={2} className='my-auto'>Час роботи<br /> (годин на добу)</Col>
                        <Col md={1} className='my-auto'>Спожита енергія<br /> (за добу)</Col>
                      </Row>
                      <Row className='calculator_header_bottom'>
                        <Col md={5}><div className='calculator_header_border_bottom'>&nbsp;</div></Col>
                        <Col md={2}>Вт</Col>
                        <Col md={2}>Штук</Col>
                        <Col md={2}><div className='d-flex'><div className='calculator_header_text_hour'>Годин</div><div className='calculator_header_text_hour'>хвилин</div></div></Col>
                        <Col md={1}><div className='calculator_header_border_bottom_all'>кВт·год</div></Col>
                      </Row>
                      {devicelist.lepCalculatorPobuts.map((rowsDevice) => {
                        const id = rowsDevice.id;
                        const parent = rowsDevice.parent.replace('/api/lep_calculator_pobuts/', '');
                        const dev_watt = 'dev_watt_' + id;
                        const dev_count = 'dev_count_' + id;
                        const dev_hour = 'dev_hour_' + id;
                        const dev_list = 'dev_list_' + id;
                        const dev_min = 'dev_min_' + id;
                        const day_watt = 'day_watt_' + parent;
                        const dev_daywatt = 'dev_daywatt_' + id;
                        return <div className="calculator_list_device row" id={dev_list} onClick={() => DisplayDevTypeRows(id)}>
                          <div className="my-auto col-md-5 calc-list-inner"><div className='calculator_list_device_name'>{rowsDevice.name}</div></div>
                          <div className="my-auto col-md-2 calc-list-inner watt">
                            <input className="calculator_list_device_input" def={rowsDevice.watt} type="number" min="0" defaultValue={rowsDevice.watt} onChange={() => GetWattDayDevice(id, parent)} id={dev_watt} />
                            <button className='arrow-count-up' onClick={(e) => { changeCountUp(e, id, parent) }}></button>
                            <button className='arrow-count-down' onClick={(e) => { changeCountDown(e, id, parent) }}></button>
                          </div>
                          <div className="my-auto col-md-2 calc-list-inner count">
                            <input className="calculator_list_device_input_count" def="1" type="number" min="1" defaultValue="1" max={rowsDevice.maxCount} onChange={() => GetWattDayDevice(id, parent)} id={dev_count} />
                            <button className='arrow-count-up' onClick={(e) => { changeCountUp(e, id, parent) }}></button>
                            <button className='arrow-count-down' onClick={(e) => { changeCountDown(e, id, parent) }}></button>
                          </div>
                          <div className="my-auto col-md-1 calc-list-inner hour">
                            <input className="calculator_list_device_input_hour" def="0" type="number" min="0" defaultValue="0" max="24" onChange={() => GetWattDayDevice(id, parent)} id={dev_hour} />
                            <button className='arrow-count-up' onClick={(e) => { changeCountUp(e, id, parent) }}></button>
                            <button className='arrow-count-down' onClick={(e) => { changeCountDown(e, id, parent) }}></button>
                          </div>
                          <div className="my-auto col-md-1 calc-list-inner min">
                            <input className="calculator_list_device_input_min" def="0" type="number" min="0" defaultValue="0" max="60" onChange={() => GetWattDayDevice(id, parent)} id={dev_min} />
                            <button className='arrow-count-up' onClick={(e) => { changeCountUp(e, id, parent) }}></button>
                            <button className='arrow-count-down' onClick={(e) => { changeCountDown(e, id, parent) }}></button>
                          </div>
                          <div className="my-auto col-md-1 calc-list-inner">
                            <div className="day_watt" kwt="0"><span className={day_watt} id={dev_daywatt} kwt="0" >0,00</span></div>
                          </div>
                        </div>
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                })}
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col md={4} className='header-green'>
              Вартість одного кВт·год - <strong>2,64 &#8372;</strong>.
            </Col>
            <Col md={4} className='header-green'>
              <div className="calculator_rows_result_text">Загальне споживання</div>
            </Col>
            <Col md={4} className='header-green'>
              <div className='calculator_rows_result_res' id="dev_all_watt"><strong>0,00</strong> кВт⋅год/місяць</div>
            </Col>
          </Row>
          <Row>
            <Col md={4} className='header-green'>
              &nbsp;
            </Col>
            <Col md={4} className='header-green'>
              <div className="calculator_rows_result_text">Разом до оплати</div>
            </Col>
            <Col md={4} className='header-green'>
              <div className='calculator_rows_result_res' id="dev_all_price"><strong>0,00</strong> &#8372;</div>
            </Col>
          </Row>

        </Container>
      </section>

    </>
  )

  function changeCountUp(e, id, parent) {
    e.target.parentNode?.querySelector('input')?.focus();
    var v = Number(e.target.parentNode?.querySelector('input')?.value) + 1;
    e.target.parentNode.querySelector('input').value = v;
    GetWattDayDevice(id, parent);
    e.target.parentNode.querySelector('input').value = v - 1;
    return e.target.parentNode?.querySelector('input')?.stepUp();
  }

  function changeCountDown(e, id, parent) {
    e.target.parentNode?.querySelector('input')?.focus();
    var v = Number(e.target.parentNode?.querySelector('input')?.value) - 1;
    e.target.parentNode.querySelector('input').value = v;
    if (v >= 0) {
      GetWattDayDevice(id, parent);
    }
    e.target.parentNode.querySelector('input').value = v + 1;
    return e.target.parentNode?.querySelector('input')?.stepDown();
  }

  function daysInMonth(month, year) {
    month = (month !== undefined ? month : (new Date()).getMonth() + 1);
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
        break;
      case 2:
        var year = year ? year : (new Date()).getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
        break;

      default:
        return;
    }
  }

  function GetWattDayDevice(e, d) {
    var i = 0;
    var watt = document.getElementById('dev_watt_' + e).value;
    var count = document.getElementById('dev_count_' + e).value;
    var max_count = Number(document.getElementById('dev_count_' + e).getAttribute('max'));
    var hour = document.getElementById('dev_hour_' + e).value;
    var min = document.getElementById('dev_min_' + e).value;
    var count_day = daysInMonth();
    if (hour > 24) {
      document.getElementById('dev_hour_' + e).value = '0';
      hour = 0;
    }
    if (min > 60 || hour === 24) {
      document.getElementById('dev_min_' + e).value = '0';
      min = 0;
    }
    if (count > max_count) {
      document.getElementById('dev_count_' + e).value = max_count;
      count = max_count;
    }
    var time = Number(hour) + Number(min / 60);
    var daywatt = Math.round(watt * count * time) / 1000;
    document.getElementById('dev_daywatt_' + e).setAttribute('kwt', daywatt);
    if (daywatt === 0) {
      daywatt = '0,00';
    }
    document.getElementById('dev_daywatt_' + e).innerHTML = String(daywatt).replace('.', ',');
    var device = document.getElementsByClassName("day_watt_" + d);
    var device_wat = 0;
    for (i = 0; i < device.length; i++) {
      device_wat = Number(device_wat) + Number(document.getElementsByClassName("day_watt_" + d)[i].getAttribute('kwt'))
    }
    device_wat = Math.round(device_wat * count_day * 100) / 100;
    document.getElementById('dev_type_kwt_' + d).setAttribute('kwt', device_wat);
    var acc_button = document.getElementById('dev_type_kwt_' + d).parentNode.parentNode.parentNode;
    if (device_wat === 0) {
      device_wat = '0,00';
      acc_button.style.backgroundColor = '';
    }
    else {
      acc_button.style.backgroundColor = '#3E4042';
    }
    document.getElementById('dev_type_kwt_' + d).innerHTML = String(device_wat).replace('.', ',');
    var all_wat = 0;
    var count_all_dev = document.getElementsByClassName("day_watt").length;
    for (i = 0; i < count_all_dev; i++) {
      all_wat = Number(all_wat) + Number(document.getElementsByClassName("day_watt")[i].querySelector('span').getAttribute('kwt'));
    }

    all_wat = Math.round(all_wat * count_day * 100) / 100;
    /*var price = 1.44;
    if (all_wat > 250) {
        price = 1.68;
    }*/
    var price = 2.64;
    var all_wat_res = String(all_wat).replace('.', ',');
    document.getElementById("dev_all_watt").innerHTML = "<strong>" + all_wat_res + "</strong> кВт⋅год/місяць";
    var all = Math.round(all_wat * price * 100) / 100;
    var all_price = String(all).replace('.', ',');
    document.getElementById("dev_all_price").innerHTML = "<strong>" + all_price + "</strong>  &#8372;";
  }

  function DisplayDevTypeRows(e) {
    var elements = document.getElementsByClassName("calculator_list_device");

    var i = 0;
    var j = 0;
    for (i = 0; i < elements.length; i++) {

      elements[i].classList.remove("bg_black");
      var input = elements[i].querySelectorAll('input');
      j = 0;
      for (j = 0; j < input.length; j++) {
        input[j].style.backgroundColor = '#3E4042';
      }
    }
    j = 0;
    document.getElementById('dev_list_' + e).classList.add("bg_black");
    var this_input = document.getElementById('dev_list_' + e).querySelectorAll('input');
    for (j = 0; j < this_input.length; j++) {
      this_input[j].style.backgroundColor = '#37393B';
    }
  };

}

export default CalculatorPobut
