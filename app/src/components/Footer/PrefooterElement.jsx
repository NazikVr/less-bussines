import React from 'react'
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PrefooterElement = ({ linkList, type }) => {

  const topElements = linkList.filter((link) => {
    return link.orders < 4; // get first 3 elements
  })

  const menu1 = linkList.filter((link) => {
    return !link.children.length && link.orders > 3 && link.orders < 7; // get next 3 elements without childs
  })

  const group = [...topElements, ...menu1];
  const menu2 = linkList.filter((link) => {
    return !group.includes(link); // get last elements
  })

  return (
    <Col md={6}>
      {type === 'electro' ? <h3 className="electro" ><img src='/img/lamp.svg' alt="" /> Електроенергія</h3>
        : <h3 className="gaz" ><img src='/img/gaz.svg' alt="" /> Природний газ</h3>}
      <Row>
        {topElements.map((link) => {
          console.log(topElements)
          if (link.children.length) {
            return <Col key={link.id} xs={4} className="text-end">
              <Col xs={12}><Link to={link.slug} className={type === 'electro' ? "btn-grin" : "btn-yellow"}>{link.name}</Link></Col>
              <Row>
                {link.children.map((childLink) => {
                  return <Col key={childLink.id} xs={6} className="my-2 foot-info">
                    <Link to={childLink.slug} className={type === 'electro' ? "btn-grin" : "btn-yellow"}>{childLink.name}</Link></Col>
                })}
              </Row>
            </Col>
          }
          else {
            return <Col key={link.id} xs={4} className="text-center">
              <Link to={link.slug} className={type === 'electro' ? "btn-grin" : "btn-yellow"}>{link.name}</Link></Col>
          }
        })}
      </Row>
      {/* <Row className="borderline">
        {menu1.map((link) => {
          return <Col key={link.id} xs={4}>
            <Link to={link.slug} >
              {link.name}
            </Link>
          </Col>
        })}
      </Row> */}
      <Row>
        {menu2.map((link, index, elements) => {
          if (!link.children.length && elements[index + 1]?.children?.length) {
            return <Col key={link.id} xs={4}>
              <Link to={link.slug}>{link.name}</Link>
              <br /><br />
              <Link to={elements[index + 1].slug}>{elements[index + 1].name}</Link>
              <ul>
                {elements[index + 1].children.map((childLink) => {
                  return <li><Link key={childLink.id} to={childLink.slug}>{childLink.name}</Link></li>
                })}
              </ul>
            </Col>
          }
          else if (link.orders !== linkList.length) {
            return <Col key={link.id} xs={4}>
              <Link to={link.slug}>{link.name}</Link>
              <ul>
                {link.children.map((childLink) => {
                  return <li><Link key={childLink.id} to={childLink.slug}>{childLink.name}</Link></li>
                })}
              </ul>
            </Col>
          }
          return <></>
        })}
      </Row>
    </Col>
  )
}

export default PrefooterElement