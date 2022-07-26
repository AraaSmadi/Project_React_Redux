
import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { Check } from '../Action';
import {login_user} from '../Slice/LoginSlice';
export default function Login() {

    const [Data, setData] = useState({
      email:'',
      password:''
    });
   
  const Handlechange = (e)=>{
    e.preventDefault();
    const value = e.target.value;
    setData({...Data ,[e.target.name]:value})
  }
    const dispatch=useDispatch();
    const users=useSelector((state)=>state);
    console.log(users)
    const handleClick=(e)=>{
      e.preventDefault();
      // dispatch(Login(email,password,islogged));
      dispatch(login_user(Data));
      console.log(Data);
    }

  return (

    <div class="container mt-5">
        <form>
    <div class="form-group ">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={Handlechange} required/>
     
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={Handlechange} required/>
    </div>
    <br/>
    <button type="submit" class="btn" onClick={handleClick} style={{ backgroundColor:" #ceb3cb" }}>Login</button>
  </form>
 
</div>
  )
}
