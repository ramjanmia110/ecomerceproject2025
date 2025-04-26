import { configureStore } from '@reduxjs/toolkit'
import breadCumb from './slice/breadCumb'
import addToCard from './slice/addToCard'

export default configureStore({
  reducer: {
    countNumber: breadCumb,
    cardNumber:addToCard,
  },
})