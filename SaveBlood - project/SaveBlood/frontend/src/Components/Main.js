import React from 'react'
import Logo from './Logo.png'
import Location from './Location.jpg'
import Button from 'react-bootstrap/Button';


function Main() {
  const nameUser = localStorage.getItem('name');
  const resultQuiz = localStorage.getItem ('quizResult')
  return (
  
    <div>
    <div className="imgLogoQuiz">
      <img src={Logo} alt="logo" />
      </div>


    <div className="titleQuiz">Hello {nameUser},
    </div>
    
    <div className="textQuiz">
    your donation of blood or plasma can help save up three lives.
    </div>
    <div className="titleQuiz"> {resultQuiz}
    </div>

    <div class="col">
      <Button className="quizMain" variant="danger" href="/quiz">Quiz - Eligible to donate</Button>{' '}
      </div>
    <div class="row">
    <img className="locationMain" src= {Location} alt="location" />
    </div>
    <div class="row booking2 ">
    <Button className="bookNow2"  href="/booknow">
        Book Now
      </Button>{' '}
      </div>
    

</div>
   
    
    
  )
}

export default Main