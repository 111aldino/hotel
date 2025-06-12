import { deleteRoom } from "@/lib/actions"
export const DeleteButton = ( {id, image,} : {id: string, image: string} ) => {
  const DeleteRoomWithId = deleteRoom.bind(null, id, ima)
}