import { Metadata } from "next"
import RoomDetail from "@/components/room-detail"
import { Suspense } from "react"

export const metadata:Metadata ={
    title:"Room Detail"
}

const RoomDetailPage = async ({
    params
}:{
    params: Promise<{roomId:string}>
}) => {
    const roomId = (await params).roomId

    return(
        <div className="mt-16 p">
            <Suspense fallback={<p>Loading..</p>} >
                 <RoomDetail roomId={roomId}/>
            </Suspense>
        </div>
    )
}
export default RoomDetailPage

// import { Metadata } from "next"
// import RoomDetail from "@/components/room-detail"
// import { Suspense } from "react"

// export const metadata: Metadata = {
//     title: "Room Detail",
//     description: "Detail informasi kamar hotel"
// }

// const RoomDetailPage = async ({
//     params
// }: {
//     params: Promise<{ roomId: string }>
// }) => {
//     const { roomId } = await params

//     return (
//         <div className="mt-16">
//             <Suspense fallback={
//                 <div className="flex justify-center items-center min-h-[400px]">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
//                 </div>
//             }>
//                 <RoomDetail roomId={roomId} />
//             </Suspense>
//         </div>
//     )
// }

// export default RoomDetailPage