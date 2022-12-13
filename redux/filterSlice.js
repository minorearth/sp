import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
    className: '',
    myClass: false,
    refreshItems: true,

    parallels: { '1': false, '2': false, '3': false, '4': false, '5': false, '6': false, '7': false, '8': false, '9': false, '10': false, '11': false }


  },
  reducers: {
    setfilter: (state, action) => {
      state.value = action.payload
    },
    setrefreshItems: (state, action) => {
      state.refreshItems = !state.refreshItems
    },
    setClassName: (state, action) => {
      state.className = action.payload
    },
    toggleMyclass: (state, action) => {
      state.myClass = action.payload
    },
    setParallels: (state, action) => {

      state.parallels[Object.keys(action.payload)[0]] = action.payload[Object.keys(action.payload)[0]]
      // console.log(state.parallels)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setfilter, setClassName, toggleMyclass, setParallels, setrefreshItems } = filterSlice.actions

export default filterSlice.reducer