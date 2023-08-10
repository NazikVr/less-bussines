import { Link } from 'react-router-dom';

const ConditionItem = ({url,name,text}) => {
  return (
    <Link to={url} className="download-link" target={'_blank'}>
      <img src='/img/download-icon.svg' alt=""/>
      <p className="name-link">{name}</p>
      <p className="fs-6">{text}</p>
    </Link>
  )
}

export default ConditionItem