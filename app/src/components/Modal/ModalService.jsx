import React from 'react';
import Modal from 'react-bootstrap/Modal';

// Компонент модального вінка
const ModalService = ({show, handleClose, qr, shering}) => {

  return (
    <>
      <Modal show={show}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Заголовок модалки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal__content">
            
                  <ul>
                        <li>Відкрийте застосунок Дія на своєму смартфоні.</li>
                        <li>У правому верхньому кутку головного екрана знайдіть кнопку сканера QR-кодів і натисніть на неї.</li>
                        <li>Наведіть камеру смартфона на QR-код праворуч.</li>
                        {shering? <li>Підтвердьте передачу копій цифрових документів у застосунку Дія.</li> : <li>Підтвердьте підписання цифрових документів у застосунку Дія.</li>}
                        
                    </ul>
            
          </div>
          <div className="modal__qr">
            <img src={qr} alt='qr-diya' width={300} height={300}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
};

export default ModalService;
