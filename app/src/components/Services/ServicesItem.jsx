import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const ServicesItem = ({text,scroll}) => {
  return (
    <Col md={4} className='service-list-item d-flex align-items-center' onClick={scroll}>
      <Link to ='#'>{text}</Link>
    </Col>
  )
}

export default ServicesItem;