import { Metadata } from "next"

export const metadata:Metadata ={
    title:"Room Detail"
}

const RoomDetailPage = async ({
    params
}:{
    params: Promise<{roomId:string}>
}) => {
    const roomId = (await.params)

    return(
        <div className=""></div>
    )
}
export default RoomDetailPage