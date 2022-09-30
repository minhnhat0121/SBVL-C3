import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import Question1 from '../Question1/Question1';
import Question2 from '../Question2/Question2';
import Question3 from '../Question3/Question3';
import Question4 from '../Question4/Question4';
import Question5 from '../Question5/Question5';
import Question6 from '../Question6/Question6';
import "./Exercise.scss"
function Exercise() {
   function linkExercise(e) {
   }
return (
   // <Container className='Exercise'>
   <Container className='Exercise'>
      <Carousel variant="dark" className='carosel'>
         <Carousel.Item onClick={linkExercise}>
            <div className='carosel-item'>
               <div className='carosel-content'>
                  <img src={'./images/questions1.png'} alt="" className='carosel-image' style={{width: "40%"}}/>
                  <h1 className='carosel-title'>Bài tập 1</h1>
                  <Question1></Question1>
               </div>
            </div>
         </Carousel.Item>
         <Carousel.Item>
            <div className='carosel-item'>
               <div className='carosel-content'>
                  <img src={'./images/questions2.png'} alt="" className='carosel-image' style={{width: "70%"}}/>
                  <h1 className='carosel-title'>Bài tập 2</h1>
                  <Question2></Question2>
               </div>
            </div>
         </Carousel.Item>
         <Carousel.Item>
            <div className='carosel-item'>
               <div className='carosel-content'>
                  <img src={'./images/questions3.png'} alt="" className='carosel-image' style={{width: "50%", marginTop: "-10px"}}/>
                  <h1 className='carosel-title'>Bài tập 3</h1>
                  <Question3></Question3>
               </div>
            </div>
         </Carousel.Item>
         <Carousel.Item>
            <div className='carosel-item'>
               <div className='carosel-content'>
                  <img src={'./images/questions4.png'} alt="" className='carosel-image' style={{width: "45%", marginTop: "-20px"}}/>
                  <h1 className='carosel-title' style={{marginTop: "-70px"}}>Bài tập 4</h1>
                  <Question4></Question4>
               </div>
            </div>
         </Carousel.Item>
         <Carousel.Item>
            <div className='carosel-item'>
               <div className='carosel-content'>
                  <img src={'./images/questions5.png'} alt="" className='carosel-image' style={{width: "46%"}}/>
                  <h1 className='carosel-title' style={{marginTop: "-13px"}}>Bài tập 5</h1>
                  <Question5></Question5>
               </div>
            </div>
         </Carousel.Item>
         <Carousel.Item>
            <div className='carosel-item'>
               <div className='carosel-content'>
                  <img src={'./images/questions6.png'} alt="" className='carosel-image' style={{width: "58%"}}/>
                  <h1 className='carosel-title ' style={{marginTop: "-25px"}}>Bài tập 6</h1>
               </div>
            </div>
         </Carousel.Item>
      </Carousel>
   </Container>
);
}

export default Exercise;