import TitleBlock from "../../components/TitleBlock";
// import SliderNews from "../../components/News/SliderNews";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import FixedPriceFirst from "../../components/TarifClients/FixedPriceFirst";
import FixedPriceSecond from "../../components/TarifClients/FixedPriceSecond";
import FixedPriceThird from "../../components/TarifClients/FixedPriceThird";
import DownloadTarifs from "../../components/TarifClients/DownloadTarifs";
import TarifOsr from "../../components/TarifClients/TarifOsr";

const TarifCli = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [, , theme] = useOutletContext();


  return (
    <>
      {theme === 'light' && <div className="mont-block"></div>}
      <TitleBlock title={'Тарифи на електроенергію'} type={'Для населення'} />
      <div className="attention-cli">
        <Container>
          <Row>
            <Col md={6} className="clitarif-attention">
              <h4>Зверніть увагу!</h4>
              <p> Постановою Кабінету Міністрів України № 544 від 30.05.2023 року внесені зміни до постанови Кабінету Міністрів України № 483
                від 05.06.2019 року «Про затвердження Положення про покладення спеціальних обов’язків на учасників ринку електричної енергії для
                забезпечення загальносуспільних інтересів у процесі функціонування ринку електричної енергії».
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="fixed-price">
        <TitleBlock subtitle={'Фіксовані ціни на електричну енергію для побутових споживачів'} />
        <FixedPriceFirst />
        <FixedPriceSecond />
        <FixedPriceThird />
      </section>
      <DownloadTarifs />
      <TarifOsr />
      {/* <SliderNews /> */}
    </>
  );
};

export default TarifCli;