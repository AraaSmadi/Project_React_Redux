import { useSelector,useDispatch } from 'react-redux/es/exports';
import { fetchData } from '../Action';
import React, { useEffect, useState } from 'react'
import { deleteUser ,updateUser} from '../Action';
import {Link} from 'react-router-dom';

const Home = () => {
 const dispatch=useDispatch();
 const users=useSelector((state)=>state)
 console.log(users)
   useEffect(()=>{
     dispatch(fetchData());
   },[dispatch])
   
  return (
    <div  class="row ">
           {users.length>0 && users.map(el=>{
    return(
        
        <div className="card col-md-4 ">
        <div className="card-body m-1 ">
        
        <h3 className="mb-2"> {el.Product_name}</h3>
             <p className="card-text">Price : {el.Price}</p>
           
             <p className="card-text"> Describtion : { el.describtion}</p>
           

       </div>
       </div>
         )
      })} 
       
    
    </div>
  )
}

export default Home
