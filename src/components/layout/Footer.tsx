
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pastel-purple py-16 border-t mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Logo and About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 text-primary">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwquJO42y42jnvzKA5A3jRajg_2shwCp6taw&s" 
                alt="Purrfect Paws Logo" 
                className="h-14 w-auto" 
              />
              <span className="font-bold text-xl">Purrfect Paws</span>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Ropa de moda para tus mascotas. Calidad, confort y estilo para perros y gatos con envío a todo Perú.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" 
                className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <Facebook size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" 
                className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <Instagram size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" 
                className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110 duration-200">
                <Twitter size={22} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h3 className="font-medium text-xl mb-6 font-heading">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start group">
                <MapPin size={18} className="mr-3 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-600">Av. Larco 1301, Miraflores, Lima, Perú</span>
              </li>
              <li className="flex items-start group">
                <Phone size={18} className="mr-3 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-600">(+51) 987 654 321</span>
              </li>
              <li className="flex items-start group">
                <Mail size={18} className="mr-3 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-600">info@purrfectpaws.pe</span>
              </li>
              <li className="pt-2">
                <p className="text-gray-600">
                  <span className="font-medium">Horario de atención:</span><br />
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábado: 10:00 - 15:00
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-600">
          <p>© {currentYear} Purrfect Paws. Todos los derechos reservados.</p>
          <p className="mt-3 md:mt-0">Diseñado con ❤️ en Lima, Perú</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
