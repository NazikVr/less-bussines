import Col from "react-bootstrap/esm/Col"
// import { Link } from "react-router-dom"

const DownloadTarifItem = ({ dateFrom, dateTo, path }) => {

  return (<Col md={6} className="download-tarif-item" >
    <a href={path}>
      <p className="download-tarif-item__period">Період</p>
      <p>{dateFrom}</p>
      <p>{dateTo}</p>
      <img className="download-tarif-item__icon" src="/img/download-icon-2.svg" alt="icon" />
    </a>
  </Col>
  )
}

export default DownloadTarifItem