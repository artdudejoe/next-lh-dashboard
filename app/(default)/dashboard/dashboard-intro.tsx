import Image from "next/image";
import UserImage from "@/public/images/user-64-14.jpg";

export default function DashboardIntro() {
  return (
    <div className="flex flex-col col-span-full bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="p-5">
        <div className="md:flex md:justify-between md:items-center">
          {/* Left side */}
          <div className="flex items-center mb-4 md:mb-0">
            {/* Avatar */}
            <div className="mr-4">
              <Image
                className="inline-flex rounded-full"
                src={UserImage}
                width={64}
                height={64}
                alt="User"
              />
            </div>
            {/* User info */}
            <div>
              <div className="mb-2">
                Hey{" "}
                <strong className="font-medium text-gray-800 dark:text-gray-100">
                  Mary
                </strong>{" "}
                👋, this is your current balance:
              </div>
              <div className="text-3xl font-bold text-green-500">
                $47,347.09
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
