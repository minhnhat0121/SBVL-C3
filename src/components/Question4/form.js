import './questions4.scss'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FromFigure() {
   function handelMath(e) {
      e.preventDefault();
      console.log(e.target)
      var AB = document.querySelector(".paramAB")
      var A = document.querySelector(".paramA")
      var Q = document.querySelector(".paramQ")
      var BC = document.querySelector(".paramBC")
      var Ch = document.querySelector(".paramCh")
      var Th = document.querySelector(".paramTh")
      var result = document.querySelector(".result")
      var resultBold1 = document.querySelector(".result-bold1")
      var resultBold2 = document.querySelector(".result-bold2")
      var resultBold3 = document.querySelector(".result-bold3")
      var resultBold4 = document.querySelector(".result-bold4")
      result.classList.toggle("active")
      BC = parseFloat(BC.value) 
      AB = parseFloat(AB.value) 
      Q = parseFloat(Q.value) 
      A = parseFloat(A.value) 
      Ch = parseFloat(Ch.value) 
      Th = parseFloat(Th.value) 
      Th = (Th*Math.PI) / 180
      let YB = ((Q*AB)*(AB/2)) / AB
      console.log(YB)
      let result1 = ((Q*AB)-YB) / Math.sin(Th) 
      let XB = result1*Math.cos(Th)
      let Ntt = Math.sqrt((YB**2) + (XB**2))
      let result2 = Math.sqrt((4*Ntt)/(Math.PI*Ch))
      let result3 = Math.sqrt((4*(Ntt/2))/(Math.PI*Ch))
      let result4 = (result1/ (A * BC))
      resultBold1.insertAdjacentHTML("afterbegin", `<span>${result1}</span>`)
      resultBold2.insertAdjacentHTML("afterbegin", `<span>${result2}</span>`)
      resultBold3.insertAdjacentHTML("afterbegin", `<br>${result3}</br>`)
      resultBold4.insertAdjacentHTML("afterbegin", `<br>${result4}</br>`)
   }

  return (
   <Form>
   <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập AB</Form.Label>
         <Form.Control type="number" placeholder="Nhập AB" className='paramAB' />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập xích ma BC</Form.Label>
         <Form.Control type="number" placeholder="" className='paramBC' />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập xích ma chốt</Form.Label>
         <Form.Control type="number" placeholder="" className='paramCh' />
      </Form.Group>
   </Row>
   <Row className="mb-3 input-last">
      <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập q</Form.Label>
         <Form.Control type="number" placeholder="Nhập q" className='paramQ'/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập a</Form.Label>
         <Form.Control type="number" placeholder="Nhập a" className='paramA'/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label style={{color: "#003566", fontWeight: "bold"}}>Nhập theta</Form.Label>
         <Form.Control type="number" placeholder="Nhập theta" className='paramTh'/>
      </Form.Group>
   </Row>
   <Button variant="primary" type="submit" onClick={handelMath} className='button'>
      Xác nhận
   </Button>
   <hr className='line'></hr>
   <div className='result'>
      <h5 className='result-title'>Kết quả:</h5> 
      <p><i class="fa-solid fa-check icon"></i>Lực dọc thanh BC: <span className='result-bold1'></span> </p>
      <p><i class="fa-solid fa-check icon"></i>Đường kính chốt bu lông A: <span className='result-bold2'></span> </p>
      <p><i class="fa-solid fa-check icon"></i>Đường kính chốt bu lông B: <span className='result-bold3'></span> </p>
      <p><i class="fa-solid fa-check icon"></i>Bề dày thanh BC: <span className='result-bold4'></span> </p>
   </div>
   </Form>
  );
}

export default FromFigure;