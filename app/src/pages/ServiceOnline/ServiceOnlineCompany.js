import TitleBlock from "../../components/TitleBlock";
// import SliderNews from "../../components/News/SliderNews";
import { useEffect } from "react";
import ServiceOnlineZbut from '../../components/ServiceOnline/ServiceOnlineZbut'




const ServiceOnlineCompany = () => {

  useEffect(() => {
        window.scrollTo(0,0);
  }, [])

  return (
    <>
      <TitleBlock title={'Послуги онлайн'} type={'Для компаній'}/>
      <ServiceOnlineZbut/>
      {/* <SliderNews/> */}
    </>
  )
}

export default ServiceOnlineCompany