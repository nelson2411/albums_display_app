import React from "react"
import { Layout } from "../components/Layout"
import { Album } from "../types/Albums"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"

export const FavPage = () => {
  const favAlbums = useSelector((state: RootState) => state.fav.favoriteAlbums)
  return (
    <Layout>
      <div className="my-5 bg-stone-100 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-items-center">
        {favAlbums.map((album: Album) => (
          <div
            key={album.id}
            className="w-64 h-96 flex flex-col justify-between shadow-lg bg-white"
          >
            <div className="flex justify-between p-2">
              <p>{album.name}</p>
              <p>Release: {album.release_date}</p>
            </div>
            <div className="flex justify-center">
              <img src={album.image} alt="album cover" className="w-48 h-48" />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
