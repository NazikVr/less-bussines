import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Navigation,Thumbs } from 'swiper/core';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMemo, useState } from "react";
import MonthPick from "./MonthPick";
import OperPeriodPrice from "./OperPeriodPrice";
import { getCulcPrice, getOperRozpElement } from "../../Axios/calculationsYr";

SwiperCore.use([Thumbs]);

const OperPeriod = ({rozpodilList, monthList, yearList}) => {

  let step = 1;

  const [rozpValue, SetRozpValue] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentYear, setCurrentYear] = useState('2023');
  const [currentMonth, setCurrentMonth] = useState('01');

  const [klas, SetKlas] = useState(1);

  const [calcList, SetCalcList] = useState([]);

  function rozpChange(e) {
    SetRozpValue(parseInt(e.target.value));

    parseInt(e.target.value) && getOperRozpElement(e.target.value).then((response)=>{
        let urls = response.calculatorPriceYurs;
        let requests = urls.map(url => getCulcPrice(url));
        let calcListAll = [];

        Promise.all(requests)
        .then((responses) =>{responses.forEach(response => {
            calcListAll.push(response);
        })
            SetCalcList(calcListAll);
        });})
    }

    const currentPeriod = useMemo(()=>{
       return (currentYear + '_' + currentMonth);
    }, [currentYear, currentMonth]) 

    function handleClas(event) {
        SetKlas(parseInt(event.target.value));
    }

    const showPrice = useMemo(() => {
        if (calcList.length > 0) {
        return calcList.filter(calcItem => {
                    return calcItem.period === currentPeriod && calcItem.klas === klas;
                })
        }
    }, [calcList,currentPeriod,klas])

  return (
    <section className="tarif-operator">
        <Container>
            <Row>
                <Col md={6} className='operetor'>
                    <Row className="operator__inner" onChange={rozpChange}  value={rozpValue}>
                        {rozpodilList && 
                            rozpodilList.map((rozp)=>{
                            return rozp.id !== 7 && <Col md={6} key={rozp.id} className='operator__block-item tab-inner'>
                                            <input type="radio" id={"bt" + rozp.id} name="oper" value={rozp.id}/>
                                                <label htmlFor={"bt" + rozp.id} className="company-type__buisnes">
                                                    <p>{rozp.name}</p>
                                            </label>
                                    </Col>
                                })
                         }
                    </Row>
                </Col>
                <Col md={6} className = 'slider-col-inner'>
                  <div className="slider-swiper-inner">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={5}
                    slidesPerView={3}
                    onChange={(e)=>{console.log(e.target)}}
                    modules={[Navigation, Thumbs]}
                    className="swiper-thumb-date"
                >
                    {yearList.map((date,index)=>{
                        return (<SwiperSlide key={index} onChange={(e)=>{setCurrentYear(e.target.value)}} >

                                    <input type="radio" id={index + 'dt'} value={date} name="year" className="year__input" />
                                        <label htmlFor={index + 'dt'} className="year__label">
                                            <p>{date}</p>
                                        </label>
                                </SwiperSlide> )
                    })}
                </Swiper>
                <Swiper
                    style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={{
                        nextEl: ".swiper-button-prev",
                        prevEl: ".swiper-button-next",
                    }}
                    modules={[Navigation, Thumbs]}
                    grabCursor={true}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    className="swiper-thumb-pick"
                > 
                    {/* step-index = 12 */}
                    { 
                       yearList.map((date,index)=>{
                       step += 12;
                        return (<SwiperSlide key={index} onChange={(e)=>{setCurrentMonth(e.target.value)}}>
                                    <MonthPick index={step} monthList = {monthList}/>  
                                </SwiperSlide> )
                    })}
                    </Swiper>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>

                    <Col md={12} className="oper-klas"
                    onChange={handleClas}
                    >   
                      <p>Клас напруги: </p>
                      <input type="radio" value={1} name="btn-check-klas" className="circl" id="btn-check-klas1" autoComplete="off" defaultChecked />
                      <label className="radiobtn" htmlFor="btn-check-klas1">1-й клас</label>
                      <input type="radio" value={2} name="btn-check-klas" className="circl" id="btn-check-klas2" autoComplete="off"/>
                      <label className="radiobtn" htmlFor="btn-check-klas2">2-й клас</label>
                    </Col> 
                  </div>   
                </Col>
            </Row>
            {!!showPrice?.length && 
                <OperPeriodPrice operator={showPrice[0].oper.name} klas={showPrice[0].klas} prices={showPrice[0]}/>
            }
        </Container>
    </section>
  )
}

export default OperPeriod