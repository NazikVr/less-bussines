import TitleBlock from "../../components/TitleBlock";
// import SliderNews from "../../components/News/SliderNews";
import { useEffect } from "react";
import CalculatorPobut from '../../components/CalculatorPobut/CalculatorPobut'
import { useOutletContext } from "react-router-dom";

const CalculatorCli = () => {

  useEffect(() => {
        window.scrollTo(0,0);
  }, [])

  const [,,theme] = useOutletContext();

  return (
    <>
    {theme === 'light' && <div className="mont-block"></div> }
      <TitleBlock title={'Калькулятор для розрахунку споживання електроенергії'} type={'Для населення'}/>
      <CalculatorPobut/>
      {/* <SliderNews/> */}
    </>
  )
}

export default CalculatorCli