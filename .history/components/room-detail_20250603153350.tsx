import Image from "next/image"
import { getRoomDetailById } from "@/lib/data"

const RoomDetail = async ({roomId}: {roomId : string}) => {

    const room = await getRoomDetailById (roomId)
    if(!room) return not

    return(
        <div className="max-w-screen-xl py-16 px-4 grid lg:grid-cols-12 gap-8 mx-auto">
            <div className="md:col-span-8">
                <Image src={}/>
            </div>
            <div className="md:col-span-4"></div>
        </div>
    )
}

export default RoomDetail