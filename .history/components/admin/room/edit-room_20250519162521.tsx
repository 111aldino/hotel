import CreateForm from "@/components/admin/room/create-form"
import { getAminities } from "@/lib/data"
import EditForm from 

const EditRoom = async ({roomId} : {roomId: string}) => {
    const amenities = await getAminities()
    if(!amenities) return null
    return (
        <div className="">
            <h1 className="text-3xl font-bold text-gray-600 mb-4">Edit a Room </h1>
            <CreateForm amenities = {amenities}/>
        </div>
    )
}
export default EditRoom;