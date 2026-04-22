import React, { useEffect, useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleOpenMenu = () => setIsOpen(true);
    window.addEventListener("open-wedding-mobile-menu", handleOpenMenu);
    return () => window.removeEventListener("open-wedding-mobile-menu", handleOpenMenu);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Rooms", to: "/rooms" },
    { label: "Restaurant", to: "/restaurant" },
    { label: "Pool", to: "/pool" },
    { label: "About", to: "https://direct-book.com/properties/mountainviewhotelandapartment/about?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-04-18&checkOutDate=2026-04-19&trackPage=yes" },
    { label: "Contact", to: "https://direct-book.com/properties/mountainviewhotelandapartment/contact?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-04-18&checkOutDate=2026-04-19&trackPage=yes" },
    { label: "Services", to: "/services" },
    { label: "Career", to: "/career" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-[80%] max-w-sm bg-white z-[100] shadow-2xl lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-display font-semibold">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6">
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      className="block px-4 py-3 text-lg font-body text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-background">
              <a
                href="tel:+250780443787"
                className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-lg font-body text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function MobileBottomBar() {
  const handleOpenMenu = () => {
    window.dispatchEvent(new CustomEvent("open-wedding-mobile-menu"));
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-80 lg:hidden">
      <div className="grid h-[68px] grid-cols-3 overflow-hidden border-t border-white/10 bg-[#6f767a] shadow-[0_-8px_20px_rgba(0,0,0,0.25)]">
        <button
          type="button"
          onClick={handleOpenMenu}
          className="flex flex-col items-center justify-center border-r border-white/10 bg-white text-[#2b3840]"
        >
          <span className="mb-1 inline-flex">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em]">
            Menu
          </span>
        </button>

        <a
          href="tel:+250780443787"
          className="flex flex-col items-center justify-center border-r border-white/10 bg-white text-[#2b3840]"
        >
          <span className="mb-1 inline-flex">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.79.68 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.25a2 2 0 0 1 2.11-.45c.84.33 1.73.56 2.63.68A2 2 0 0 1 22 16.92Z" />
            </svg>
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em]">
            Call
          </span>
        </a>

        <a
          href="https://direct-book.com/properties/mountainviewhotelandapartment?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-04-18&checkOutDate=2026-04-19&trackPage=yes"
          className="flex items-center justify-center bg-[#a8914f] px-4 text-[13px] font-medium uppercase tracking-[0.14em] text-white"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}

export default function Layouts() {
  const location = useLocation();
  const pathname = location.pathname;

  const overlayPages = [
    "/",
    "/rooms",
    "/restaurant",
    "/pool",
    "/stunning-city-mountain-view",
    "/about",
    "/blog",
    "/contact",
    "/career",
    "/services",
    "/spa",
  ];

  const isOverlayPage = overlayPages.includes(pathname);
  const isStartPlanningPage = pathname === "/start-planning";

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <MobileMenu />

      <main
        className={`${
          isStartPlanningPage
            ? "pt-[132px] lg:pt-[140px]"
            : isOverlayPage
            ? "pt-0"
            : "pt-[132px] lg:pt-[140px]"
        } ${isStartPlanningPage ? "pb-0" : "pb-[74px] lg:pb-0"}`}
      >
        <Outlet />
      </main>

      <Footer />
      {!isStartPlanningPage && <MobileBottomBar />}
    </div>
  );
}