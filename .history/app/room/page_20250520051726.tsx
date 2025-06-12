import HeaderSection from "@/components/header_section"
import Main from "@/components/main"
import { Metadata } from "next"

export const Metadata:meta

const RoomPage = () => {
    return (
        <div className="">
            <HeaderSection title="Room & Rates" subTitle="orem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolore!"/>
            <div className="mt-10 px-4 ">
                <Main/>
            </div>
        </div>
    )
}
export default RoomPage