import { createSlice } from '@reduxjs/toolkit'

 const UserSlice = createSlice({
  name: 'login',
  initialState: {
   email:'araa2016@gmail.com',
   password:'123456',
   isloged:false,
  },
  reducers: {
   login_user:(state , action)=>{
    if(action.payload.email == state.email && action.payload.password == state.password ){
        state.isloged =true;
        window.alert("loggin successfuly")
    }else{
        state.isloged =false;
    }
   }
  }
})
export const  {login_user} =UserSlice.actions;
export default UserSlice.reducer ;