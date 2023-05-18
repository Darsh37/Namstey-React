import React from 'react';
import ReactDOM from "react-dom";
import Header from './Component/Header';
import Body from './Component/Body';


const AppLayout=()=>{
  // console.log(<Body/>)
    return(
    
    <div className='app'>
        <Header/>
        <Body></Body>
    </div>
    )
}

 ReactDOM.render((<AppLayout/>),document.getElementById("root"));

