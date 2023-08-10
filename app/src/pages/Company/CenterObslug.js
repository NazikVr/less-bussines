// import GreenForm from "../../components/GreenForm";
import TitleBlock from "../../components/TitleBlock";
import Services from "../../components/Services/Services";
import YellowContact from "../../components/YellowContact";
// import SliderNews from "../../components/News/SliderNews";
import { createRef, useEffect } from "react";
import PickTsok from "../../components/PickTsok";
import { useOutletContext } from "react-router-dom";

const CenterObslug = () => {
  const serviceList = [
    {id: 1, text: 'Укладання договорів про постачання електроенергії'},
    {id: 2, text: 'Укладання договорів про постачання газу'},
    {id: 3, text: 'Внесення змін до договорів про постачання газу'},
    {id: 4, text: 'Вияснення щодо помилково оплачених коштів'},
    {id: 5, text: 'Узгодження договірних обсягів споживання'},
    {id: 6, text: 'Видача рахунків'},
  ]
  const questionList = [
    {id: 1, text: 'Отримання підписаного ОСР-ом паспорту точки розподілу'},
    {id: 2, text: 'Отримання паперового примірника договору про надання послуги з розподілу'},
    {id: 3, text: 'Інформування щодо діючих тарифів'},
    {id: 4, text: 'Роз"яснення стосовно діючих онлайн сервісів'},
  ]

  const requestList = [{id:1, text:'Пломбування-розпломбування електролічильника при ремонтних роботах' }];

  // const optionsActivity = ['ТОВ','ПАТ','ПрАТ', 'ГО', 'ФОП', 'ПП','ТОВ','ТзОВ','ФО', 'Освіта','Наука', 'Медицина','ОСББ', 'Дачні', 'КП','Кооперативи','Гаражні','Інше'];
  // const optionsСommerce = [
  //   {id: 31, type: 'Комерційна пропозіцїя №5/2 Тарифний план «Базовий з тарифом ОСР» Оплата плановими платежами'},
  //   {id: 9, type: 'Комерційна пропозіцїя №4/1 Тарифний план «Базовий з тарифом ОСР» Оплата не плановими платежами'},
  //   {id: 11, type: 'Комерційна пропозіцїя №3/5 Тарифний план «Базовий з тарифом ОСР» Оплата плановими платежами'},
  //   {id: 7, type: 'Комерційна пропозіцїя №7/1 Тарифний план «Базовий з тарифом ОСР» Оплата не плановими платежами'},
  // ];

  const [,,theme] = useOutletContext();

  const pickTsok = createRef();

  function scrollToPick() {
    pickTsok.current.scrollIntoView();
  }

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
    return (
       <>
         {theme === 'light' && <div className="mont-block"></div>}
         <TitleBlock title={'Центри обслуговування клієнтів'} type={'Для компаній'}/>
         <Services services = {serviceList} questions = {questionList} requests = {requestList} scroll = {scrollToPick}/>
         {/* <YellowContact/> */}
         <PickTsok ref = {pickTsok}/>
         {/* <GreenForm optionsActivity ={optionsActivity} optionsСommerce = {optionsСommerce}/> */}
         {/* <SliderNews/> */}
      </>
    );
};

export default CenterObslug;