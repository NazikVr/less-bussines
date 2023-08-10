import TitleBlock from "../../components/TitleBlock";
// import SliderNews from "../../components/News/SliderNews";
import { useEffect } from "react";
import AccordionInfo from "../../components/AccordionInfo";
import { useOutletContext } from "react-router-dom";

const Info = ({type}) => {

  useEffect(() => {
        window.scrollTo(0,0);
  }, [])

  const [,,theme] = useOutletContext();

  return (
    <>
      {theme === 'light' && <div className="mont-block"></div> }
      <TitleBlock title={'Інформація для клієнтів'} type={type}/>
      <AccordionInfo/>
      {/* <SliderNews/> */}
    </>
  )
}

export default Info