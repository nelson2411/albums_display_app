import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { favSlice } from "../slices/favSlice"
import { beatlesApi } from "../api/beatlesApi"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  [beatlesApi.reducerPath]: beatlesApi.reducer,
  fav: favSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beatlesApi.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
