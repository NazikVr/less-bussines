import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ServiceInputFile = ({show, count_f}) =>{
    let inputName = "files_img_"+count_f;
    let inputId = "file_number_"+count_f;
    let inputDel = "file_del_btn_"+count_f;
    let inputRow = "row_"+count_f;

    function delListDocFile(id){
       document.getElementById("row_"+id).remove();
       let  count = Number(count_f) - 1; 
       localStorage.setItem('count_f', count);
    }

    return (
        <>            
                {show&&<div id={inputRow}><Row> <Col md={6} className="header-green"><input type="file" name={inputName} id={inputId} accept="image/*, .pdf" /></Col><Col md={6} className="header-green"><button className="btn-submit" id={inputDel} onClick={() => delListDocFile(count_f) }>Відмінити </button></Col></Row></div>}

        </>
      )
    
};


  
export {ServiceInputFile};