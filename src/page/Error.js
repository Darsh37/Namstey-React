import { useRouteError } from "react-router-dom";

const Error =()=>{
    const error = useRouteError();
    return(
        <div className="errorpage" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <h1>{error.status}:{error.statusText}</h1>
            <h1>Ooops! This page could not be found</h1>
            <h3>SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</h3>
        </div>
    )
}

export default Error;