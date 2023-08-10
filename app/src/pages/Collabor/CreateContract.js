import TitleBlock from "../../components/TitleBlock";
// import SliderNews from "../../components/News/SliderNews";
import ContractConditions from "../../components/Condition/ContractConditions";
import {  useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const CreateContract = ({type, consumer}) => {

    useEffect(() => {
      window.scrollTo(0,0);
    }, [])
    
    const [,,theme] = useOutletContext();

    // consumer - 1 побут, 2 - для юридичних
    
    return (
       <>
       {theme === 'light' && <div className="mont-block"></div>}
         <TitleBlock title={'Укласти договір'} type={type}/>
         <ContractConditions consumer={consumer}/>
         {/* <SliderNews/> */}
      </>
    );
};

export default CreateContract;