import CreateForm from "@/components/admin/room/create-form"
import { getAminities } from "@/lib/data"

const CreateRoom = async () => {
    const amenities = await getAminities()
    if(!amenities) return null
    return (
        <div className="">
            <h1 className="text-3xl font-bold text-gray-600 mb-4">Create New Room </h1>
            <CreateForm ami/>
        </div>
    )
}
export default CreateRoom;