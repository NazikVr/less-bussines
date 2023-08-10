
import GreenForm from "../../components/GreenForm";
import TitleBlock from "../../components/TitleBlock";
import CalculatorPrice from "../../components/TarifCompany/CalculatorPrice"
// import SliderNews from "../../components/News/SliderNews";
import { useEffect, useState } from "react";
import OperPeriod from "../../components/TarifCompany/OperPeriod";
import { getOperRozp } from "../../Axios/calculationsYr";
import { useOutletContext } from "react-router-dom";

const Tarifs = () => {

  const [rozpodilList, SetRozpodilList] = useState([]);
  const currentYear = new Date().getFullYear();
  let yearList = [];
  for(let i = currentYear; i >= 2020; i--){
    yearList.push(i);
  }

  const monthList = [
    {id:'12', name:'Грудень'},
    {id:'11', name:'Листопад'},
    {id:'10', name:'Жовтень'},
    {id:'09', name:'Вересень'},
    {id:'08', name:'Серпень'},
    {id:'07', name:'Липень'},
    {id:'06', name:'Червень'},
    {id:'05', name:'Травень'},
    {id:'04', name:'Квітень'},
    {id:'03', name:'Березень'},
    {id:'02', name:'Лютий'},
    {id:'01', name:'Січень'},
  ];


    useEffect(() => {
        window.scrollTo(0,0);
        let active = true
        getOperRozp().then((response)=>{  
            if (active) {
                SetRozpodilList(response["hydra:member"])
            }      
        })
        return () => {
            active = false;
        };
        
      }, [])

  const [,,theme] = useOutletContext();

      const type1 = `ТОВ «Львівенергозбут» інформує про ціни на універсальні послуги з постачання електричної енергії для непобутових клієнтів.`;
      const subt = `Ціна універсальної послуги`;
      const type2 = `Будь ласка, спочатку оберить оператора системи розподілу, період тарифного плана та клас напруги`;

      const optionsActivity = ['ТОВ','ПАТ','ПрАТ', 'ГО', 'ФОП', 'ПП','ТОВ','ТзОВ','ФО', 'Освіта','Наука', 'Медицина','ОСББ', 'Дачні', 'КП','Кооперативи','Гаражні','Інше'];

        return (
           <>
           {theme === 'light' && <div className="mont-block"></div>}
             <TitleBlock title={'Тарифи'} type={type1}/>
             <TitleBlock subtitle={subt} type={type2}/>
             <OperPeriod rozpodilList = {rozpodilList} monthList = {monthList} yearList = {yearList}/>
             <CalculatorPrice rozpodilList = {rozpodilList} monthList = {monthList} yearList = {yearList}/>
             <TitleBlock subtitle = {'Цікавить ціна електроенергії для клієнтів із дозволеною потужністю понад 50 кВт?'} addClass = {"price-title"}/>
             <GreenForm optionsActivity={optionsActivity}/>
             {/* <SliderNews/> */}
          </>
     );
}

export default Tarifs