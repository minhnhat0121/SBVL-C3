import './questions1.scss'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FromFigure() {
   function handelMath(e) {
      e.preventDefault();
      console.log(e.target)
      var P = document.querySelector(".paramP")
      var D = document.querySelector(".paramD")
      var A = document.querySelector(".paramA")
      var result = document.querySelector(".result")
      var resultBold1 = document.querySelector(".result-bold1")
      var resultBold2 = document.querySelector(".result-bold2")
      result.classList.toggle("active")
      P = parseFloat(P.value) 
      D = parseFloat(D.value) 
      A = parseFloat(A.value) 
      console.log("Gia tri cua P: ", P)
      console.log("Gia tri cua D: ", D)
      console.log("Gia tri cua P: ", A)
      var V = P / 4
      let result1 = V / ((Math.PI * ((D/10)**2))/4);
      let result2 = V / ((A/10)*(A/10))
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
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập d</Form.Label>
         <Form.Control type="number" placeholder="Nhập d" className='paramD' />
      </Form.Group>
   </Row>
   <Row className="mb-3 input-last">
      <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập a</Form.Label>
         <Form.Control type="number" placeholder="Nhập a" className='paramA'/>
      </Form.Group>
   </Row>
   <Button variant="primary" type="submit" onClick={handelMath} className='button'>
      Xác nhận
   </Button>
   <hr className='line'></hr>
   <div className='result'>
      <h5 className='result-title'><i class="fa-sharp fa-solid fa-pen-fancy"></i>Kết quả:</h5> 
      <p><i class="fa-solid fa-check icon"></i> Ứng suất cắt phát sinh trong mỗi bu lông: <span className='result-bold1'></span></p>
      <p><i class="fa-solid fa-check icon"></i> Ứng suất cắt trên mỗi mặt bóng mờ: <span className='result-bold2'></span></p>
   </div>
   </Form>
  );
}

export default FromFigure;