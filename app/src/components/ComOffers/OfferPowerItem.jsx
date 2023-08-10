import React from 'react'
import Col from 'react-bootstrap/esm/Col'

const OfferPowerItem = ({idElem, idBlock, title, content, bold}) => {

  function handleTab (e){
    switch(e.target.id) {
      case "tab1":
        document.getElementById('tab3').checked = true;
        document.getElementById('tab2').checked = false;
        document.getElementById('tab4').checked = false;
        break;
      case "tab2":
        document.getElementById('tab4').checked = true;
        document.getElementById('tab1').checked = false;
        document.getElementById('tab3').checked = false;
        break;
      case "tab3":
        document.getElementById('tab1').checked = true;
        document.getElementById('tab2').checked = false;
        document.getElementById('tab4').checked = false;
        break;
      case "tab4":
        document.getElementById('tab2').checked = true;
        document.getElementById('tab1').checked = false;
        document.getElementById('tab3').checked = false;
        break;
      default:
        break;
    }
  }

  return (
    <Col className={"tab-inner _" + idElem} md={6} onChange={handleTab}>
        <input type="radio" id={"tab"+idElem} name={"tabs" + idBlock} value={title}/>
        <label htmlFor={"tab"+idElem} className={bold ? 'bold' : 'thin'}>{title}</label>
        {content &&
            <div className="tabcontent">
            {content.map((element,key)=>{
                return <p key = {key}>{element}</p>
            })}
        </div> 
        }
    </Col>
  )
}

export default OfferPowerItem