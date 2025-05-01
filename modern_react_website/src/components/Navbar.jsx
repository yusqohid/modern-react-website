import { useState } from "react";

const Navbar = () => {
  const [activeLinks, setActiveLinks] = useState("#home");
  const NavLinks = [
    { href: "#home", Label: "Home" },
    { href: "#about", Label: "About Us" },
    { href: "#services", Label: "Services" },
    { href: "#testimonials", Label: "Testimonials" },
  ];
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px8 md:h-20 h-16">
          {/* logo */}
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full opacity-100 hover:opacity-75 -ml-2 transition-opacity"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
