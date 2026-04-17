import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Rooms", href: "#rooms" },
  { label: "Book A Room", href: "#booking" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const MotionDiv = motion.div;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-[#391F14] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_15px_rgba(25,25,25,0.1)]" : ""
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-6 md:px-[50px]">
        {/* Left: logo + contact */}
        <div className={`flex items-center gap-6 ${scrolled ? "py-3" : "py-0"}`}>
          <a href="#home" className="flex items-center">
            <span className="font-heading text-xl md:text-2xl font-semibold text-primary-foreground tracking-wide">
              Ecoho
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8 text-primary-foreground text-sm font-body font-light">
            <li className="flex items-center gap-2">
              <Phone size={14} />
              <span>P: +10 (75) 657 5378</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} />
              <span>L: 66/A, Green Lane, NYC</span>
            </li>
          </ul>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.href} className="relative px-[10px]">
                <a
                  href={link.href}
                  className="relative block py-[27px] px-1 font-body text-[18px] font-light text-primary-foreground transition-colors duration-300 hover:text-[#FD8F5F] after:content-[''] after:absolute after:left-[-5px] after:right-[5px] after:bottom-[19px] after:h-[3px] after:w-0 after:bg-[#FD8F5F] after:transition-[width] after:duration-300 hover:after:w-[calc(100%+10px)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#booking"
            className="ml-5 inline-flex items-center justify-center bg-[#A85432] px-[29px] py-[13px] font-body text-[16px] font-semibold text-primary-foreground transition-colors duration-300 hover:text-[#f2f2f2]"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#391F14] border-t border-primary-foreground/10"
          >
            <ul className="flex flex-col items-center gap-2 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 font-body text-[18px] font-light text-primary-foreground/90 hover:text-[#FD8F5F]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center bg-[#A85432] px-[29px] py-[13px] font-body text-[16px] font-semibold text-primary-foreground"
              >
                Book Now
              </a>
            </ul>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
