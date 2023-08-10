import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import DownloadTarifItem from './DownloadTarifItem'

const DownloadTarifs = () => {

  const tarifList = [
    {from: 'з 01 січня 2021 року', to: 'по 30 вересня 2021 року включно', path: '/docx/taryfy_2020-2021(1).docx' },
    {from: 'з 01 квітня 2015 року', to: 'по 31 серпня 2015 року включно', path: '/docx/Taryfy_na_elektroenergiyu_shho_vidpuskayetsya_naselennyu_z_01_04_2015_po_31_08_2015.doc' },
    {from: 'з 01 березня 2017 року', to: 'по 31 грудня 2020 року включно', path: '/docx/taryfy_2017-2020.docx' },
    {from: 'з 01 вересня 2016 року', to: 'по 28 лютого 2017 року включно', path: '/docx/Taryfy_na_elektroenergiyu_shho_vidpuskayetsya_naselennyu_z_01_09_2016_po_28_02_2017.doc' },
    {from: 'з 01 березня 2016 року', to: 'по 31 серпня 2016 року включно', path: '/docx/Taryfy_na_elektroenergiyu_shho_vidpuskayetsya_naselennyu_z_01_03_2016_po_31_08_2016.doc' },
    {from: 'з 01 вересня 2015 року', to: 'по 29 лютого 2016 року включно', path: '/docx/Taryfy_na_elektroenergiyu_shho_vidpuskayetsya_naselennyu_z_01_09_2015_po_29_02_2016.doc' },
    {from: 'з 01 жовтня 2021 року', to: 'по 31 травня 2023 року включно', path: '/docx/taryfy_2021-2023.docx' },
  ]  

  return (
    <Container className='download-tarifs'>
        <Row>
             <Col md ={12}><h4 className='fixed-price-title'>Тарифи на електроенергію, <br />  що відпускається населенню</h4></Col>
        </Row>
        <Row>
             {tarifList.map((tarifItem,index)=>{
                return <DownloadTarifItem key= {index} dateFrom = {tarifItem.from} dateTo = {tarifItem.to} path = {tarifItem.path}/>
             })}
        </Row>
    </Container>
  )
}

export default DownloadTarifs