const CreateForm = () => {
    return(
       <form action="">
        <div className="grid md:grid-cols-12 gap-5">
            <div className="col-span-8 bg-white p-4">
                <div className="mb-4">
                    <input type="text" name="name" className="py-2 px-4 rounded-sm border border-teal-500 w-full" />
                    <div aria-live="polite" aria-atomic="true">
                        <span className="text-sm text-red-500 mt-2">message</span>
                    </div>
                </div>

                <div className="mb-4">
                    <textarea name="description" className="py-2 px-4 rounded-sm border border-teal-500 w-full" ><textarea></textarea>
                    <div aria-live="polite" aria-atomic="true">
                        <span className="text-sm text-red-500 mt-2">message</span>
                    </div>
                </div>
            </div>
            <div className="col-span-4 bg-white p-4"></div>
        </div>
       </form>
    )
}
export default CreateForm