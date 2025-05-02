import { createSlice } from '@reduxjs/toolkit'

export const addToCard = createSlice({
  name: 'addToCard',
  initialState: {
  
  initialValue:localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')):[]
  },
  reducers: {
    addCard: (state,action) => {
       
    let allData =state.initialValue.find(item=>item.title===action.payload.title)
       

       if(allData){
        allData.quantity+=1
       }else{
        state.initialValue.push({...action.payload,quantity:1})

       }


       localStorage.setItem('cart',JSON.stringify(state.initialValue))
 
 },

 increment:(state,action)=>{
  state.initialValue.map((item)=>{
   if(item.title ===action.payload.title){
    item.quantity+=1
   }
  })

  localStorage.setItem('cart',JSON.stringify(state.initialValue))

 },

 decrement:(state,action)=>{
  state.initialValue.map((item)=>{
    if(item.title ===action.payload.title){
     

     if(item.quantity >1){
      item.quantity-=1
     }
    }
   })

   localStorage.setItem('cart',JSON.stringify(state.initialValue))
 },

 deleteProduct:(state,action)=>{


  state.initialValue.map((item,index)=>{
    if(item.title === action.payload.title){
      state.initialValue.splice(index,1)
    }
  })

  localStorage.setItem('cart',JSON.stringify(state.initialValue))

 }
    
  },
})


export const {addCard,increment,decrement,deleteProduct} = addToCard.actions

export default addToCard.reducer