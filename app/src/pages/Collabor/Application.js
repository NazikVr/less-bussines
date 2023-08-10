import TitleBlock from "../../components/TitleBlock";
// import SliderNews from "../../components/News/SliderNews";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ApplicationInstruction from "../../components/Applications/ApplicationInstruction";
import ApplicationForm from "../../components/Applications/ApplicationForm";

const Application = ({type}) => {

  useEffect(() => {
        window.scrollTo(0,0);
  }, [])

  const [,,theme] = useOutletContext();

  return (
    <>
      {theme === 'light' && <div className="mont-block"></div> }
      <TitleBlock title={'Звернення клієнтів'} type={type}/>
      <ApplicationInstruction/>
      <ApplicationForm/>
      {/* <SliderNews/> */}
    </>
  )
}

export default Application