"use client";
import { useActionState } from "react";
import { ContactMessage } from "@/lib/actions";
import clsx from "clsx";

const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(ContactMessage, null)
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm ">
        {state?.message ?  (
            <div className="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-green-50" role="alert">
                <div className="font-medium ">{state.message}</div>
            </div>
        ):null}
      <form action={formAction}>
        <div className="grid md:grid-cols-2 gap-7 pt-6 ">
          <div className="">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="bg-gray-50 w-full font-light border border-teal-700 p-3 rounded-sm"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2 ">{state?.error?.name}</p>
            </div>
          </div>

          <div className="">
            <input
              type="email
              name="email"
              placeholder="contoh@example.com*"
              className="bg-gray-50 w-full font-light border border-teal-700 p-3 rounded-sm"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2 ">{state?.error?.email}</p>
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
              <p className="text-sm text-red-500 mt-2 ">{state?.error?.subject}</p>
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
              <p className="text-sm text-red-500 mt-2 ">{state?.error?.message}</p>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={clsx("px-10 text-center py-4 font-semibold text-white w-full bg-teal-600 rounded-sm hover:bg-violet-700 cursor-pointer", {
            "opacity-50 cursor-progress animate-pulse": isPending,
          })}
          disabled={isPending}
        >
          {isPending ? "loading..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
