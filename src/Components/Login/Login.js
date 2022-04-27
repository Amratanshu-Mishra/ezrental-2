import React, {useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import Buttons from "../Button/Buttons";
import axios from "axios"
import home from "../Home/Home"

const Login = () => {

    const navigate = useNavigate()
   
    useEffect(()=>{
        if(localStorage.getItem('user')){
         navigate("/")
        }
     },[])


    const [user,setUser]=useState({
        
        email: "",
        password: ""
        
    })
 
    const handleChange =e => {
       const { name, value } =e.target
      
      setUser({
          ...user,
          [name]: value
      })   
 
 }
 const login =() =>{
    axios.post("http://localhost:9002/login", user)
   

    .then(res => alert(res.data.message))
    
    .then( localStorage.setItem('user', JSON.stringify(user)));
    navigate('/')
   
 }

    return (
       
        <div className="login ">
            {/* {console.log(user)} */}
            <h1> <img className="img1" src={'/images/carbg.png'}/>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} ></input>
            <div className="d-grid gap-2 btn btn-warning logbtn"  onClick={login}>Login</div>

            
            <div>or</div>
           
            <Buttons name="Register" className="d-grid gap-2 btn btn-warning logbtn " />
        </div>
        
    )
}

export default Login