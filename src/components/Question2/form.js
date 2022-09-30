import './questions2.scss'
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
      var D1 = document.querySelector(".paramD1")
      var D2 = document.querySelector(".paramD2")
      var result = document.querySelector(".result")
      var resultBold1 = document.querySelector(".result-bold1")
      var resultBold2 = document.querySelector(".result-bold2")
      result.classList.toggle("active")
      P = parseFloat(P.value) 
      D1 = parseFloat(D1.value) 
      D2 = parseFloat(D2.value) 
      A = parseFloat(A.value) 
      B = parseFloat(B.value) 
      let Ncd = (P*A*0.1) / (0.1*B*(Math.sqrt(2) / 2))
      let Ntt = Math.sqrt((Ncd**2) + (P**2))
      let result1 = Ncd / ((Math.PI * ((0.1*D1)**2))/4);
      let result2 = (Ntt/2) / ((Math.PI*((D2/10)**2))/4)
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
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập d1</Form.Label>
         <Form.Control type="number" placeholder="Nhập d1" className='paramD1' />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập d2</Form.Label>
         <Form.Control type="number" placeholder="Nhập d2" className='paramD2' />
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
      <p><i class="fa-solid fa-check icon"></i>Ứng suất pháp phát sinh trong thanh CD: <span className='result-bold1'></span> </p>
      <p><i class="fa-solid fa-check icon"></i>Ứng suất tiếp sinh trong chốt B: <span className='result-bold2'></span> </p>
   </div>
   </Form>
  );
}

export default FromFigure;