import React, { useEffect, useState } from 'react'
import { button } from 'bootstrap'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { fetchData } from '../Action';
import {addUser} from '../Action';
import axios from 'axios';
// import { Connect } from 'react-redux/es/components/connect';
const Add = () => {
    const [Product_name, setName] = useState('');
    const [describtion, setdescribtion] = useState('');
    const [Price, setPrice] = useState('');
    const dispatch=useDispatch();
    const users=useSelector((state)=>state);
    console.log(users)
    const handleCklick=(e)=>{
      e.preventDefault();

      const userInfo={
        Product_name:Product_name,
        Price:Price,
        describtion:describtion
      }
      dispatch(addUser(Product_name,Price,describtion));
      window.alert("Add successfuly");
    }
   

    return (
        <div class="container " style={{ backgroundColor:"#ceb3cb7a" , borderRadius:"30px" }}>

            <form class="m-5" style={{color:"white"  }}>
                <br/>
                <h1 class="m-5">Add Product </h1>
                <div class="form-group pt-5 container ">
                    <label for="formGroupExampleInput mt-1"> Product Name:</label>
                    <input type="text" class="form-control mt-2" id="formGroupExampleInput" placeholder="Enter Product name " value={Product_name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div class="form-group pt-5">
                    <label for="formGroupExampleInput2">Price:</label>
                    <input type="number" class="form-control mt-2" id="formGroupExampleInput2" placeholder="Enter Price" value={Price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div class="form-group pt-5">
                    <label for="formGroupExampleInput2">Describtion:</label>
                    <textarea class="form-control mt-2" id="formGroupExampleInput2 " placeholder="describtion" value={describtion} onChange={(e)=>setdescribtion(e.target.value)}></textarea>
                </div>
               <button type="submit" className="btn  m-5" onClick={handleCklick} style={{ backgroundColor:" #ceb3cb" , width:"100px" }}>Add </button>

            </form>

        </div>
    )
}
export default  Add;

// export default Connect(null,{addUser})( Add);

