
import { createSlice } from "@reduxjs/toolkit"
const initialState={value:0}
const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
       token:(state,action)=>{state.value=action.payload}

        //token:(state,action)=>{state.value=console.log(action.payload)}

        
    }
    
})


export const{token}=counterSlice.actions
console.log(token,+"44444444444444");

export default counterSlice.reducer