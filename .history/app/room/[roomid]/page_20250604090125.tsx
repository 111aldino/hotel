import { Metadata } from "next"
import RoomDetail from "@/components/room-detail"

export const metadata:Metadata ={
    title:"Room Detail"
}

const RoomDetailPage = async ({
    params
}:{
    params: Promise<{roomId:string}>
}) => {
    const roomId = (await{}params).roomId

    return(
        <div className=""></div>
    )
}
export default RoomDetailPage