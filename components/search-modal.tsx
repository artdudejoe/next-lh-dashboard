import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

interface SearchModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function SearchModal({ isOpen, setIsOpen }: SearchModalProps) {
  return (
    <Transition appear show={isOpen}>
      <Dialog as="div" onClose={() => setIsOpen(false)}>
        <TransitionChild
          as="div"
          className="fixed inset-0 bg-gray-900/30 z-50 transition-opacity"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          aria-hidden="true"
        />
        <TransitionChild
          as="div"
          className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6"
          enter="transition ease-in-out duration-200"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in-out duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          <DialogPanel className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700/60 overflow-auto max-w-2xl w-full max-h-full rounded-lg shadow-lg">
            {/* Search form */}
            <form className="border-b border-gray-200 dark:border-gray-700/60">
              <div className="relative">
                <label htmlFor="search-modal" className="sr-only">
                  Search
                </label>
                <input
                  id="search-modal"
                  className="w-full dark:text-gray-300 bg-white dark:bg-gray-800 border-0 focus:ring-transparent placeholder-gray-400 dark:placeholder-gray-500 appearance-none py-3 pl-10 pr-4"
                  type="search"
                  placeholder="Search Anything…"
                />
                <div className="absolute inset-0 flex items-center justify-center right-auto group">
                  <svg
                    className="shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 ml-4 mr-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </div>
              </div>
            </form>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}
