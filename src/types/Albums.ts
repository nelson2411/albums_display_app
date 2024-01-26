/*

Album data type in JSON format
 {
      "id": 1,
      "name": "Please Please Me",
      "release_date": "1963-03-22",
      "label": "Parlophone",
      "number_of_tracks": 14,
      "image": "https://upload.wikimedia.org/wikipedia/en/2/2e/Please_Please_Me.png"
    },

*/

export interface Album {
  id: number
  name: string
  release_date: string
  label: string
  number_of_tracks: number
  image: string
  length?: string
  tracks?: string[]
  singles?: string[]
}

export interface Albums {
  albums: Album[]
}
