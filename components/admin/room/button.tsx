// import { deleteRoom } from "@/lib/actions"
// import {IoTrashOutline, IoPencil} from "react-icons/io5"
// import Link from "next/link"


// export const EditButton = ( {id} : {id: string} ) => {
//   return (
//     <Link href={`/admin/room/edit/${id}`} className="rounded-sm p-1 hover:bg-gray-200">
//       <IoPencil className="size-5"/>
//     </Link>
//   )
// }

// export const DeleteButton = ( {id, image,} : {id: string, image: string} ) => {
//   const DeleteRoomWithId = deleteRoom.bind(null, id, image)
//   return (
//     <form action={DeleteRoomWithId}>
//         <button type="submit" className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer">
//             <IoTrashOutline className="size-5"/>
//         </button>
//     </form>
//   )
// }

import { deleteRoom } from "@/lib/actions"
import {IoTrashOutline, IoPencil} from "react-icons/io5"
import Link from "next/link"

export const EditButton = ( {id} : {id: string} ) => {
  return (
    <Link 
      href={`/admin/room/edit/${id}`} 
      className="group relative inline-flex items-center justify-center p-2.5 rounded-xl 
                 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
                 text-white shadow-lg hover:shadow-xl transform hover:scale-105 
                 transition-all duration-300 ease-out"
    >
      <IoPencil className="size-4 transition-transform duration-300 group-hover:rotate-12"/>
      <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 
                      bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Edit Room
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </Link>
  )
}

export const DeleteButton = ( {id, image,} : {id: string, image: string} ) => {
  const DeleteRoomWithId = deleteRoom.bind(null, id, image)
  return (
    <form action={DeleteRoomWithId}>
      <button 
        type="submit" 
        className="group relative inline-flex items-center justify-center p-2.5 rounded-xl 
                   bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
                   text-white shadow-lg hover:shadow-xl transform hover:scale-105 
                   transition-all duration-300 ease-out
                   hover:animate-pulse"
      >
        <IoTrashOutline className="size-4 transition-transform duration-300 group-hover:rotate-12"/>
        <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        
        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 
                        bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Delete Room
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
                          border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </button>
    </form>
  )
}