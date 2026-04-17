import { MapPin, Phone, Mail, ExternalLink, Play, Camera } from "lucide-react";

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
            <div className="flex gap-3 mt-6">
              {[
                { name: "twitter", icon: ExternalLink },
                { name: "youtube", icon: Play },
                { name: "instagram", icon: Camera }
              ].map(({ name, icon: Icon }) => (
                <a
                  key={name}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">Useful Links</h3>
            <ul className="space-y-3 font-body text-sm">
              {["Blog", "Rooms", "Amenities", "Gift Card"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">Privacy</h3>
            <ul className="space-y-3 font-body text-sm">
              {["Career", "About Us", "Contact Us", "Services"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-white mb-4">Have a Questions?</h3>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>Musanze, Northern Province, Rwanda</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>+250 788 123 456</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>info@mountainviewrwanda.com</span>
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
