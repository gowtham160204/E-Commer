import React, { useState } from 'react'
import { FaOpencart } from "react-icons/fa";
import './Login.scss'
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const[input1,setInput1] = useState("")
  const[password1,setPassword1] = useState("")
  // const[input1 , setInput1] = useState("")
  // const[password1 , setPassword1] = useState("")
 const handledata= () => {
  console.log(input1 , password1);
  
  if(password1 === '' ){
    toast.error("please Enter the paasword")
  }
  else if(input1 === ''){
    toast.error("please Enter the username")
  }
  else if(password1.length<=6){
    toast.warning("should be greater than 6")
  }
  else{
    toast.success("Data updated")
    localStorage.setItem("username",input1)
    localStorage.setItem("password",password1)
    window.location.href="/h"
  
}
 }
  // const handledata = () =>{
   

  return (
    <div>
        <div className='body'>
            <h1><FaOpencart />  doooo it</h1>
            <div className='logbox'>
              <h3 className='loghe'> LOGIN HERE</h3>
              <lable className='gmail'>UserName/Gmail id</lable>
              <input className='in1' type='text' placeholder='  Gmail'value={input1}
              onChange={(e)=> setInput1(e.target.value)}></input>
              <lable className='pass'> Password</lable>
              
            <input className='in2' type='password' placeholder=' hide in'value={password1}
        onChange={(e)=> setPassword1(e.target.value)}></input>
           <div className='sing'> <button className='btn'onClick={handledata}>sing up </button></div>
           
           <h3 className='reg'> Register </h3>
           <ToastContainer />
            </div>
        </div>
    </div>
  )
}

export default Login