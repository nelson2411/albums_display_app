import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Album } from "../../types/Albums"

const baseUrl = "http://localhost:8080/"

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
    getOneAlbum: builder.query<Album, number>({
      query: (id) => `studio_albums?id=${id}`,
    }),
  }),
})

export const { useGetAlbumsQuery } = beatlesApi
