import React, {useState} from 'react'
import styled from 'styled-components';
import Location from './Location.jpg'

const Main = styled("div")``;

const DropDownContainer = styled("div")`
position:absolute;
left: 30px;  
width: 10.5em;
  margin: 0 auto;
  z-index: 3;
`;

const DropDownHeader = styled("div")`
  position:absolute;
  margin-bottom: 1em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #0a0a0a;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #0a0a0a;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
    z-index: 3;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

function BookNow() {

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <div>
     <div className='bookNow'>Book Appointment
     </div>
     <div className="formBook">
    <div className="form-body">
        <div className="name">
            <label className="form__labelBook" for="date"> Date/Time: </label>
            <input className="form__inputBook" type="text" id="date" />

            <Main className='main'>
            <p1>Locations:</p1>
            <DropDownContainer >
              <DropDownHeader onClick={toggling}>Auckland</DropDownHeader>
              {isOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    <ListItem>.</ListItem>
                    <ListItem>NZBlood Blood Bank</ListItem>
                    <ListItem>Unichem Eden Quarter Pharmacy</ListItem>
                    <ListItem>NZ Blood Service Epsom </ListItem>
                    <ListItem>Life Pharmacy - Mission Bay</ListItem>
                    <ListItem>NZ Blood Service North Shore</ListItem>

                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
          </Main>
          
        
          
                </div>
                </div>
     
    </div>

    <div class="row">
    <img className="location" src= {Location} alt="location" />
    </div>
    <button type="submit" class="btnBook"> Submit</button>
              
    </div>
  )
}

export default BookNow