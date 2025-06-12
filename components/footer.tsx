import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 w-full py-6 md:py-9">
        <div className="grid md:grid-cols-3 gap-7">
          <div>
            <Link href="/" className="mb-20 flex items-center justify-between p-0">
              <Image src="/1.png" width={180} height={60} alt="logo" className="hover:scale-105 transition-transform"/>
            </Link>
            <p className="text-gray-400">
            </p>
          </div>
          <div className="flex gap-20">
            <div className="flex md:flex-none">
              <h4 className="mb-8 text-xl font-semibold text-white"></h4>
              <ul className="list-item space-y-3 text-gray-500">
                <li className="hover:scale-105 hover:shadow-lg">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:scale-105 hover:shadow-lg">
                  <Link href="/about">About</Link>
                </li>
                <li className="hover:scale-105 hover:shadow-lg">
                  <Link href="/typeroom">Type Room</Link>
                </li>
                <li className="hover:scale-105 hover:shadow-lg">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="flex md:flex-none">
              <h4 className="mb-8 text-xl font-semibold text-white"></h4>
              <ul className="list-item space-y-3 text-gray-500">
                <li className="hover:scale-105 hover:shadow-lg">
                  <Link href="#">Legal</Link>
                </li>
                <li className="hover:scale-105 hover:shadow-lg">
                  <Link href="#">Payment Method</Link>
                </li>
                <li className="hover:scale-105 hover:shadow-lg">
                  <Link href="#">Privasy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-xl font-semibold text-white">
              News Lateer
            </h4>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <form action="" className="mt-5">
              <div className="mb-5 hover:scale-105 hover:shadow-lg">
                <input
                  type="text"
                  name="email"
                  className="w-full p-3 rounded-sm bg-white "
                  placeholder="contohgmail@gmail.com"
                />
              </div>
              <button className="bg-teal-400 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-violet-500 hover:scale-105 hover:shadow-lg">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-4 text-center text-base text-gray-500">
        &copy; Copyright 2025
      </div>
    </footer>
  );
};
export default Footer;
