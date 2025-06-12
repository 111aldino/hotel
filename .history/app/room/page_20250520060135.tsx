import HeaderSection from "@/components/header_section"
import Main from "@/components/main"
import { Metadata } from "next"
import { Suspense } from "react"
import RoomSkeleton from "@/components/skeletons/room-skeleton"

export const metadata:Metadata ={
    title: "Room & Rates",
    description: "choose your best room today"
}

const RoomPage = () => {
    return (
        <div className="">
            <HeaderSection title="Room & Rates" subTitle="orem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolore!"/>
            <div className="mt-10 px-4 ">
                <Suspense fallback={<p>Loading......</p>}>
                 <Main/>
                </Suspense>
            </div>
        </div>
    )
}
export default RoomPage