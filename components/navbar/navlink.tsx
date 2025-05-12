"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>
      <div className={clsx("w-full md:block md:w-auto", { hidden: !open })}>
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-gray-50 md:flex-row 
          md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Rooms", href: "/room" },
            { label: "Contact", href: "/contact" },
            { label: "My Reservation", href: "/" },
            { label: "Dashboard", href: "/admin/dashboard" },
            { label: "Manage Room", href: "/admin/room" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 md:pt-0">
            <Link
              href="/signin"
              className="py-2.5 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navlink;
