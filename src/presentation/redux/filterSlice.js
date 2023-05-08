import { createSlice } from '@reduxjs/toolkit'



export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: 'Сегодня',
    className: '',
    myClassToggle: false,
    refreshItems: true,
    parallels: { '1': true, '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true, '10': true, '11': true },

  },

  reducers: {
    setfilter: (state, action) => {
      state.value = action.payload
      state.refreshItems = !state.refreshItems
    },
    setrefreshItems: (state) => {
      state.refreshItems = !state.refreshItems
    },
    setClassName: (state, action) => {
      state.className = action.payload
      state.refreshItems = !state.refreshItems
    },
    toggleMyclass: (state, action) => {
      state.myClassToggle = action.payload
      state.refreshItems = !state.refreshItems
    },
    setParallels: (state, action) => {
      state.parallels[Object.keys(action.payload)[0]] = action.payload[Object.keys(action.payload)[0]]
      state.refreshItems = !state.refreshItems
    },

  },
})

export const { setfilter, setClassName, toggleMyclass, setParallels, setrefreshItems } = filterSlice.actions

export default filterSlice.reducer