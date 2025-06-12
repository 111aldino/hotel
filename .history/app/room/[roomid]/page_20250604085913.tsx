import { promises } from "dns"
import { Metadata } from "next"

export const metadata:Metadata ={
    title:"Room Detail"
}

const RoomDetailPage = async ({
    params
}:{
    params: promises
}) => {
    return(
        <div className=""></div>
    )
}
export default RoomDetailPage