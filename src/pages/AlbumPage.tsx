import React from "react"
import { Layout } from "../components/Layout"
import { useGetOneAlbumQuery } from "../redux/api/beatlesApi"
import { useParams } from "react-router-dom"
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react"
import { Album } from "../types/Albums"
import { GiCompactDisc } from "react-icons/gi"

export const AlbumPage = () => {
  const { id } = useParams<{ id: string }>()

  const { data, error, isLoading } = useGetOneAlbumQuery(id)

  return (
    <Layout>
      <div className="flex justify-center min-h-screen bg-stone-100">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error</p>}
        {data && (
          <Card
            className="flex flex-col justify-between drop-shadow-lg bg-white w-96 my-5 p-3 rounded-md"
            key={data.id}
          >
            <CardHeader>
              <h4>
                Album Title: <span className="font-semibold">{data.name}</span>
              </h4>
            </CardHeader>
            <Divider />
            <CardBody>
              <Image
                src={data.image}
                width="100%"
                height="100%"
                className="drop-shadow-lg rounded-md"
              />
              <Divider />
              <div className="flex flex-col px-3 mt-3">
                <h5 className="ml-2">
                  Number of Tracks: {data.tracks?.length}
                </h5>
                <ul className="list-disc">
                  {data.tracks?.map((song) => (
                    <li key={song}>
                      <p>{song}</p>
                    </li>
                  ))}
                </ul>
                <h5 className="mt-3 mb-1">Singles: </h5>
                <ul className="list-none">
                  {data.singles?.map((single) => (
                    <li key={single} className="flex flex-row">
                      <GiCompactDisc className="mt-1" />{" "}
                      <p className="ml-1">{single}</p>
                    </li>
                  ))}
                </ul>
                {/* Length */}
                <p className="mt-3 mb-1">Length: {data.length}</p>
                {/* Release date */}
                <p className="mt-3 mb-1">
                  Release Date:{" "}
                  <span className="text-sm font-semibold">
                    {data.release_date}
                  </span>
                </p>
                {/* label */}
                <p className="mt-3 mb-1">
                  Label: <span className="font-semibold">{data.label}</span>
                </p>
              </div>
            </CardBody>
          </Card>
        )}
      </div>
    </Layout>
  )
}
