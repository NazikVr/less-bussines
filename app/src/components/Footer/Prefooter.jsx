import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PrefooterBlock from "./PrefooterBlock";
import { forwardRef, useEffect, useState } from 'react';
import { getMenuList } from '../../Axios/getPage';
import { orderServices } from '../../utils/news';

const Prefooter = forwardRef((props, ref) => {

    const [menuList, setMenuList] = useState([]);

    useEffect (()=>{
        let active = false;
        getMenuList(`footer-menu-lez`).then((response)=>{
            const [data] = response['hydra:member'];
            const menu = data.menuItems;
    
            if(!active) {
                setMenuList(orderServices(menu));
            }
        });
        return () => {
            active = true;
        };
        
        },[])
        
     const [leftBlock] = menuList.filter(menu=>{
        return menu.slug === 'left-block';
     })
     const rightBlock = menuList.filter(menu=>{
        return menu.slug !== 'left-block';
     })

     const lastElements = menuList.filter(menu=>{
        return menu.orders === menuList.length || menu.orders === menuList.length - 1;
     })

  return (
    <section className="prefooter" id = 'mapmenu' ref = {ref}>
        <Container>
            <PrefooterBlock type={'client'} title={'Для Населення'}/>
            <PrefooterBlock type={'company'} title={'Для Компаній'}/>
            <Row>
                <Col xs={12}>
                    <h3 className="footer-head third">Про «Львівенергозбут»</h3>
                </Col>
                <Col md={6}>
                    <Row className="menu-nav">
                    {leftBlock && orderServices(leftBlock?.children).map((item)=>{
                        return <Col key={item.id} xs={4}><Link to={item.slug}>{item.name}</Link></Col>
                    })}
                    </Row>
                </Col>
                <Col md={6}>
                    <Row>
                        {rightBlock && rightBlock.map((link)=>{
                            if(link.orders !== menuList.length && link.orders !== menuList.length - 1){
                            return  <Col key={link.id} xs={4}>
                                <Link to={link.slug}>{link.name}</Link>
                                <ul>
                                    {link.children.length && orderServices(link.children).map((childLink)=>{
                                        return <li><Link to={childLink.slug}>{childLink.name}</Link></li>
                                    })}
                                </ul>
                             </Col>
                            } 
                            return <></> 
                        })}
                         <Col xs={4}>
                         {lastElements && lastElements.map((item)=>{
                            return  <><Link to={item.slug}>{item.name}</Link>
                                        <ul>
                                            {item.children.length && orderServices(item.children).map((childLink)=>{
                                                return <li><Link to={childLink.slug}>{childLink.name}</Link></li>
                                            })}
                                </ul></>
                            })}
                         </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
})

export default Prefooter