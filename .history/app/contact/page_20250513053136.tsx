import HeaderSection from "@/components/header_section";
import { Metadata } from "next";
import { Inter } from "next/i"

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPagae = () => {
  return (
    <div className="">
      <HeaderSection
        title="Contact Us"
        subTitle="Lorem ipsum dolor sit amet."
      />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="">
            <h1 className="text-lg text-gray-500 mb-3">Contact Us</h1>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Get In Touch To Day{" "}
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              voluptatem enim sint veritatis vero soluta dolore ratione.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
