import React from 'react'
import Logo from './Logo.png'


function Quiz() {
  return (
  
    <div>
    <div className="imgLogoQuiz">
      <img src={Logo} alt="logo" />
      </div>


    <div className="titleQuiz">Am I eligible to become a Donor ?
    </div>
    
    <div className="textQuiz">
    In order to donate blood, plasma or platelets, you must pass a list of criteria to ensure that your donation is safe
    </div>
    <div>
    <fieldset className='formQuiz'>
    <legend className='textForm'>your age? </legend>
                <input 
                    type="radio"
                    id="<18"
                    name="age"
                    value="<18"
                    
                />
                <label className='label' htmlFor="<18"> under 18</label>
               
                <br />
                <input 
                type="radio"
                id=">18"
                name="age"
                value="no"
                
            />
            <label className='label' htmlFor="no">over 18</label>
           
            <br />
            <br></br>

            <legend className='textForm'>your weight? </legend>
            <input 
                type="radio"
                id="<51"
                name="weight"
                value="<51"
                
            />
            <label className='label' htmlFor="<51"> under 51kg</label>
           
            <br />
            <input 
            type="radio"
            id=">51"
            name="weight"
            value="no"
            
        />
        <label className='label' htmlFor="no">over 51kg</label>
       
        <br />
        <br></br>

                <legend className='textForm'>your height? </legend>
                <input 
                    type="radio"
                    id="<151cm"
                    name="height"
                    value="yes"
                    
                />
                <label className='label' htmlFor="<151cm">under 151cm</label>
               
                <br />
                <input 
                type="radio"
                id=">151cm"
                name="antibiotics"
                value="no"
                
            />
            <label className='label' htmlFor=">151cm"> over 151cm</label>
           
            <br />
            <br></br>

            <legend className='textForm'>have you had a tattoo or piercing in the last 3 months? </legend>
            <input 
            type="radio"
            id="yes"
            name="tattoo"
            value="yes"
            
        />
        <label className='label' htmlFor="yes">yes</label>
       
        <br />
        <input 
        type="radio"
        id="no"
        name="tattoo"
        value="no"
        
    />
    <label className='label' htmlFor="no">no</label>
   
    <br />

    <br></br>

    <legend className='textForm'>have you been pregnant or given in the last 9 months?</legend>
    <input 
    type="radio"
    id="yes"
    name="pregnant"
    value="yes"
    
/>
<label className='label' htmlFor="yes">yes</label>

<br />
<input 
type="radio"
id="no"
name="pregnant"
value="no"

/>
<label className='label' htmlFor="no">no</label>

<br />
                
</fieldset>
</div>
<button type="submit" class="btnQuiz"> Submit</button>

</div>
   
    
    
  )
}

export default Quiz