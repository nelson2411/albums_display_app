import React from "react"
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
  return (
    <Table isStriped aria-label="Favorite Albums">
      <TableHeader>
        <TableColumn>Album Cover</TableColumn>
        <TableColumn>Album Name</TableColumn>
        <TableColumn>Release Date</TableColumn>
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default FavoritesTable
