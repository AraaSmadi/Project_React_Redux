import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { updateUser } from '../Action';
import { useParams } from 'react-router-dom';
import { fetchData } from '../Action';
const Update = () => {
  const {id}=useParams();
 
    const [selectedUser,setselectedUser]=useState({
      });

      const dispatch= useDispatch();
     
     let y={}
       const updateSelected=useSelector((state)=>state);
useEffect(()=>{
        dispatch(fetchData());
      },[dispatch])
 for(let i=0;i<updateSelected.length;i++){
 if(updateSelected[i].id==id){
    y['Product_name']=updateSelected[i].Product_name;
    y['Price']=updateSelected[i].Price;
    y['describtion']=updateSelected[i].describtion;
 }

 }
 
 useEffect(()=>{
        setselectedUser(y);
      },[updateSelected])
      
         console.log(selectedUser)
      const handleCklick=(e)=>{
        e.preventDefault();
        window.alert("Update successfuly");
     dispatch(updateUser(selectedUser,id));
    
      }

      const onChange=(e)=>{
        e.preventDefault();
        const value=e.target.value
        setselectedUser({...selectedUser,[e.target.name]:value})
       }

  return (
    <div class="container mt-5" style={{ backgroundColor:"#ceb3cb7a" , borderRadius:"30px" }}>

    <form class="m-5" style={{color:"white"  }}>
    <br/>
    <h1 class="m-5">Edit Product </h1>
        <div class="form-group pt-5">
            <label for="formGroupExampleInput mt-1"> Admin Name</label>
            <input type="text" class="form-control mt-2" id="formGroupExampleInput" placeholder="Enter Product name" name='Product_name' value={selectedUser.Product_name} onChange={onChange}/>
        </div>
        <div class="form-group pt-5">
            <label for="formGroupExampleInput2">Admin Email</label>
            <input type="email" class="form-control mt-2" id="formGroupExampleInput2" placeholder="Enter Price" name='Price' value={selectedUser.Price} onChange={onChange}/>
        </div>
        <div class="form-group pt-5">
            <label for="formGroupExampleInput2">Admin Address</label>
            <input type="text" class="form-control mt-2" id="formGroupExampleInput2 " placeholder="Enter  describtion" name='describtion' value={selectedUser.describtion} onChange={onChange}/>
        </div>
       <button type="submit" className="btn  mb-5 mt-5" onClick={handleCklick} style={{ backgroundColor:" #ceb3cb" , width:"200px", marginLeft:"500px" }}>edit </button>

    </form>

</div>
  )
}

export default Update
