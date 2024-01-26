import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Divider,
  Image,
} from "@nextui-org/react"
import { Link } from "react-router-dom"
import { useGetAlbumsQuery } from "../redux/api/beatlesApi"
import { addFavoriteAlbum } from "../redux/slices/favSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import { FaHeartCirclePlus } from "react-icons/fa6"
import { Album } from "../types/Albums"

export const CardGrid = () => {
  const { data, error, isLoading } = useGetAlbumsQuery()
  const [animate, setAnimate] = React.useState<{ [key: number]: string }>({})
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state)
  console.log("state", state)

  /* create a function that adds an album to the favoriteAlbums array in the favSlice and at
  the same time add the class: "animate" to the button. This will trigger the animation
  */

  const addAnimationToIcon = (id: number) => {
    setAnimate({ ...animate, [id]: "animate" })
    setTimeout(() => {
      setAnimate({ ...animate, [id]: "" })
    }, 600)
  }

  const addAlbumToFavorites = (album: Album) => {
    dispatch(addFavoriteAlbum(album))

    addAnimationToIcon(album.id)
  }

  return (
    <div className="my-5 bg-stone-100 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-items-center">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {data &&
        data.map((album: Album) => (
          <Card
            key={album.id}
            isHoverable={true}
            className="w-64 h-96 flex flex-col justify-between drop-shadow-lg bg-white rounded-lg"
          >
            <CardHeader>
              <Link to={`/albums/${album.id}`}>
                <h4>{album.name}</h4>
              </Link>
            </CardHeader>
            <Divider />
            <CardBody>
              <Link to={`/albums/${album.id}`}>
                <Image src={album.image} alt="album cover" />
              </Link>
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-between p-2">
              <p>Release: {album.release_date}</p>
              <Button
                onClick={() => addAlbumToFavorites(album)}
                disabled={state.fav.favoriteAlbums.some(
                  (fav) => fav.id === album.id
                )}
                className={`${animate[album.id]} heart-btn`}
              >
                <FaHeartCirclePlus className="heart-icon" />
              </Button>
            </CardFooter>
          </Card>
        ))}
    </div>
  )
}
