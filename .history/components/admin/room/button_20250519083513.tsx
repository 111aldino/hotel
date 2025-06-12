import { deleteRoom } from "@/lib/actions"
import {IoTrashOutline} from "react-icons/io5"
import 


export const EditButton = ( {id} : {id: string} ) => {
  return (
    
  )
}

export const DeleteButton = ( {id, image,} : {id: string, image: string} ) => {
  const DeleteRoomWithId = deleteRoom.bind(null, id, image)
  return (
    <form action="">
        <button type="submit" className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer">
            <IoTrashOutline className="size-5"/>
        </button>
    </form>
  )
}