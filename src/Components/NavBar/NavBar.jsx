import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavHashLink } from "react-router-hash-link";
import logo from "../../assets/logo-removebg-preview 1.png";
import light from "../../assets/__before.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { name: "الرئيسية", path: "#home" },
    { name: "من نحن", path: "#we" },
    { name: "خدماتنا", path: "#services" },
    { name: "أعمالنا", path: "#work" },
    { name: "خطوات التنفيذ", path: "#workprocess" },
    { name: "الأسئلة الشائعة", path: "#question" },
    { name: "تواصل معنا", path: "#contact" },
  ];

  return (
    <header className="relative w-full font-sans bg-transparent" dir="rtl">
      <img
        src={light}
        alt=""
        className="absolute -left-[20%] -top-[60%] w-[200%] h-[500%] object-contain pointer-events-none z-0"
        style={{ filter: "brightness(1.3)", transform: "rotate(-2deg)" }}
      />

      <div className="relative z-10">
        <div className="w-full pt-2">
          <p className="text-sm text-black font-extrabold text-center">
            حلول رقمية • تنفيذ احترافي • دعم بعد التسليم
          </p>
        </div>

        <nav className="flex items-center justify-between px-10 h-24 relative">
          <div className="relative w-52 h-full flex items-center">
            <div className="absolute top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 hover:scale-105">
              <img
                src={logo}
                alt="Logo"
                className="h-48 w-auto object-contain"
              />
            </div>
          </div>
          <ul className="hidden lg:flex items-center gap-3">
            {navLinks.map((link) => {
              const isActive = activeLink === link.path;

              return (
                <li key={link.path}>
                  <NavHashLink
                    smooth
                    to={link.path}
                    onClick={() => setActiveLink(link.path)}
                    className={`flex items-center gap-1 text-[16px] font-bold px-4 py-1 transition-all duration-300
                      border-t-[3px] border-b-[3px]
                      ${
                        isActive
                          ? "border-[#1589EE] bg-white text-black shadow-sm"
                          : "border-transparent text-gray-800 hover:text-[#1589EE]"
                      }`}
                  >
                    <ChevronDown size={14} className="text-[#1589EE]" />
                    <span>{link.name}</span>
                  </NavHashLink>
                </li>
              );
            })}
          </ul>
          <div className="flex-shrink-0">
            <button className="bg-[#E9967A] hover:bg-[#e69352] text-white py-4 px-8 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95">
              تواصل معنا
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
