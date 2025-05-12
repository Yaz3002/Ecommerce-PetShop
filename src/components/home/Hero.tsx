
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0">
        <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="public/img/fondo_hero.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <motion.div 
          className="max-w-lg text-white"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          <motion.h1 
            className="ml-5 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            variants={textVariants}
          >
            Moda para tus <span className="text-primary">mascotas</span>
          </motion.h1>
          <motion.p 
            className="ml-5 text-lg md:text-xl opacity-90 mb-8"
            variants={textVariants}
          >
            Descubre nuestra colección exclusiva de ropa para perros y gatos. 
            Calidad, estilo y confort para tus mejores amigos.
          </motion.p>
          <motion.div
            variants={textVariants}
            className="ml-5 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/dogs" className="w-full sm:w-auto">
              <div className="w-full h-full px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center">
                Colección Perros
              </div>
            </Link>
            <Link to="/cats" className="w-full sm:w-auto">
              <div className="w-full h-full px-8 py-3 bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center">
                Colección Gatos
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
