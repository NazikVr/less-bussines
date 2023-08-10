import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const TarifZone = ({listZone}) => {

  return (
        <Row>
            {listZone.map((zone, index)=>{
                let period;
                if(zone.period === 'Нічний'){
                    period = 'night';
                }
                if(zone.period === 'Денний' || zone.period === 'Напівпіковий'){
                  period = 'day';
                }
                if(zone.period === 'Піковий'){
                  period = 'pick';
                }

                return  <Col md={12} key={index}>
                            <div className="zone-type__inner">
                                <div className={"zone-type__period " + period}>
                                    <p>{zone.period}</p>
                                    {zone.periodList.map((per,ind)=>{
                                        return <p className={'zone-type__time t' + ind} key={ind}>{per}</p>
                                    })}
                                    
                                </div>
                                <div className={"zone-type__coef " + period}>{zone.coef}</div>
                                <div className="zone-type__container">
                                <div className={"zone-type__all " + period}>{zone.count}</div>
                                <div className={"zone-type__count"}> = </div>
                                <div className={"zone-type__pdvOff"}>{zone.pdvOff}</div>
                                <div className={"zone-type__count"}> + </div>
                                <div className={"zone-type__pdvOn"}>{zone.pdvOn}</div>
                                </div>
                        </div>
                    </Col>
                })}
        </Row>
    )   
}

export default TarifZone