import React, {useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom';

const Protected = (props) =>{
    const navigate = useNavigate()
   let Comp =props.Comp
    useEffect(()=>{
        if(localStorage.getItem('user')){
         navigate("/register")
        }
     },[])

     return(
         <div>
          <Comp/>
         </div>
     )
}

export default Protected
     