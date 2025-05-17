"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAppProvider } from "@/app/app-provider";
import { useSelectedLayoutSegments } from "next/navigation";
import { useWindowWidth } from "@/components/utils/use-window-width";
import SidebarLinkGroup from "./sidebar-link-group";
import SidebarLink from "./sidebar-link";
import Logo from "./logo";
import { dashpages } from "@/app/lib/navdata";

export default function Sidebar({ variant = "default" }) {
  const sidebar = useRef<HTMLDivElement>(null);
  const { sidebarOpen, setSidebarOpen, sidebarExpanded, setSidebarExpanded } =
    useAppProvider();
  const segments = useSelectedLayoutSegments();
  const breakpoint = useWindowWidth();
  const expandOnly =
    !sidebarExpanded && breakpoint && breakpoint >= 1024 && breakpoint < 1536;

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!sidebar.current) return;
      if (!sidebarOpen || sidebar.current.contains(target as Node)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({});

  const toggleGroup = (key: string) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={`min-w-fit ${sidebarExpanded ? "sidebar-expanded" : ""}`}>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900/30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex lg:flex! flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:w-64! shrink-0 bg-violet-50 dark:bg-violet-800 p-0 transition-all duration-200 ease-in-out shadow-xs ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/*
          sidebar_header: Logo, close button for mobile
        */}
        <div
          className="flex justify-between mb-5 pr-3 pt-2 pl-3 pb-3 sm:px-2 bg-violet-800"
          id="sidebar_header"
        >
          <button
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <Logo />
        </div>
        {/*
          /sidebar_header: Logo, close button for mobile
        */}

        {/*
          Links
        */}
        <div className="space-y-8" id="sidebarlinks">
          {/* Pages group */}
          <ul className="mt-1 pl-4 pr-4">
            {dashpages.map((item) => {
              const isActive =
                pathname === item.linkurl ||
                item.linksubs.some((s) => s.linkurl === pathname);
              const hasSubs = item.linksubs.length > 0;
              const isOpen = openGroups[item.linkname] || isActive;

              return (
                <li
                  key={item.linkname}
                  className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 ${
                    isActive
                      ? "bg-gradient-to-r from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {hasSubs ? (
                    <button
                      onClick={() => toggleGroup(item.linkname)}
                      className="w-full text-left block text-gray-800 dark:text-gray-100 truncate transition"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="shrink-0 text-xl text-violet-200 dark:text-violet-100">
                            <i className={`ti ti-${item.linkicon}`}></i>
                          </span>
                          <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            {item.linkname}
                            {item.linkbadge && (
                              <span className="bg-violet-500 text-white text-xs px-2 py-0.5 rounded-full">
                                {item.linkbadge}
                              </span>
                            )}
                          </span>
                        </div>
                        <i
                          className={`ti ti-caret-down ml-1 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          } text-gray-400 dark:text-gray-500`}
                        ></i>
                      </div>
                    </button>
                  ) : (
                    <Link
                      href={item.linkurl}
                      className="block text-gray-800 dark:text-gray-100 transition truncate"
                    >
                      <div className="flex items-center text-md">
                        <span className="shrink-0 text-xl text-violet-200 dark:text-violet-100">
                          <i className={`ti ti-${item.linkicon}`}></i>
                        </span>
                        <div className="ml-4 flex items-center justify-between w-full">
                          <span className="text-sm font-medium flex-1 ml-0 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                            {item.linkname}
                          </span>
                          {item.linkbadge && (
                            <span className="bg-violet-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                              {item.linkbadge}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  )}

                  {/* Animated Dropdown */}
                  {hasSubs && (
                    <Dropdown isOpen={isOpen}>
                      {item.linksubs.map((sub) => {
                        const isSubActive = pathname === sub.linkurl;
                        return (
                          <li key={sub.linkurl} className="py-2 mb-1 last:mb-0">
                            <Link
                              href={sub.linkurl}
                              className={`block text-sm font-medium truncate transition ${
                                isSubActive
                                  ? "text-violet-500 dark:text-violet-400"
                                  : "text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white"
                              }`}
                            >
                              {sub.linkname}
                            </Link>
                          </li>
                        );
                      })}
                    </Dropdown>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/*
          Expand / collapse button
        */}
      <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
        <div className="w-12 pl-4 pr-3 py-2">
          <button
            className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
          >
            <span className="sr-only">Expand / collapse sidebar</span>
            <svg
              className="shrink-0 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7M12 7.99a.996.996 0 0 0-.076-.373Z" />
            </svg>
          </button>
        </div>
      </div>
      {/*
          /Expand / collapse button
        */}
    </div>
  );
}

// 🔽 Animated dropdown wrapper
function Dropdown({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        const scrollHeight = ref.current.scrollHeight;
        setHeight(scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen]);

  return (
    <ul
      ref={ref}
      style={{ maxHeight: height, transition: "max-height 0.3s ease" }}
      className="overflow-hidden pl-8 mt-1"
    >
      {children}
    </ul>
  );
}
