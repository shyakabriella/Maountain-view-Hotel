import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/images/mountainviewlogo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "Services", to: "/services" },
  { label: "Restaurant", to: "/restaurant" },
  { label: "About", to: "https://direct-book.com/properties/mountainviewhotelandapartment/about?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-04-18&checkOutDate=2026-04-19&trackPage=yes" },
  { label: "Contact", to: "https://direct-book.com/properties/mountainviewhotelandapartment/contact?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-04-18&checkOutDate=2026-04-19&trackPage=yes" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-60 transition-all duration-300 shadow-md py-3 ${
        scrolled ? "bg-[#d8d3c2f8]" : "bg-white"
      }`}
    >
      <div className="container  w-full mx-auto flex items-center justify-between px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Mountain View Hotel&Apartment"
              className="h-22 w-auto object-contain"
            />
          </Link>
        </motion.div>

        <nav className="hidden lg:block">
          <ul className="flex items-center  gap-6">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.to;

              return (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={link.to}
                    className={`font-body text-sm tracking-wide transition-colors relative group ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
