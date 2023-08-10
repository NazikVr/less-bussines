import React, { forwardRef, useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import NavigationElementTab from './NavigationElementTab';
import { getMenuList } from '../../Axios/getPage';
import { orderServices } from '../../utils/news';
import { useOutletContext } from 'react-router-dom';

const NavigationElement = forwardRef((props, ref) => {

  const [menuElectro, setMenuElectro] = useState([]);
  const [menuGaz, setMenuGaz] = useState([]);


  useEffect(() => {
    let active = false;
    getMenuList(`top-menu-${props.type}`).then((response) => {
      const [data] = response['hydra:member'];
      const [electro, gaz] = data.menuItems;

      if (!active) {
        setMenuElectro(
          [
            {
              id: 1,
              children: [],
              imageUrl: '/media/64a548a8e0d9c_car.svg',
              name: '"Постачання"',
              slug: '/condition-electric'
            },
            {
              id: 2,
              children: [],
              name: 'Загальні умови електропостачання',
              slug: '/condition-electric',
              orders: 7
            },
            {
              id: 3,
              children: [],
              // imageUrl: '/media/64a548a8e0d9c_car.svg',
              name: 'Інформація для клієнтів',
              slug: '/client-info',
              orders: 7
            },
            {
              id: 4,
              children: [],
              // imageUrl: '/media/64a548a8e0d9c_car.svg',
              name: 'Приклад роз’яснення рахунку за електричну енергію',
              slug: '/example',
              orders: 7
            },
            {
              id: 5,
              children: [],
              // imageUrl: '/media/64a548a8e0d9c_car.svg',
              name: 'Нормативні документи',
              slug: '/lawmaking',
              orders: 7
            },
            {
              id: 6,
              children: [],
              // imageUrl: '/media/64a548a8e0d9c_car.svg',
              name: 'Електробезпека',
              slug: '/electro-service',
              orders: 7
            },
            {
              id: 7,
              children: [],
              // imageUrl: '/media/64a548a8e0d9c_car.svg',
              name: 'Порядок подання та розгляду електропостачальником звернень, скарг, претензій',
              slug: '/submission-procedure',
              orders: 7
            },
            // {
            //   id: 8,
            //   children: [],
            //   // imageUrl: '/media/64a548a8e0d9c_car.svg',
            //   name: 'Про нас',
            //   slug: '/',
            //   orders: 7,
            //   onclick: () => {
            //     console.log('1111111')
            //     props.sliderContext?.slideTo(2)
            //   }
            // },
            {
              id: 9,
              children: [],
              // imageUrl: '/media/64a548a8e0d9c_car.svg',
              name: 'Контакти',
              slug: '/comunication',
              orders: 7
            },
          ]
        );
        setMenuGaz([
          {
            id: 1,
            children: [],
            imageUrl: '/media/64a548a8e0d9c_car.svg',
            name: '"Постачання"',
            slug: '/gas'
          },
          {
            id: 2,
            children: [],
            // imageUrl: '/media/64a548a8e0d9c_car.svg',
            name: 'Постачання газу',
            slug: '/gas',
            orders: 7
          },
          // {
          //   id: 3,
          //   children: [],
          //   // imageUrl: '/media/64a548a8e0d9c_car.svg',
          //   name: 'Про нас',
          //   slug: '/',
          //   orders: 7,
          //   onclick: () => {
          //     console.log('1111111')
          //     props.sliderContext?.slideTo(2)
          //   }
          // },
          {
            id: 4,
            children: [],
            // imageUrl: '/media/64a548a8e0d9c_car.svg',
            name: 'Контакти',
            slug: '/comunication',
            orders: 7
          },
        ]);
      }
    });


    console.log(props.type);
    return () => {
      active = true;
    };
  }, [props.type, props.sliderContext])

  return (
    <div className={`top-navigation ${props.type}`} ref={ref}>
      <div className="top-navigation__close" onClick={() => props.handleClass(ref, props.type)}>
        <img src='/img/close-menu.svg' alt="" />
      </div>
      <Tab.Container className="tabs" defaultActiveKey="first">
        <Nav className="tabs__title">
          {/* <Nav.Item>
            <Nav.Link eventKey="first" className='tabs__title-electro'>Електроенергія</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second" className='tabs__title-gaz'>Природний Газ</Nav.Link>
          </Nav.Item> */}
        </Nav>
        <Tab.Content>
          {
            (props.type === 'company') &&
            <Tab.Pane eventKey="first" className="tabs__electro">
              <NavigationElementTab ref={ref} handleClass={props.handleClass} typeClass={props.type} links={menuElectro} />
            </Tab.Pane>
          }
          {
            (props.type === 'client') &&
            <Tab.Pane eventKey="first" className="tabs__gaz">
              <NavigationElementTab ref={ref} handleClass={props.handleClass} typeClass={props.type} links={menuGaz} />
            </Tab.Pane>
          }
        </Tab.Content>
      </Tab.Container>
    </div>
  )
});

export default NavigationElement