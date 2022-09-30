import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../global.scss'
import FormFigure from './form'
import './questions1.scss'
import styled from 'styled-components'
function Question1() {
  const [show, setShow] = useState(false);
  const Container = styled.div`
    display: flex;
    padding: 20px;
`
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Giải bài tập
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          <span className='Modal-title'>
            <div class="fade-loading"></div>
            <span>Bài tập 1</span>
          </span>
          </Modal.Title>
        </Modal.Header>
        <Container>
          <Modal.Body>
            <img src={'./images/questions1.png'} alt="" className='image-questions1'/>
          </Modal.Body>
          <FormFigure></FormFigure>
        </Container>
      </Modal>
    </>
  );
}

export default Question1