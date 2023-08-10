import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { getMenuList } from '../../Axios/getPage';
import { orderServices } from '../../utils/news';
import PrefooterElement from './PrefooterElement';


const PrefooterBlock = ({ title, type }) => {

  const [menuElectro, setMenuElectro] = useState([]);
  const [menuGaz, setMenuGaz] = useState([]);

  useEffect(() => {
    let active = false;
    getMenuList(`footer-menu-${type}`).then((response) => {
      const [data] = response['hydra:member'];
      const [electro, gaz] = data.menuItems;

      if (!active) {
        setMenuElectro(orderServices(electro.children));
        setMenuGaz(orderServices(gaz.children));
      }
    });
    return () => {
      active = true;
    };
  }, [type])

  return (
    <Row>
      <Col xs={12}>
        <h3 className="footer-head">{title}</h3>
      </Col>
      <PrefooterElement linkList={menuElectro} type={'electro'} />
      <PrefooterElement linkList={menuGaz} type={'gaz'} />

    </Row>
  )
}

export default PrefooterBlock