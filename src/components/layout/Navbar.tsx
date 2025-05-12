
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { getCartCount } = useCart();
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const cartItemsCount = getCartCount();

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "font-medium transition-colors relative py-2 px-1 font-heading",
      isActive ? "text-primary" : "text-gray-700 hover:text-primary",
      isActive && "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
    );

  return (
    <header className={cn(
      "sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300",
      scrolled ? "bg-white/95 shadow-md" : "bg-white/80"
    )}>
      <div className="container mx-auto px-4">
        <nav className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo - Now only shows the image with Link */}
          <Link to="/" className="flex items-center text-primary">
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="./img/ad647077-ad9e-4854-ada6-3d2080b74bc2.png" 
              alt="Purrfect Paws Logo" 
              className="h-14 md:h-16 w-auto" 
            />
          </Link>

          {/* Mobile menu button */}
          <button 
            className="block md:hidden text-gray-600 p-2 rounded-full hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={navLinkClasses} end>
              <span className="relative group overflow-hidden">
                INICIO
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
            </NavLink>
            <NavLink to="/dogs" className={navLinkClasses}>
              <span className="relative group overflow-hidden">
                PERROS
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
            </NavLink>
            <NavLink to="/cats" className={navLinkClasses}>
              <span className="relative group overflow-hidden">
                GATOS
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              <span className="relative group overflow-hidden">
                NOSOTROS
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              <span className="relative group overflow-hidden">
                CONTACTO
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
            </NavLink>
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center space-x-5">
            <Link 
              to={isAuthenticated ? "/profile" : "/login"} 
              className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100 hover:scale-105 transform duration-200"
            >
              <User size={22} />
            </Link>
            <Link 
              to="/cart" 
              className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100 hover:scale-105 transform duration-200 relative"
            >
              <ShoppingCart size={22} />
              {cartItemsCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </Link>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 top-16 bg-white z-40 flex flex-col"
              >
                <div className="container mx-auto px-4 py-8 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <NavLink 
                      to="/" 
                      className={({ isActive }) => 
                        cn("block text-lg py-3 border-b font-heading", isActive ? "text-primary border-primary" : "border-gray-100")
                      } 
                      onClick={closeMenu}
                    >
                      INICIO
                    </NavLink>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <NavLink 
                      to="/dogs" 
                      className={({ isActive }) => 
                        cn("block text-lg py-3 border-b font-heading", isActive ? "text-primary border-primary" : "border-gray-100")
                      } 
                      onClick={closeMenu}
                    >
                      PERROS
                    </NavLink>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <NavLink 
                      to="/cats" 
                      className={({ isActive }) => 
                        cn("block text-lg py-3 border-b font-heading", isActive ? "text-primary border-primary" : "border-gray-100")
                      } 
                      onClick={closeMenu}
                    >
                      GATOS
                    </NavLink>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <NavLink 
                      to="/about" 
                      className={({ isActive }) => 
                        cn("block text-lg py-3 border-b font-heading", isActive ? "text-primary border-primary" : "border-gray-100")
                      } 
                      onClick={closeMenu}
                    >
                      NOSOTROS
                    </NavLink>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <NavLink 
                      to="/contact" 
                      className={({ isActive }) => 
                        cn("block text-lg py-3 border-b font-heading", isActive ? "text-primary border-primary" : "border-gray-100")
                      } 
                      onClick={closeMenu}
                    >
                      CONTACTO
                    </NavLink>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pt-6 flex space-x-4"
                  >
                    <Button asChild variant="outline" size="lg" className="flex-1 font-heading">
                      <Link to={isAuthenticated ? "/profile" : "/login"} onClick={closeMenu}>
                        <User size={18} className="mr-2" />
                        {isAuthenticated ? "Mi Perfil" : "Iniciar Sesión"}
                      </Link>
                    </Button>
                    <Button asChild variant="default" size="lg" className="flex-1 font-heading">
                      <Link to="/cart" onClick={closeMenu}>
                        <ShoppingCart size={18} className="mr-2" />
                        Carrito ({cartItemsCount})
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
