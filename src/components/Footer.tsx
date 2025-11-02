import { Droplet, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="w-8 h-8 fill-white" />
              <span className="text-2xl font-bold">Water is Life</span>
            </div>
            <p className="text-white/80 mb-4">
              Delivering safe water, sanitation, and hygiene to vulnerable communities in Chile and Latin America for more than 15 years.
            </p>
            <p className="text-white/60 text-sm">
              2030 Goal: 1 million people with reliable access to safe water
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">
                  About the Project
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("why")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">
                  Why It Matters
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">
                  How to Give
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:miconvalia@craighouse.cl" className="hover:text-white transition-colors">
                  miconvalia@craighouse.cl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+56 9 9548 3093</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>© 2024 Water is Life. All rights reserved.</p>
          <p className="mt-2">
            Nonprofit organization dedicated to bringing clean water to communities in need
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
