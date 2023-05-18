import { useState } from "react";
import { Logo_URL } from "../utils/Constants";

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
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIn? (<button>
          LoggedIn
        </button>):(<button>LoggedOut</button>)}
       </div>
    );  
}

export default Header;