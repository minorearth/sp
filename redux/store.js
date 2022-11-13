import { configureStore } from '@reduxjs/toolkit'
import userdataReducer from './userdataSlice'
import filterReducer from './filterSlice'

export default configureStore({
  reducer: {
    userdata: userdataReducer,
    filter: filterReducer
  },
})