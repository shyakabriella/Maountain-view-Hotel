import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/mountainviewlogo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "Restaurant", to: "/restaurant" },
  { label: "Massage & Spa", to: "/spa" },
  { label: "About", to: "https://direct-book.com/properties/mountainviewhotelandapartment/about?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-04-18&checkOutDate=2026-04-19&trackPage=yes" },
  { label: "Blog", to: "/blog" },
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
    <header
      className={`fixed top-0 left-0 w-full z-60 transition-all duration-300 ${
        scrolled ? "bg-background shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Mountain View Hotel"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;

              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`font-body text-sm tracking-wide transition-colors ${
                      isActive
                        ? "text-primary"
                        : scrolled
                        ? "text-foreground/80 hover:text-primary"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
