import { MapPin, Phone, Mail, ExternalLink, Play, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-hotel-dark text-white/80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl text-white mb-4">MountainViewHotel</h3>
            <p className="text-sm leading-relaxed font-body">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">Useful Links</h3>
            <ul className="space-y-3 font-body text-sm">
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/rooms" className="hover:text-primary transition-colors">Rooms</Link></li>
              <li><Link to="/restaurant" className="hover:text-primary transition-colors">Restaurant</Link></li>
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">Privacy</h3>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <Link to="/career" className="hover:text-primary transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="https://direct-book.com/properties/mountainviewhotelandapartment/contact?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-04-18&checkOutDate=2026-04-19&trackPage=yes" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">Have a Questions?</h3>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>Kigali,Rwanda</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>+250 78 891 2646</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span> mountainviewapartmentsrw@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center font-body text-sm text-white/50">
        Copyright ©2026 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
