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
    {id: 2, text: 'Внесення змін до договорів про постачання електроенергії'},
    {id: 3, text: 'Укладання договорів про постачання газу'},
    {id: 4, text: 'Роз’яснення стосовно пільг і субсидій'},
    {id: 5, text: 'Внесення змін до договорів про постачання газу'},
    {id: 6, text: 'Оформлення заяви-приєднання'},
    {id: 7, text: 'Розтермінування заборгованостей'},
    {id: 8, text: 'Вияснення щодо помилково оплачених коштів'},
    {id: 9, text: 'Видача рахунків'},
  ]
  const questionList = [
    {id: 1, text: 'Отримання підписаного ОСР-ом паспорту точки розподілу'},
    {id: 2, text: 'Внесення змін до договорів про постачання газу'},
    {id: 3, text: 'Надання документів для приєднання до електромереж «Львівобленерго»'},
    {id: 4, text: 'Інформування щодо діючих тарифів'},
    {id: 5, text: 'Роз"яснення стосовно діючих онлайн сервісів'},
    {id: 6, text: 'Отримання паперового примірника договору про надання послуги з розподілу'},
    {id: 7, text: 'Укладення додаткової угоди про купівлю-продаж сонячної енергії, виробленої приватними домогосподарствами'},
  ]

  const requestList = [
    {id: 1, text: 'Зміна власника рахунку'},
    {id: 2, text: 'Перевірка правильності рахунків за електроенергію (термін 5 — 20 днів)'},
    {id: 3, text: 'Підключення електроустановки з ініціативи споживача'},
    {id: 4, text: 'Відновлення електропостачання'},
    {id: 5, text: 'Підозра на крадіжку електроелектроенергії'},
    {id: 6, text: 'Параметризація електролічильника'},
    {id: 7, text: 'Зміна зонності електролічильника'},
    {id: 8, text: 'Неправильна робота, або непрацюючий електролічильник'},
    {id: 9, text: 'Щодо викрадення і встановлення електролічильника після викрадення'},
    {id: 10, text: 'Позачергова технічна перевірка електролічильника'},
    {id: 11, text: 'Пломбування-розпломбування електролічильника при ремонтних роботах'},
    {id: 12, text: 'Про облаштування вузла обліку електричної енергії'},
    {id: 13, text: 'Заміна електролічильника'},
  ];
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
         {theme === 'light' && <div className="mont-block"></div> }
         <TitleBlock title={'Центри обслуговування клієнтів'} type={'Для населення'}/>
         <Services services = {serviceList} questions = {questionList} requests = {requestList} scroll = {scrollToPick}/>
         {/* <YellowContact/> */}
         <PickTsok ref = {pickTsok}/>
         {/* <GreenForm optionsActivity={optionsActivity} optionsСommerce={optionsСommerce}/> */}
         {/* <SliderNews/> */}
      </>
    );
};


export default CenterObslug;