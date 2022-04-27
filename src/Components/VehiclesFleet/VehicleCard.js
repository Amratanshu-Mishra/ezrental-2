import React from "react";

function VehicleCard(props){
return(
    <div  className={props.className}>
       <img id="carchoose" className={props.imgClassName} alt="loading" src={process.env.PUBLIC_URL + `${props.url}`}/>
    </div>
)
}
export default VehicleCard;