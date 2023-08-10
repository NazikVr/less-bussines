import TitleBlock from "../../components/TitleBlock";
// import SliderNews from "../../components/News/SliderNews";
import { useEffect } from "react";
import SearchVacancies from "../../components/Vacancies/SearchVacancies";
import { useOutletContext } from "react-router-dom";

const Vacancies = () => {
    useEffect(() => {
        window.scrollTo(0,0);
      }, [])

  const [,,theme] = useOutletContext();

  return (
    <>
      {theme === 'light' && <div className="mont-block"></div>}
      <TitleBlock title={'Вакансії'} type={'Якщо ви хочете працювати у сучасній та динамічній компанії — цей розділ нашого сайту саме для Вас.'}/>
      <SearchVacancies/>
      {/* <SliderNews/> */}
   </>
  )
}

export default Vacancies