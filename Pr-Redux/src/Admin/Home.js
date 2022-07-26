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
   },[])

 
  return (
    <div  class="row ">
           {users.length>0 && users.map(el=>{
    return(
        
        <div className="card col-md-4 mt-3">
        <div className="card-body">
        
        <h3 className="mb-2">{el.Product_name}</h3>
             <p className="card-text">{el.Price}</p>
           
             <p className="card-text"> { el.describtion}</p>
           
             <Link to={'/edit/'+el.id} className="btn"  style={{ marginRight: "10px", backgroundColor:" #ceb3cb"  }}>Edit</Link>       
             <button className="btn"  onClick={() => {dispatch(deleteUser(el.id))}}  style={{ backgroundColor:" #ceb3cb"}}> Delete</button>

       </div>
       </div>
         )
      })} 
       
    
    </div>
  )
}

export default Home
