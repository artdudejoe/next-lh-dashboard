export const metadata = {
  title: "Create a New Property",
  description: "Create a new property in your Lighthouse portfolio",
};

import Link from "next/link";

export default function NewProperty() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
            Create A New Property
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700/60">
        <h4>New Property Form</h4>
      </div>
    </div>
  );
}
