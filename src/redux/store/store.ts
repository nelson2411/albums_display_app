import { configureStore } from "@reduxjs/toolkit"
import { favSlice } from "../slices/favSlice"
import { beatlesApi } from "../api/beatlesApi"

export const store = configureStore({
  reducer: {
    fav: favSlice.reducer,
    [beatlesApi.reducerPath]: beatlesApi.reducer,
  },

  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beatlesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
