"use client";

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    
    <div className="flex items-center">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm text-gray-200 hover:bg-white rounded-md md:hidden"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm ${open ? 'bg-gray-900/95' : ''}   md:flex-row md:items-center md:space-x-8 md:p-0 md:mt-0 md:border-0">
          <li>
            <Link
              href="/"
              className="block py-2 px-3 text-white hover:bg-teal-400 rounded-sm md:hover:bg-transparent md:p-0 hover:scale-105"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/room"
              className="block py-2 px-3 text-white hover:bg-teal-400 rounded-sm md:hover:bg-transparent md:p-0 hover:scale-105"
            >
              Type Room
            </Link>
          </li>

          <li>
            <Link
              href="/mitra"
              className="block py-2 px-3 text-white hover:bg-teal-400 rounded-sm md:hover:bg-transparent md:p-0 hover:scale-105"
            >
              Mitra
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className="block py-2 px-3 text-white hover:bg-teal-400 rounded-sm md:hover:bg-transparent md:p-0 hover:scale-105"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="block py-2 px-3 text-white hover:bg-teal-400 rounded-sm md:hover:bg-transparent md:p-0 hover:scale-105"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="block py-2 px-3 text-white hover:bg-teal-400 rounded-sm md:hover:bg-transparent md:p-0 hover:scale-105"
            >
              About
            </Link>
          </li>

          {session && (
            <>
              <li>
                <Link
                  href="/myreservation"
                  className="block py-2 px-3 text-white hover:bg-teal-400 rounded-sm md:hover:bg-transparent md:p-0 hover:scale-105"
                >
                  My Reservation
                </Link>
              </li>

              {session.user.role === "admin" && (
                <>
              <li>
                <Link
                  href="/admin/dashboard"
                  className="block py-2 px-3 text-white hover:bg-teal-400 rounded-sm md:hover:bg-transparent md:p-0 hover:scale-105"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/room"
                  className="block py-2 px-3 text-white hover:bg-teal-400  rounded-sm md:hover:bg-transparent md:p-0 hover:scale-105"
                >
                  Manage Room
                </Link>
              </li>
                
                </>
              )}

            </>
          )}

          {session ? (
             <li className="pt-2 md:pt-0 hover:scale-105 hover:shadow-lg">
            <button
            onClick={() => signOut()}
              className="md:hidden py-3 px-5 bg-teal-400 text-white hover:bg-violet-500 rounded-sm cursor-pointer"
            >
              Sign Out
            </button>
          </li>
          ):(
          <li className="pt-2 md:pt-0 hover:scale-105 hover:shadow-lg">
            <Link
              href="/signin"
              className="py-3 px-7 bg-teal-400 text-white hover:bg-violet-500 rounded-sm"
            >
              Sign In
            </Link>
          </li>

          )}
        </ul>
      </div>
    </div>
  );
};

export default Navlink;
