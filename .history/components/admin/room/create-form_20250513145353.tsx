const CreateForm = () => {
    return(
       <form action="">
        <div className="grid md:grid-cols-12 gap-5">
            <div className="col-span-8 bg-white p-4">
                <div className="mb-4">
                    <input type="text" name="name" placeholder="Room Name" className="py-2 px-4 rounded-sm border border-teal-500 w-full" />
                    <div aria-live="polite" aria-atomic="true">
                        <span className="text-sm text-red-500 mt-2">message</span>
                    </div>
                </div>

                <div className="mb-4">
                    <textarea name="description" rows={8} placeholder="description" className="py-2 px-4 rounded-sm border border-teal-500 w-full" ></textarea>
                    <div aria-live="polite" aria-atomic="true">
                        <span className="text-sm text-red-500 mt-2">message</span>
                    </div>
                </div>

                <div className="mb-4 grid md:grid-cols-3">
                    <input type="checkbox" name="amenities" placeholder="Room Name" className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-600 rounded" />
                    <label className="ms-2 text-sm font-medium text-gray-800 capitalize">
                        Spa
                    </label>
                    <div aria-live="polite" aria-atomic="true">
                        <span className="text-sm text-red-500 mt-2">message</span>
                    </div>
                </div>
                
            </div>
            <div className="col-span-4 bg-white p-4">
                <label htmlFor="input-file" className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 rela"></label>
            </div>
        </div>
       </form>
    )
}
export default CreateForm