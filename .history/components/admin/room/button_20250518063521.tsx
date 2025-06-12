import { deleteRoom } from "@/lib/actions"
import {Io} from "react-icons/io5"


export const DeleteButton = ( {id, image,} : {id: string, image: string} ) => {
  const DeleteRoomWithId = deleteRoom.bind(null, id, image)
  return (
    <form action="">
        <button type="submit" className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer">

        </button>
    </form>
  )
}