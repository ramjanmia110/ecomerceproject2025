import { createSlice } from '@reduxjs/toolkit'

export const breadCumb = createSlice({
  name: 'breadcumbs',
  initialState: {
    currentvalue:"",
    previousvalue:""
  },
  reducers: {
    breadCount: (state,action) => {
        state.previousvalue =state.currentvalue
        state.currentvalue =action.payload
        
       
    
    }
    
  },
})


export const {breadCount} = breadCumb.actions

export default breadCumb.reducer