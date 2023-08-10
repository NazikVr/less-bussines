import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleBlock from "../../components/TitleBlock";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getServiceOnlineList } from "../../Axios/ServiceOnline/getServiceOnlinePobut";


const ServiceOnlinePobut = () => {
    const [listService, SetlistService] = useState([]);
    useEffect (()=>{
        getServiceOnlineList().then((response)=>{  
            SetlistService(response["hydra:member"]) 
        })
        
    },[])

    return (
        <>
           
                <Container>
                    <Row>
                        <Col>
                            <TitleBlock subtitle={`Для того, щоб скористатися послугою, натисніть на банер`}/>
                        </Col>
                    </Row>
                </Container>
            
            <section className="services">
            <Container>
                <Row className='justify-content-between mx-0'>
                    {listService.map((servicelist,index)=>{
                        const href = '/clients/service_online/'+servicelist.synonym
                            return <Col md={4} className='service-list-item d-flex align-items-center'>
                            <Link to ={href}>{servicelist.nameService}</Link>
                        </Col>
                    })}
                </Row>
            </Container>
            </section>
           
            
        </>   
    )

   
}

export default ServiceOnlinePobut
