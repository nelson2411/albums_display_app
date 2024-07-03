import React from "react"
import { Layout } from "../components/Layout"
import { Album } from "../types/Albums"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import FavoritesTable from "../components/FavoritesTable"

export const FavPage = () => {
  const favAlbums = useSelector((state: RootState) => state.fav.favoriteAlbums)
  return (
    <>
      <Layout>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold my-4">Favorite Albums</h1>
          <FavoritesTable favAlbums={favAlbums} />
        </div>
      </Layout>
    </>
  )
}
