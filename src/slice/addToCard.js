import { createSlice } from '@reduxjs/toolkit'

export const addToCard = createSlice({
  name: 'addToCard',
  initialState: {
   initialValue:[]
  },
  reducers: {
    addCard: (state,action) => {
       
    let allData =state.initialValue.find(item=>item.title===action.payload.title)
       

       if(allData){
        allData.quantity+=1
       }else{
        state.initialValue.push({...action.payload,quantity:1})

       }
 
 },

 increment:(state,action)=>{
  state.initialValue.map((item)=>{
   if(item.title ===action.payload.title){
    item.quantity+=1
   }
  })

 },

 decrement:(state,action)=>{
  state.initialValue.map((item)=>{
    if(item.title ===action.payload.title){
     

     if(item.quantity >1){
      item.quantity-=1
     }
    }
   })
 }
    
  },
})


export const {addCard,increment,decrement} = addToCard.actions

export default addToCard.reducer