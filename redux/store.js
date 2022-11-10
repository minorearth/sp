import { configureStore } from '@reduxjs/toolkit'
import userdataReducer from './userdataSlice'

export default configureStore({
  reducer: {
    userdata: userdataReducer,
  },
})