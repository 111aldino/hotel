import { getRooms } from "@/lib/data"
import Image from "next/image"

const RoomTable = async () => {
    const rooms = await getRooms()
    if (!rooms?.length)
        return <p className="text-center text-gray-500">No Room found</p>
    
    return (
        <div className="bg-white p-4 mt-5 shadow-sm">
            <table className="w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">Image</th>
                        <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">Room Name</th>
                        <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">Price</th>
                        <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">Create At</th>
                        <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">Action</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {rooms.map((room) =>(
                    <tr className="hover:bg-gray-100">
                        <td className="px-6 py-4">
                            <Image src={room.image} alt="room image" fill sizes="20vw" className="object-cover" />
                        </td>
                        <td className="px-6 py-4">
                            {room.name}
                        </td>
                        <td className="px-6 py-4">
                            {room.price}
                        </td>
                        <td className="px-6 py-4">
                            {room.createdAt.toString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                            
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default RoomTable