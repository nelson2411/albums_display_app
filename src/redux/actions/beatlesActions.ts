import { createAction } from "@reduxjs/toolkit"
import { Album } from "../../types/Albums"

export const addFavoriteAlbum = createAction<Album>("fav/addFavoriteAlbum")

export const removeFavoriteAlbum = createAction<Album>(
  "fav/removeFavoriteAlbum"
)
