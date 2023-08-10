import React from 'react'
import { Link } from 'react-router-dom'

const ComDowload = ({url,content}) => {

  return (
    <Link to={url} target={'_blank'}>
        <p>{content}</p>
        <img src="/img/tarif-comer-download.svg" className="download-block__img" alt="download"/>
    </Link>
  )
}

export default ComDowload