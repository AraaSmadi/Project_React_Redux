import axios from "axios";


export const fetchData = () => {
    return async(dispatch,getstate)=>{
        const response=await axios.get("https://62c47caf7d83a75e39fb0ca3.mockapi.io/Shopping");
        
        dispatch({
            type:"FETCH_DATA",
            payload:response.data
        })
    }
}

export const addUser=(Product_name,Price,describtion)=>{
    window.location.href = "http://localhost:3000";
    return(dispatch)=>{
        axios.post('https://62c47caf7d83a75e39fb0ca3.mockapi.io/Shopping',{Product_name,Price,describtion})
        .then(response=>{
            console.log(response.data);
            dispatch({
                type:'ADD_USER',
                payload:response.data
            })
            .catch(error=>{
                console.log(error)
            });
        })
    }
}

export const updateUser = async(data,id) => {
    const response=await axios.put(`https://62c47caf7d83a75e39fb0ca3.mockapi.io/Shopping/${id}`,data)
    window.location.href = "http://localhost:3000";
    return (dispatch)=>{
        
           dispatch({
               type:'UPDATE_USER',
               payload:response.user
           })
  };
}

export const deleteUser = async(id) => {
    const response=await axios.delete(`https://62c47caf7d83a75e39fb0ca3.mockapi.io/Shopping/${id}`)
    window.location.href = "http://localhost:3000";
    return (dispatch)=>{
        
           dispatch({
               type:'DELETE_USER',
               payload:id
           })
  };
}

export const Check= (email,password ,islogged)=>{
    
    return (dispatch)=>{
if(email== "araa2016@gmail.com" && password=="123456"){
    islogged =true;
    window.location.href = "http://localhost:3000/Home";
 
}else{
    islogged =false;
}
    dispatch({
        type:'CHECK',
        payload:islogged
    })


}}
