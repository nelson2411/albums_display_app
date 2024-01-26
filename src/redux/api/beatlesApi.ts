import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Album } from "../../types/Albums"

const baseUrl =
  "https://my-json-server.typicode.com/nelson2411/albums-display-app/"

export const beatlesApi = createApi({
  reducerPath: "beatlesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => "studio_albums",
    }),
    getCompilationAlbums: builder.query<Album[], void>({
      query: () => "compilation_albums",
    }),
    getOneAlbum: builder.query<Album, string>({
      query: (id) => `studio_albums/${id}`,
    }),
  }),
})

export const {
  useGetAlbumsQuery,
  useGetOneAlbumQuery,
  useGetCompilationAlbumsQuery,
} = beatlesApi
