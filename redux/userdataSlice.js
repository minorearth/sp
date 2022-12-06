import { createSlice } from '@reduxjs/toolkit'

export const userdataSlice = createSlice({
  name: 'userdata',
  initialState: {
    access: false,
    person: 'noth',
    identityPassed: false,

  },
  reducers: {
    setaccess: (state, action) => {
      state.access = action.payload
    },    
    setidentity: (state, action) => {
      state.identityPassed = action.payload
    },    
    setperson: (state, action) => {
      state.person = action.payload
    },    

  },
})

// Action creators are generated for each case reducer function
export const { setaccess,setidentity,setperson,setauthpassed } = userdataSlice.actions

export default userdataSlice.reducer