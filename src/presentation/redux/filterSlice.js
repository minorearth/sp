import { createSlice } from '@reduxjs/toolkit'

const offset = new Date().getTimezoneOffset()
const RightNow = new Date()
const currDate = new Date(RightNow.toDateString())
const TodayS = currDate.getTime() - offset * 60000

export const extractMyClassParallel = (className) => {
  return className != '' ? className.split('').filter(letter => '1234567890'.includes(letter)).join('') : undefined
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    period: 'Сегодня',
    filterDateS: TodayS,
    filterDateE: TodayS + 24 * 60 * 60000,
    className: '',
    MyClassParallel:'',
    myClassToggle: false,
    refreshItems: true,
    parallels: { '1': true, '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true, '10': true, '11': true },

  },


  reducers: {
    setfilter: (state, action) => {
      state.period = action.payload
      switch (action.payload) {
        case 'Сегодня':
          state.filterDateE = TodayS + 24 * 60 * 60000
          state.filterDateS = TodayS
          break
        case 'Завтра':
          state.filterDateE = TodayS + 86400000 + 24 * 60 * 60000
          state.filterDateS = TodayS + 86400000
          break
        case 'Неделя':
          state.filterDateE = TodayS + 604800000
          state.filterDateS = TodayS
          break
        case 'Месяц':
          state.filterDateE = TodayS + 26298000000
          state.filterDateS = TodayS
          break
        case 'Прошедшие':
          state.filterDateE = TodayS
          state.filterDateS = TodayS - 262980000000
          break
        case 'Все':
          state.filterDateE = TodayS + 262980000000
          state.filterDateS = TodayS - 262980000000
          break
        default:
          break
      }

      state.refreshItems = !state.refreshItems
    },
    setrefreshItems: (state) => {
      state.refreshItems = !state.refreshItems
    },
    setClassName: (state, action) => {
      state.className = action.payload
      state.MyClassParallel=extractMyClassParallel(action.payload)
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