const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm ">
      <form action="">
        <div className="grid md:grid-cols-2 gap-7 pt-6 ">
          <div className="">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="bg-gray-50 w-full font-light border border-gray-100 p-3 rounded-sm"
            />
            <div ar></div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
