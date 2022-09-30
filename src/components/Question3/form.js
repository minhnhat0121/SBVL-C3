import './questions3.scss'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FromFigure() {
   function handelMath(e) {
      e.preventDefault();
      console.log(e.target)
      var P = document.querySelector(".paramP")
      var A = document.querySelector(".paramA")
      var B = document.querySelector(".paramB")
      var C = document.querySelector(".paramC")
      var result = document.querySelector(".result")
      var resultBold1 = document.querySelector(".result-bold1")
      var resultBold2 = document.querySelector(".result-bold2")
      result.classList.toggle("active")
      P = parseFloat(P.value) 
      C = parseFloat(C.value) 
      A = parseFloat(A.value) 
      B = parseFloat(B.value) 
      let result1 = (P * (3/5)) / (B * C)
      let result2 = (P * (4/5)) / (A * C)
      resultBold1.insertAdjacentHTML("afterbegin", `<br>${result1}</br>`)
      resultBold2.insertAdjacentHTML("afterbegin", `<br>${result2}</br>`)
   }

  return (
   <Form>
   <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập P</Form.Label>
         <Form.Control type="number" placeholder="Nhập P" className='paramP'/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập c</Form.Label>
         <Form.Control type="number" placeholder="Nhập c" className='paramC' />
      </Form.Group>
   </Row>
   <Row className="mb-3 input-last">
      <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập a</Form.Label>
         <Form.Control type="number" placeholder="Nhập a" className='paramA'/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập b</Form.Label>
         <Form.Control type="number" placeholder="Nhập b" className='paramB'/>
      </Form.Group>
   </Row>
   <Button variant="primary" type="submit" onClick={handelMath} className='button'>
      Xác nhận
   </Button>
   <hr className='line'></hr>
   <div className='result'>
      <h5 className='result-title'>Kết quả:</h5> 
      <p><i class="fa-solid fa-check icon"></i>Ứng suất pháp tác động lên cạnh CD: <span className='result-bold1'></span> </p>
      <p><i class="fa-solid fa-check icon"></i>Ứng suất pháp tác động lên cạnh DE: <span className='result-bold2'></span> </p>
   </div>
   </Form>
  );
}

export default FromFigure;