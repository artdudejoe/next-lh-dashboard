"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import UserImage from "@/public/images/user-64-14.jpg";

export default function DropdownProfile({
  align,
}: {
  align?: "left" | "right";
}) {
  return (
    <Menu as="div" className="relative inline-flex">
      <MenuButton className="inline-flex justify-center items-center group">
        <Image
          className="w-8 h-8 rounded-full"
          src={UserImage}
          width={32}
          height={32}
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium text-gray-100 group-hover:text-white">
            Acme Inc.
          </span>
        </div>
      </MenuButton>
      <Transition
        as="div"
        className={`origin-top-right z-10 absolute top-full min-w-[11rem] bg-gray-800 border border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1 ${
          align === "right" ? "right-0" : "left-0"
        }`}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-700/60">
          <div className="font-medium text-gray-100">Acme Inc.</div>
          <div className="text-xs text-gray-400 italic">Administrator</div>
        </div>
        <MenuItems as="ul" className="focus:outline-hidden">
          <MenuItem as="li">
            <Link
              className="font-medium text-sm flex items-center py-1 px-3 text-violet-100"
              href="/settings/account"
            >
              Settings
            </Link>
          </MenuItem>
          <MenuItem as="li">
            <Link
              className="font-medium text-sm flex items-center py-1 px-3 text-violet-100"
              href="#0"
            >
              Sign Out
            </Link>
          </MenuItem>
          <MenuItem as="li">
            <Link
              className="font-medium text-sm flex items-center py-1 px-3 text-violet-100"
              href="#0"
            >
              Documentation
            </Link>
          </MenuItem>
          <MenuItem as="li">
            <Link
              className="font-medium text-sm flex items-center py-1 px-3 text-violet-100"
              href="#0"
            >
              Help
            </Link>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
