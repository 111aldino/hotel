import HeaderSection from "@/components/header_section"
import Main from "@/components/main"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata:Metadata ={
    title: "Room & Rates",
    description: "choose your best room today"
}

const RoomPage = () => {
    return (
        <div className="">
            <HeaderSection title="Room & Rates" subTitle="orem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolore!"/>
            <div className="mt-10 px-4 ">
                <Suspensea>
                    
                </Suspensea>
                <Main/>
            </div>
        </div>
    )
}
export default RoomPage