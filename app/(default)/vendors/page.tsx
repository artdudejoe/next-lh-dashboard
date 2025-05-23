export const metadata = {
  title: "Your Work Providers",
  description: "Manage your Lighthouse work providers here.",
};

import Link from "next/link";

export default function Vendors() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
            Manage Your Work Vendors
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700/60">
        <h4>List</h4>
      </div>
    </div>
  );
}
