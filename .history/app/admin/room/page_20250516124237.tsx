import Link from "next/link"

const Roompage = () => {
    return(
       <div className="max-w-screen-xl px-4 py-16 mt-10 mx-auto">
        <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold  text-gray-800">Room List</h1>
            <Link href="/admin/room/create" className="bg-orange-400 px-6 py-2.5hover:bg-orange-500 tex">Create New</Link>
        </div>
       </div>
    )
}
export default Roompage