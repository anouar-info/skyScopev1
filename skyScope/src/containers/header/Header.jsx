
import { useState } from 'react';
import {earth_nobg} from "../../assets"
import "./header.css";
const Header = () => {
  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage([1,"Email added successfully"]);
    } else if (!regEx.test(email) && email !== "") {
      setMessage([0,"Email is Not Valid"]);
    } else {
      setMessage([-1,""]);
    }
  };
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  const [message,setMessage]=useState([-1,""]);
  const [email,setEmail]=useState("");
  return (
  <div id="home" className="header section__padding" >
    <div className="header-content">
      <h1 className="gradient__text">Let&apos;s Explore the wonders of our universe</h1>
      <p className="simple__text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="header-content__input">
        <input type="email" placeholder="Enter Your Email Address" onChange={handleOnChange} />
        <button type="button" onClick={emailValidation} >Subscribe</button>
      </div>
      <div className='message'>
      {
      message[0]===0
        ?<p className=" red" >{message[1]}</p>
        :<p className=" green" >{message[1]}</p>
      }
      </div>
    </div>
       
    <div className="header-image">
      <img src={earth_nobg} alt="earth image" />
    </div> 
  </div>
    
  )
}
export default Header