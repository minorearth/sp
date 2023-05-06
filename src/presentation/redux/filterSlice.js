import { createSlice } from '@reduxjs/toolkit'



export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
    className: '',
    myClassToggle: false,
    refreshItems: true,
    parallels: { '1': false, '2': false, '3': false, '4': false, '5': false, '6': false, '7': false, '8': false, '9': false, '10': false, '11': false },
    hiddenItems: {},

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
    sethiddenitems: (state, action) => {
      state.hiddenItems[action.payload]=true
      state.refreshItems = !state.refreshItems

    }, 
  },
})

export const { setfilter, setClassName, toggleMyclass, setParallels, setrefreshItems,sethiddenitems } = filterSlice.actions

export default filterSlice.reducer