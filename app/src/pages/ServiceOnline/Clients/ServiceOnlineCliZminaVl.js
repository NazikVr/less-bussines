import TitleBlock from "../../../components/TitleBlock";
// import SliderNews from "../../../components/News/SliderNews";
import { useEffect } from "react";
import ServiceOnlineZminaVlasnyka from '../../../components/ServiceOnline/ServiceOnlineZminaVlasnyka'




const ServiceOnlineCliZminaVl = () => {

  useEffect(() => {
        window.scrollTo(0,0);
  }, [])

  return (
    <>
      <TitleBlock title={'Послуги онлайн'} type={'Для населення'}/>
      <ServiceOnlineZminaVlasnyka/>
      {/* <SliderNews/> */}
    </>
  )
}

export default ServiceOnlineCliZminaVl