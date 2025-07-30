import Link from "next/link";
// SVG Icons as separate components for better readability

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4"></div>

        {/* Copyright + Social Media */}
        <div className="px-4 py-6 bg-gray-100 dark:bg-white md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-800 dark:text-gray-800 sm:text-center">
            © 2025{" "}
            <Link href="" className="hover:underline">
              Kenneth Popera
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
