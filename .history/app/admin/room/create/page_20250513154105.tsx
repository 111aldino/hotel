import CreateForm from "@/components/admin/room/create-form"
import HeaderSection from "@/components/header_section"
import Create

const CreateRoomPage = () => {
    return(
        <div className="">
            <HeaderSection title="Create Room" subTitle="Lorem ipsum dolor sit amet."/>
        <div className="max-w-screen-xl px-14 py-16 mt-10 mx-auto">
            <CreateForm/>
        </div>
        </div>
    )
}
export default CreateRoomPage