"use client";
import { useActionState } from "react";
import { ContactMessage } from "@/lib/actions";

const ContactForm = () => {
    const [state, formAction] = useActionState(ContactMessage, null)
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm ">
      <form action=>
        <div className="grid md:grid-cols-2 gap-7 pt-6 ">
          <div className="">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="bg-gray-50 w-full font-light border border-teal-700 p-3 rounded-sm"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2 ">Message</p>
            </div>
          </div>

          <div className="">
            <input
              type="email"
              name="email"
              placeholder="contoh@example.com*"
              className="bg-gray-50 w-full font-light border border-teal-700 p-3 rounded-sm"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2 ">Message</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <input
              type="text"
              name="subject"
              placeholder="subject*"
              className="bg-gray-50 w-full font-light border border-teal-700 p-3 rounded-sm"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2 ">Message</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <textarea
              name="message"
              rows={5}
              placeholder="your-message*"
              className="bg-gray-50 w-full font-light border border-teal-700 p-3 rounded-sm"
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2 ">Massage</p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="px-10 text-center py-4 font-semibold text-white w-full bg-teal-600 rounded-sm hover:bg-violet-700 cursor-pointer"
        >
          Send Messsege
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
