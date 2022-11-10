import { createSlice } from '@reduxjs/toolkit'

export const userdataSlice = createSlice({
  name: 'userdata',
  initialState: {
    value: 'noth',
  },
  reducers: {
    setaccess: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setaccess } = userdataSlice.actions

export default userdataSlice.reducer