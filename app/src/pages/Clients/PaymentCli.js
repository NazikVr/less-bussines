import TitleBlock from "../../components/TitleBlock";
// import SliderNews from "../../components/News/SliderNews";
import { useEffect } from "react";
import IBan from "../../components/Payment/IBan";
import Payment from "../../components/Payment/Payment";
import PaymentMethod from "../../components/Payment/PaymentMethod";
import PaymentMap from "../../components/Map/PaymentMap";
import { useOutletContext } from "react-router-dom";


const ApplicationCli = () => {

  useEffect(() => {
        window.scrollTo(0,0);
  }, [])
  
  const paymentsOnline = {
    title: 'Оплата онлайн',
    subtitle: 'Оплата за електроенергію в інтернеті доступна через електронні системи:',
    payImgs: [
        {img: "/img/privatbank.svg", comission: true, path: 'https://my-payments.privatbank.ua/mypayments/customauth/identification/fp/static?staticToken=597081034bcecc2e6f5bc8f953dcf45f3ryltqxs' },
        {img: "/img/portmone.svg", comission: true, path: 'https://www.portmone.com.ua/r3/uk/terminal/index/index/id/16738' },
        {img: "/img/ibox.svg", comission: true, path: '' },
        {img: "/img/easypay.svg", comission: false, path: 'https://easypay.ua/ua/catalog/utility/lvov/lvovoblenergo' },
        {img: "/img/ipay.svg", comission: false, path: 'https://www.ipay.ua/ua/bills/oplata-uslug-ooo-l-vovenergosbyt-online' },
        {img: "/img/kyivstar.svg", comission: false, path: '' },
    ]
  }

  const paymentsStation = {
    title: 'Оплата в пунктах прийому платежів',
    subtitle: 'Оплата за електроенергію в пунктах прийому платежів доступна у таких банках та установах:',
    payImgs: [
        {img: "/img/privatbank.svg", comission: true, path: 'https://my-payments.privatbank.ua/mypayments/customauth/identification/fp/static?staticToken=597081034bcecc2e6f5bc8f953dcf45f3ryltqxs' },
        {img: "/img/portmone.svg", comission: true, path: 'https://www.portmone.com.ua/r3/uk/terminal/index/index/id/16738' },
        {img: "/img/ibox.svg", comission: true, path: '' },
        {img: "/img/easypay.svg", comission: false, path: 'https://easypay.ua/ua/catalog/utility/lvov/lvovoblenergo' },
        {img: "/img/ipay.svg", comission: false, path: 'https://www.ipay.ua/ua/bills/oplata-uslug-ooo-l-vovenergosbyt-online' },
        {img: "/img/kyivstar.svg", comission: false, path: '' },
    ]
  }

  const paymentsTerminals = {
    title: 'Оплата в платіжних терміналах',
    subtitle: 'Оплата за електроенергію в платіжних терміналах доступна у таких банках та установах:',
    payImgs: [
        {img: "/img/privatbank.svg", comission: true, path: 'https://my-payments.privatbank.ua/mypayments/customauth/identification/fp/static?staticToken=597081034bcecc2e6f5bc8f953dcf45f3ryltqxs' },
        {img: "/img/portmone.svg", comission: true, path: 'https://www.portmone.com.ua/r3/uk/terminal/index/index/id/16738' },
        {img: "/img/ibox.svg", comission: true, path: '' },
        {img: "/img/easypay.svg", comission: false, path: 'https://easypay.ua/ua/catalog/utility/lvov/lvovoblenergo' },
    ]
  }

  const paymentList = [
    { description: 'Платіжний термінал IBOX',
      cordList: [
      [49.84059195871775, 24.03586338018413],
      [49.834890199907406, 24.03775165520214],
      [49.82929850197135, 24.039124946124325],
      [49.82730526523206, 24.020413857309528],
      [49.8332847290407, 24.00333355146483],
      [49.80952860598103, 24.003676873097472]
    ]},
    {
    description: 'Платіжний термінал EasyPay',
    cordList: [
      [49.84308280739134, 24.029426079646285],
      [49.838488475513664, 24.020413857969427],
      [49.83522235967131, 24.02822445008937],
      [49.83300791836401, 24.02891109555046],
      [49.837325984991665, 24.048823813922166]
    ]},
  ];

  const [,,theme] = useOutletContext();

  return (
    <>
      {theme === 'light' && <div className="mont-block"></div>}
      <TitleBlock title={'Способи оплати'} type={'Для населення'}/>
      <IBan/>
      <Payment title={paymentsOnline.title} subtitle={paymentsOnline.subtitle} payImgs={paymentsOnline.payImgs}/>
      <PaymentMethod/>
      <Payment title={paymentsStation.title} subtitle={paymentsStation.subtitle} payImgs={paymentsStation.payImgs}/>  
      <PaymentMap count={11} paymentList = {paymentList}/>
      <Payment title={paymentsTerminals.title} subtitle={paymentsTerminals.subtitle} payImgs={paymentsTerminals.payImgs}/>
      <PaymentMap count={11} paymentList = {paymentList}/>
      {/* <SliderNews/> */}
    </>
  )
}

export default ApplicationCli