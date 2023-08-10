import TitleBlock from "../../components/TitleBlock";
// import SliderNews from "../../components/News/SliderNews";
import { useEffect } from "react";
import AssignmentElement from "../../components/Assignment/AssignmentElement";
import { useOutletContext } from "react-router-dom";

const Assignment = ({type}) => {

  useEffect(() => {
        window.scrollTo(0,0);
  }, [])

  const [,,theme] = useOutletContext();

  return (
    <>
      {theme === 'light' && <div className="mont-block"></div> }
      <TitleBlock title={'Запис на прийом'} type={type}/>
      <AssignmentElement/>
      {/* <SliderNews/> */}
    </>
  )
}

export default Assignment