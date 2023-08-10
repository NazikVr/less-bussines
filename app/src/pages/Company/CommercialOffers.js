import TitleBlock from "../../components/TitleBlock";
// import SliderNews from "../../components/News/SliderNews";
import { useEffect, useRef, useState } from "react";
import OfferPower from "../../components/ComOffers/OfferPower";
import ComOffersType from "../../components/ComOffers/ComOffersType";
import ComTarifPlans from "../../components/ComOffers/ComTarifPlans";
import ComDowload from "../../components/ComOffers/ComDowload";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Green from "../../components/GreenForm";
import { useOutletContext } from "react-router-dom";

const CommercialOffers = () => {
    useEffect(() => {
        window.scrollTo(0,0);
  }, [])

  const [,,theme] = useOutletContext();
  const [powerValue, SetPowerValue] = useState('');
  const [companyType, SetCompanyType] = useState('');
  const [tarifList, SetTarifList] = useState([]);
  const comTitle = useRef(null);

  function getPowerValue(e) {
    SetPowerValue(e.target.value);
  }

  function getCompanyType(e) {
    switch(e.target.value) {
      case "Бізнес":
        SetTarifList([{nameTariff: 'Базовий', nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ «Універсальна – 3 (непобутові)»', url: "/docx/com_offer/KOMERTsIYNA_PROPOZYTsIYa_«Universalna_–_3_(nepobutovi)».doc"},])
        break;
      case "Бюджетні":
        SetTarifList([{nameTariff: 'Базовий', nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ «Універсальна – 4 (інші непобутові)', url: "/docx/com_offer/KOMERTsIYNA_PROPOZYTsIYa_«Universalna_–_4_(inshi_nepobutovi)».doc"},])
        break;
      case "Колективні":
        SetTarifList([{nameTariff: 'Базовий', nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ «Універсальна – Побут 2»', url: "/docx/com_offer/KP2_(2).doc"},])
        break;
      case "Непобутові споживачі":
        SetTarifList([{nameTariff: 'Базовий', nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ «Універсальна – 3 Г (непобутові)»', url: "/docx/com_offer/KOMERTsIYNA_PROPOZYTsIYa_«Universalna_–_3_H_(nepobutovi)».doc"},])
        break;
      case "Без постачальника":
        SetTarifList([{nameTariff: 'Базовий', nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ «Універсальна – 3/1»', url: "/docx/com_offer/KOMERTsIYNA_PROPOZYTsIYa_«Universalna_–_3_1».doc"},])
        break;
      default:
        SetTarifList([]);
        break;      
    }
    SetCompanyType(e.target.value);
    comTitle.current.scrollIntoView({block: "center", behavior: "smooth"})
  }

  // bold (true/false) - розмір .. також є thin класс в разі значення false, описані в розділі ComOffers component styles 

  const powerList = [
    {id: 1,  title: "> 50 кВт", bold: true },
    {id: 2,  title: "≤ 50 кВт", bold: true },

    {id: 3,  title: "Вільна ціна",
    content: ["На укладення договору за вільними цінами має право будь-який споживач, який відповідає критеріям обраної ним комерційної пропозиції. Укладення договору за вільними цінами здійснюється шляхом подачі заяви-приєднання до договору."],
    bold: false },
    {id: 4,  title: "Універсальна послуга", 
     content: ["Універсальна послуга — постачання електричної енергії побутовим та малим непобутовим споживачам, що гарантує їхні права бути забезпеченими електричною енергією. При цьому, універсальну послугу надають постачальники електричної енергії, на яких покладена дана функція."],
    bold: false }
  ]
  
  // значення для оплати (payment): 1 - Оплата по факту,  2 - Оплата плановими платежами, 3 - Попередня оплата

  const tarifUpperBusiness = [
    {nameTariff: 'Базовий', isOsr: true, payment: 1, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ № 5/24/1', url: "/docx/com_offer/KP_№5_24_1_fakt_2.doc"},
    {nameTariff: 'Базовий', isOsr: true, payment: 2, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ № 5/24/2', url: "/docx/com_offer/KP_№5_24_2_planovi_2.doc"},
    {nameTariff: 'Базовий', isOsr: true, payment:  3, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ № 5/24', url: "/docx/com_offer/KP_№5_24_peredoplata_2.doc"},
    {nameTariff: 'Базовий', isOsr: false, payment: 1, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ № 6/24/1', url: "/docx/com_offer/KP_№6_24_1_fakt_2.doc"},
    {nameTariff: 'Базовий', isOsr: false, payment: 2, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ № 6/24/2', url: "/docx/com_offer/KP_№6_24_2_planovi_2.doc"},
    {nameTariff: 'Базовий', isOsr: false, payment: 3, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ № 6/24', url: "/docx/com_offer/KP_№6_24_peredoplata_2.doc"},
    {nameTariff: 'Базовий', isOsr: true, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ № 27 - січень 2023 р.', url: "/docx/com_offer/KP_27_23r_1.doc"},
    {nameTariff: 'Базовий', isOsr: false,nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ № 28 - січень 2023 р.', url: "/docx/com_offer/KP_28_23r_1.doc"},
    {nameTariff: 'Базовий', isOsr: true, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ №27 - лютий 2023 р.', url: "/docx/com_offer/KP_27_23r_2.doc"},
    {nameTariff: 'Базовий', isOsr: false,nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ №28 - лютий 2023 р', url: "/docx/com_offer/KP_28_23r_2.doc"},
    {nameTariff: 'Базовий', isOsr: true, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ №27 - березень 2023 р.', url: "/docx/com_offer/KP_27_23r_3.doc"},
    {nameTariff: 'Базовий', isOsr: false, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ №28 - березень 2023 р', url: "/docx/com_offer/KP_28_23r_3.doc"},
    {nameTariff: 'Базовий', isOsr: true, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ №27 - квітень 2023 р. ', url: "/docx/com_offer/KP_27_23r_4.doc"},
    {nameTariff: 'Базовий', isOsr: false, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ №28 - квітень 2023 р.', url: "/docx/com_offer/KP_28_23r_4.doc"},
    {nameTariff: 'Базовий', isOsr: true, payment: 1, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ №27-Ф-травень23', url: "/docx/com_offer/KP_27_23r_5.doc"},
    {nameTariff: 'Базовий', isOsr: false, payment: 1, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ №28-Ф-травень23', url: "/docx/com_offer/KP_28_23r_5.doc"},
    {nameTariff: 'Базовий', isOsr: true, payment: 1, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ №27-Ф-червень 2023', url: "/docx/com_offer/KP_27_23r_6.doc"},
    {nameTariff: 'Базовий', isOsr: false, payment: 1, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ №28-Ф-червень 2023', url: "/docx/com_offer/KP_28_23r_6.doc"},
    {nameTariff: 'Базовий', isOsr: true, payment: 1, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ №27-Ф-липень 2023', url: "/docx/com_offer/KP_27_23r_7.doc"},
    {nameTariff: 'Базовий', isOsr: false, payment: 1, nameCom: 'КОМЕРЦІЙНА ПРОПОЗИЦІЯ №28-Ф-липень 2023', url: "/docx/com_offer/KP_28_23r_7.doc"},
  ]

  const optionsActivity = ['Бізнес','Бюджетні','Колективні'];

  return (
    <>
      {theme === 'light' && <div className="mont-block"></div>}
      <TitleBlock title={'Комерційні пропозиції'} type={'Комерційні пропозиції за вільними цінами та універсальна послуга для клієнтів ТОВ «Львівенергозбут»'}/>

      <TitleBlock subtitle={'Оберіть потужність'} type={'Будь ласка, оберіть потужність'}/>
      <OfferPower checkList = {powerList} getValue = {getPowerValue} />
      {!!powerValue.length && 
      <>
      <TitleBlock subtitle={'Оберіть тип Вашої компанії'} type={'Будь ласка, спочатку оберіть тип Вашої компанії'}/>
      <ComOffersType typePower = {powerValue} typeCompany={companyType} getCompanyType = {getCompanyType}/>
      <Container ref = {comTitle} >
      {((powerValue === 'Вільна ціна' || powerValue === '> 50 кВт') && companyType === 'Бюджетні') ? <></> 
        : !!companyType.length && <Row><Col md={12}> <h3 className="comerc-title">Ваша комерційна пропозиція:</h3></Col>
        </Row>
        }
       </Container>
      {((powerValue === 'Вільна ціна' || powerValue === '> 50 кВт') && companyType === 'Бізнес') &&  
        <ComTarifPlans planList = {tarifUpperBusiness}/>
      }
      {(powerValue === 'Універсальна послуга' || powerValue === '≤ 50 кВт') && 
        <> 
        <ComTarifPlans planListLong = {tarifList}/>
          <Container>
          <Row><Col md={12}> <h3 className="comerc-title">Додаткові матеріали:</h3></Col>
          </Row>
          <Row className="download-block">
            <Col md={6} className="download-block__item">
              <ComDowload url={'/docx/com_offer/Dogovir_PYP_maluj_nepobytovuj.docx'} content = {'Договір про постачання електричної енергії споживачу'}/>
            </Col>
            <Col md={6} className="download-block__item">
              <ComDowload url={'/docx/com_offer/Zaiava-pryiednannia.doc'} content = {'Заява-приєднання до договору про постачання електричної енергії споживачу'}/>
            </Col>
          </Row>  
        </Container>
        </>
      }
      {(powerValue === 'Вільна ціна' || powerValue === '> 50 кВт') && 
        <Container>
          <Row><Col md={12}> <h3 className="comerc-title">Додаткові матеріали:</h3></Col>
          </Row>
        <Row className="download-block">
          <Col md={6} className="download-block__item">
            <ComDowload url={'/docx/com_offer/Dogovir_vilna_cina.pdf'} content = {'Договір про постачання електричної енергії споживачу'}/>
          </Col>
          <Col md={6} className="download-block__item">
            <ComDowload url={'/docx/com_offer/Zaiava-pryiednannia_do_dohovoru_pro_postachania_elektrychnoi_enerhii_spozhyvachu.doc'} content = {'Заява-приєднання до договору про постачання електричної енергії споживачу'}/>
          </Col>
          <Col md={6} className="download-block__item">
            <ComDowload url={'/page/indyv_kom_prop'} content = {'Індивідуальна комерційна пропозиція'}/>
          </Col>
          <Col md={6} className="download-block__item">
            <ComDowload url={'/docx/com_offer/Umovy_vstanovlennya_ta_koryguvannya_dogovirnyx_obsyagiv_postachannya_elektrychnoyi_energiyi.pdf'} content = {'Умови встановлення та коригування договірних обсягів постачання електричної енергії'}/>
          </Col>
        </Row>  
      </Container>
      }
      </> }
       <Green optionsActivity={optionsActivity}/>
    {/* <SliderNews/>  */}
  </>
  )
}

export default CommercialOffers