import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-gray-900 font-semibold text-xl tracking-tight">
          Saree Website
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
          <div className="relative ml-6 cursor-pointer">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            />
            {/* Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
              0
            </span>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
