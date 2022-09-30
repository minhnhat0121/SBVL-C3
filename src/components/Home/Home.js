import React from 'react';
import Container from "../styled/Container.styled.js"
import './home.scss'
import { Link } from "react-router-dom"

function Home() {

   return (
      <React.Fragment>
         <Container className='home-container'>
            <div className='home'>
               <img src={"./images/background.jpg"} alt="" className='home-image' />
               <div className='home-content'>
                  <h1 className='home-title'>Sức bền vật liệu</h1>
                  <div className="typed-animation home-desc">
                     <h1 className="typed-out">Chương 3:  Thanh Xoắn Chịu Cắt</h1>
                  </div>
                  <Link to="/link" className='home-button'>Get Started</Link>
                  <div class="flip-animation">
                     <span>G</span>
                     <span>o</span>
                     <span>o</span>
                     <span>d</span>
                     <span> </span>
                     <span>l</span>
                     <span>u</span>
                     <span>c</span>
                     <span>k</span>
                  </div>
               </div>
               {/* <img className='home-image' src={"./images/illustration-mockups.svg"} alt=""/> */}
            </div>
         </Container>
      </React.Fragment>
   )
}
export default Home