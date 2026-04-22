import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/mountainviewlogo.png"; // 👉 make sure your logo path is correct

const Footer = () => {
  return (
    <footer className="bg-hotel-dark text-white/80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND (LOGO ONLY — CLEAN + MODERN) */}
          <Link to={"/"} className="space-y-4 mt-10">
            <img
              src={logo}
              alt="MountainViewHotel logo"
              className="w-40 object-contain"
            />
          </Link>

          {/* Useful Links */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">
              Useful Links
            </h3>
            <ul className="space-y-3 font-body text-[11px]">
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="hover:text-primary transition-colors"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  to="/restaurant"
                  className="hover:text-primary transition-colors"
                >
                  Restaurant
                </Link>
              </li>
              <li>
                <Link
                  to="/conference"
                  className="hover:text-primary transition-colors"
                >
                  Conference
                </Link>
              </li>
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">Privacy</h3>
            <ul className="space-y-3 font-body text-[11px]">
              <li>
                <Link
                  to="/career"
                  className="hover:text-primary transition-colors"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="https://direct-book.com/properties/mountainviewhotelandapartment/contact?locale=en&items[0][adults]=2"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="https://direct-book.com/properties/mountainviewhotelandapartment/about?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-04-18&checkOutDate=2026-04-19&trackPage=yes"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">
              Have a Questions?
            </h3>

            <ul className="space-y-4 font-body text-[11px]">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>Kigali, Rwanda</span>
              </li>

              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>+250 78 891 2646</span>
              </li>

              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>mountainviewapartmentsrw@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm">
        <span className="text-white/50">
          Copyright © 2026 All rights reserved — In partnership with{" "}
        </span>
        <a
          href="https://www.ashbhub.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-green-500 hover:text-green-400 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          African Safari and Hotel Booking Hub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
