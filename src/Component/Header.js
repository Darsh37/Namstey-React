import { useState } from "react";
import { Logo_URL } from "../utils/Constants";
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';

const Header =()=>{
  const[isLoggedIn,setLoggedIn]= useState(true);
  console.log("render")
    return(
       <div className='header'>
        <div className='logo-container'>
          <img className='logo' src= {Logo_URL}/>
        </div>
        <div className='Nav-link'>
          <ul>
            <li href="/">Home</li>
            <li href="/abouts">About us</li>
            <li href="/contact">Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIn? (<button onClick={()=> setLoggedIn(false)}>
          LoggedIn
        </button>):
        (<Button onClick={()=> setLoggedIn(true)}>
          LoggedOut</Button>)}
       </div>
    );  
}

export default Header;