import React from "react";

const GlassNavbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-4 py-2 flex gap-3 items-center z-50">
      <NavItem label="Home" />
      <NavItem label="About" />
      <NavItem label="Projects" />
      <NavItem label="Contact" />
    </nav>
  );
};

const NavItem = ({ label, active }) => {
  return (
    <button
      className={`text-sm px-4 py-1 rounded-full transition-all duration-200 
      ${
        active
          ? "bg-white/30 text-white font-semibold"
          : "hover:bg-white/20 text-white"
      }`}
    >
      {label}
    </button>
  );
};

export default GlassNavbar;
