import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <div className="flex items-center gap-4">
            <button
              className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-200 hover:text-gray-200ay-600/75 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
            <div className="sm:flex sm:gap-4">
              <Link
                target="_blank"
                to={"https://alkashaf.com"}
                className="block rounded-3xl text-white px-5 py-2.5 text-sm font-medium transition hover:text-gray-200 border border-white"
              >
                انتقل إلى المعجم
              </Link>
            </div>

            {/* Toggle button for mobile menu */}
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <nav className="absolute top-20 left-0 w-full bg-gray-900 shadow-md md:hidden">
              <ul className="flex flex-col items-center gap-4 p-4 text-md font-bold">
                <li>
                  <Link
                    to={"/ContactUs"}
                    className="text-white transition hover:text-gray-200ay-200 "
                    onClick={() => setIsMenuOpen(false)}
                  >
                    تواصل معنا
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/AboutUs"}
                    className="text-white transition hover:text-gray-200 "
                    onClick={() => setIsMenuOpen(false)}
                  >
                    عن الكشاف
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-white transition hover:text-gray-200 "
                    onClick={() => setIsMenuOpen(false)}
                  >
                    الرئيسة
                  </Link>
                </li>
              </ul>
            </nav>
          )}

          {/* Desktop menu */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-10 text-md font-bold">
              <li>
                <Link
                  to={"/ContactUs"}
                  className="text-white transition hover:text-gray-200 "
                >
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link
                  to={"/AboutUs"}
                  className="text-white transition hover:text-gray-200 "
                >
                  عن الكشاف
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-white transition hover:text-gray-200 "
                >
                  الرئيسة
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Link
          to={"/"}
          className="text-white transition hover:text-gray-200 text-3xl font-bold "
        >
          الكشـــاف
        </Link>
      </div>
    </header>
  );
}
