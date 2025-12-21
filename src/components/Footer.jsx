import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">
            About
          </Link>
          <Link to="/" className="hover:text-white transition">
            Contact
          </Link>
          <Link to="/" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:text-white transition">
            Terms & Conditions
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-700 w-full" />

        {/* Copyright */}
        <p className="text-center text-xs">
          © {new Date().getFullYear()} MovieLoom. All rights reserved.
        </p>

        {/* Creator credit */}
        <p className="text-center text-xs flex items-center justify-center gap-1 text-neutral-500">
          Created by <span className="text-white font-medium">Sameer</span> with
          <FaHeart className="text-red-500 animate-pulse" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
