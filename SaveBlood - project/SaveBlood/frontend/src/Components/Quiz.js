import React from 'react'
import Logo from './Logo.png'


function Quiz() {
    return (

        <div>
            <div className="imgLogoQuiz">
                <img src={Logo}
                    alt="logo"/>
            </div>
            <div className="titleQuiz">Am I eligible to become a Donor ?
            </div>

            <div className="textQuiz">
                In order to donate blood, plasma or platelets, you must pass a list of criteria to ensure that your donation is safe
            </div>
            <div>
                <form className='formQuiz'>
                    <h3 className='textForm'>your age?
                    </h3>
                    <label>
                        under 18
                        <input className='radioForm' name="age" type="radio"/>
                    </label>
                    <label>
                        above 18
                        <input className='radioForm' name="age" type="radio"/>
                    </label>

                    <h3 className='textForm'>your weight?
                    </h3>
                    <label>
                        under 51kg
                        <input className='radioForm' name="weight" type="radio"/>
                    </label>
                    <label>
                        over 51kg
                        <input className='radioForm' name="weight" type="radio"/>
                    </label>


                    <h3 className='textForm'>your height?
                    </h3>
                    <label>
                        under 151cm
                        <input className='radioForm' name="height" type="radio"/>
                    </label>
                    <label>
                        over 151cm
                        <input className='radioForm' name="height" type="radio"/>
                    </label>


                    <h3 className='textForm'>have you had a tattoo or piercing in the last 3 months?
                    </h3>
                    <label>
                        yes
                        <input className='radioForm' name="tattoo" type="radio"/>
                    </label>
                    <label>
                        no
                        <input className='radioForm' name="tattoo" type="radio"/>
                    </label>

                    <h3 className='textForm'>have you been pregnant or given in the last 9 months?
                    </h3>
                    <label>
                        yes
                        <input className='radioForm' name="pregnant" type="radio"/>
                    </label>
                    <label>
                        no
                        <input className='radioForm' name="pregnant" type="radio"/>
                    </label>

                    <h3 className='textForm'>have you taken antibiotics in the last seven days?
                    </h3>
                    <label>
                        yes
                        <input className='radioForm' name="antibiotics" type="radio"/>
                    </label>
                    <label>
                        no
                        <input className='radioForm' name="antibiotics" type="radio"/>
                    </label>

                </form>
            </div>

            <button type="submit" className="btnQuiz">
                Submit
            </button>

        </div>


    )
}

export default Quiz
