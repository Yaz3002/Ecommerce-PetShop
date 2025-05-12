
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const DogHero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden -mx-6 sm:-mx-8">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600"
          alt="Perros jugando"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
            Moda para tu <span className="text-primary">mejor amigo</span>
          </h1>
          <p className="text-lg md:text-xl opacity-95 mb-6 max-w-lg mx-auto">
            Descubre nuestra colección exclusiva de ropa y accesorios para que tu perro luzca con estilo y comodidad.
          </p>
          <Button size="lg" className="rounded-full animate-pulse" onClick={scrollToProducts}>
            <ArrowDown className="mr-2 h-4 w-4" />
            Ver Productos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DogHero;
