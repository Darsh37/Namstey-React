import React from "react"
import "./Shimmer.css"


const ShimmerEffect=()=>{
    return( 
      <div className="shimmer-effect">
        {Array(8).fill("").map((e)=>(
          <div className="rest-card-shimmer-effect"> 
          <div className="menu-details-shimmer"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            </div>
        ))
        }

     </div> 
    )
}
export default ShimmerEffect;