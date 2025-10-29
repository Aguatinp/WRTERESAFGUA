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
              Llevando agua potable, saneamiento e higiene a comunidades vulnerables en Chile y América Latina desde hace más de 15 años.
            </p>
            <p className="text-white/60 text-sm">
              Meta 2030: 1 millón de personas con acceso a agua segura
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">
                  Sobre el Proyecto
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("why")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">
                  Por Qué Importa
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">
                  Cómo Donar
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("map")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">
                  Mapa de Impacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@waterislife.org" className="hover:text-white transition-colors">
                  info@waterislife.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>© 2024 Water is Life. Todos los derechos reservados.</p>
          <p className="mt-2">
            Organización sin fines de lucro dedicada a llevar agua limpia a comunidades necesitadas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
