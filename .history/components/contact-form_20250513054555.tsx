
const ContactForm = () => {
    return(
        <div className="bg-white p-8 rounded-sm shadow-sm ">
            <form action="">
                <div className="grid md:grid-cols-2 gap-7 pt-6 ">
                    <div className="">
                        <input type="text" name="name" className="w-full font-light border border-gray-0 p-3 rounded-sm focus:outline-none focus:border-gray-500"/>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default ContactForm