import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Album } from "../../types/Albums"

interface FavState {
  favoriteAlbums: Album[]
}

const initialState: FavState = {
  favoriteAlbums: [],
}

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addFavoriteAlbum: (state, action: PayloadAction<Album>) => {
      const album = state.favoriteAlbums.find(
        (album) => album.id === action.payload.id
      )
      if (!album) {
        state.favoriteAlbums.push(action.payload)
      }
    },
    removeFavoriteAlbum: (state, action: PayloadAction<Album>) => {
      state.favoriteAlbums = state.favoriteAlbums.filter(
        (album) => album.id !== action.payload.id
      )
    },
  },
})

export const { addFavoriteAlbum, removeFavoriteAlbum } = favSlice.actions

export default favSlice.reducer
