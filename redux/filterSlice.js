import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: 'noth',
    className: 'noth'

  },
  reducers: {
    setfilter: (state, action) => {
      state.value = action.payload
    },    
    setClassName: (state, action) => {
      state.className = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setfilter, setClassName} = filterSlice.actions

export default filterSlice.reducer