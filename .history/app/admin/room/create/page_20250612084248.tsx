import HeaderSection from "@/components/header_section"
import CreateRoom from "@/components/admin/room/create-room"

const CreateRoomPage = () => {
    return(
        <div className="">
            {/* <HeaderSection title="Create Room" subTitle="Lorem ipsum dolor sit amet."/> */}
        <div className="max-w-screen-xl px-14 py-16 mt-10 mx-auto">
            <CreateRoom/>
        </div>
        </div>
    )
}
export default CreateRoomPage