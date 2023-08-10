import TitleBlock from "../../components/TitleBlock";
// import SliderNews from "../../components/News/SliderNews";
import { useEffect } from "react";
import ServiceOnlinePobut from '../../components/ServiceOnline/ServiceOnlinePobut'




const ServiceOnlineCli = () => {

  useEffect(() => {
        window.scrollTo(0,0);
  }, [])

  return (
    <>
      <TitleBlock title={'Послуги онлайн'} type={'Для населення'}/>
      <ServiceOnlinePobut/>
      {/* <SliderNews/> */}
    </>
  )
}

export default ServiceOnlineCli