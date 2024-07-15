import React from "react"
import { Layout } from "./Layout"
import { removeFavoriteAlbum } from "../redux/slices/favSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import { FaTrashAlt } from "react-icons/fa"

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react"
/*
this table must accept a prop called: favAlbums which is an array of Album objects
The table must have 3 columns:
1. Album Cover
2. Album Name
3. Release Date
this information will come from the favAlbums prop
*/

type Album = {
  id: number
  name: string
  release_date: string
  image: string
}

const FavoritesTable = ({ favAlbums }: { favAlbums: Album[] }) => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state)

  const deleteFromFavorites = (album: Album) => {
    dispatch(removeFavoriteAlbum(album.id))
  }
  return (
    <Table className="w-full shadow-xl rounded-lg my-5" isStriped>
      <TableHeader className="text-lg">
        <TableColumn>Album Cover</TableColumn>
        <TableColumn>Album Name</TableColumn>
        <TableColumn>Release Date</TableColumn>
        <TableColumn>Delete from Favorites</TableColumn>
      </TableHeader>
      <TableBody>
        {favAlbums.map((album) => (
          <TableRow key={album.id}>
            <TableCell>
              <img
                src={album.image}
                alt={album.name}
                className="w-16 h-16 rounded-full"
              />
            </TableCell>
            <TableCell>{album.name}</TableCell>
            <TableCell>{album.release_date}</TableCell>
            <TableCell>
              <button
                onClick={() => deleteFromFavorites(album)}
                className="text-red-500"
              >
                <FaTrashAlt size={20} className="hover:text-red-700" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default FavoritesTable
