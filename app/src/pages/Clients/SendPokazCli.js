import TitleBlock from "../../components/TitleBlock";
// import SliderNews from "../../components/News/SliderNews";
import SendPokaz from '../../components/SendPokaz'
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const SendPokazCli = () => {
    useEffect(() => {
        window.scrollTo(0,0);
      }, [])

  const [,,theme] = useOutletContext();
  
  return (
    <>
      {theme === 'light' && <div className="mont-block"></div> }
      <TitleBlock title={'Передати показання лічильника'} type={'Якщо ви хочете працювати у сучасній та динамічній компанії — цей розділ нашого сайту саме для Вас.'}/>
      <SendPokaz/>
      {/* <SliderNews/> */}
   </>
  )
}

export default SendPokazCli