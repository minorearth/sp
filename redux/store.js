import { configureStore,combineReducers,getDefaultMiddleware } from '@reduxjs/toolkit'
import userdataReducer from './userdataSlice'
import filterReducer from './filterSlice'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({userdata: userdataReducer, filter: filterReducer})


const reducerP = persistReducer(persistConfig, rootReducer)

const store =  configureStore({
  reducer:reducerP,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: { ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], }, }),
})



export const persistor = persistStore(store)

export default store;