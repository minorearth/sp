import { configureStore,combineReducers,getDefaultMiddleware } from '@reduxjs/toolkit'
import userdataReducer from './userdataSlice'
import filterReducer from './filterSlice'
// import thunk from 'redux-thunk';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { pokemonApi } from './zu'

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
  // stateReconciler: zz  ,
  // serializableCheck: false
  // blacklist: ['userdata'],
}

const rootReducer = combineReducers({userdata: userdataReducer, filter: filterReducer, [pokemonApi.reducerPath]: pokemonApi.reducer})


const reducerP = persistReducer(persistConfig, rootReducer)

const store =  configureStore({

  reducer:reducerP,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ 
    serializableCheck: { ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], }, 
    immutableCheck: false,
    serializableCheck: false,
  
  }).concat(pokemonApi.middleware),
})


export const persistor = persistStore(store)

export default store;