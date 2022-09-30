import './questions6.scss'
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
      var Fab = document.querySelector(".paramFAB")
      var Fcd = document.querySelector(".paramFCD")
      var result = document.querySelector(".result")
      var resultBold1 = document.querySelector(".result-bold1")
      var resultBold2 = document.querySelector(".result-bold2")
      var resultBold3 = document.querySelector(".result-bold3")
      var resultBold4 = document.querySelector(".result-bold4")
      result.classList.toggle("active")
      P = parseFloat(P.value) 
      Fab = parseFloat(Fab.value) 
      Fcd = parseFloat(Fcd.value) 
      A = parseFloat(A.value) 
      B = parseFloat(B.value) 
      let result2 = (P*A) / (A + B)
      let result1 = (P-result2)
      let result3 = ((result1)/(Fab*100))
      let result4 = (result2/(Fcd*100))
      console.log(Fab)
      resultBold1.insertAdjacentHTML("afterbegin", `<span>${result1}</span>`)
      resultBold2.insertAdjacentHTML("afterbegin", `<span>${result2}</span>`)
      resultBold3.insertAdjacentHTML("afterbegin", `<br>${result3}</br>`)
      resultBold4.insertAdjacentHTML("afterbegin", `<br>${result4}</br>`)
   }

  return (
   <Form>
   <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập F</Form.Label>
         <Form.Control type="number" placeholder="Nhập F" className='paramF' />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập d</Form.Label>
         <Form.Control type="number" placeholder="Nhập d" className='paramD' />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập P</Form.Label>
         <Form.Control type="number" placeholder="Nhập P" className='paramP' />
      </Form.Group>
   </Row>
   <Row className="mb-3 input-last">
      <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập Q</Form.Label>
         <Form.Control type="number" placeholder="Nhập Q" className='paramQ'/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập a</Form.Label>
         <Form.Control type="number" placeholder="Nhập a" className='paramA'/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập b</Form.Label>
         <Form.Control type="number" placeholder="Nhập b" className='paramB'/>
      </Form.Group>
   </Row>
      <Row>
      <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập Theta</Form.Label>
         <Form.Control type="number" placeholder="Nhập Theta" className='paramTheta'/>
      </Form.Group>
      </Row>
   <Button variant="primary" type="submit" onClick={handelMath} className='button'>
      Xác nhận
   </Button>
   <hr className='line'></hr>
   <div className='result'>
      <h5 className='result-title'>Kết quả:</h5> 
      <p><i class="fa-solid fa-check icon"></i>Lực dọc trong thanh AB: <span className='result-bold1'></span> </p>
      <p><i class="fa-solid fa-check icon"></i>Lực dọc trong thanh CD: <span className='result-bold2'></span> </p>
      <p><i class="fa-solid fa-check icon"></i>Ứng suất phát sinh trong thanh AB: <span className='result-bold3'></span> </p>
      <p><i class="fa-solid fa-check icon"></i>Ứng suất phát sinh trong thanh CD: <span className='result-bold4'></span> </p>
   </div>
   </Form>
  );
}

export default FromFigure;