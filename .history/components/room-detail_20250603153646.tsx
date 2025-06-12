import Image from "next/image"
import { getRoomDetailById } from "@/lib/data"
import { notFound } from "next/navigation"

const RoomDetail = async ({roomId}: {roomId : string}) => {

    const room = await getRoomDetailById (roomId)
    if(!room) return notFound()

    return(
        <div className="max-w-screen-xl py-16 px-4 grid lg:grid-cols-12 gap-8 mx-auto">
            <div className="md:col-span-8">
                <Image src={room.image} alt={room.name} width={770} height={430} priority
                className="w-full rounded-sm mb-8"
                />
                <h1 className="text-5xl font-semibold text-gray">
                    {room.name}
                </h1>
            </div>
            <div className="md:col-span-4"></div>
        </div>
    )
}

export default RoomDetail