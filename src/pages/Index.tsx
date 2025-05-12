
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import Benefits from "@/components/home/Benefits";
import InstagramFeed from "@/components/home/InstagramFeed";
import Layout from "@/components/layout/Layout";
import { featuredProducts, newArrivals, onSale } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart, ShieldCheck } from "lucide-react";

const Index = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <Hero />
      
      <div className="space-y-20 md:space-y-32">
        {/* Featured Products */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-pastel-purple rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-pastel-blue rounded-full opacity-20 translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          
          <FeaturedProducts 
            title="Productos Destacados" 
            products={featuredProducts}
            linkTo="/products" 
            linkText="Ver todos los productos"
          >
            <p className="text-gray-600 max-w-2xl mb-8 text-lg">
              Descubre nuestros productos más populares, elegidos por su calidad y diseño. 
              La ropa perfecta para que tu mascota luzca con estilo y comodidad.
            </p>
          </FeaturedProducts>
        </section>
        
        {/* Enhanced Categories Section - modified to remove buttons */}
        <Categories />
        
        {/* Testimonials Section */}
        <section className="py-16 bg-pastel-yellow/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Nuestros Clientes Peludos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Mira lo que dicen los dueños de mascotas que han probado nuestros productos. 
                La satisfacción de tus mascotas es nuestra prioridad.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Luna",
                  owner: "Carolina M.",
                  image: "https://plus.unsplash.com/premium_photo-1666278379751-af107f386bcf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  quote: "A Luna le encanta su nuevo suéter. Es muy cómodo y la mantiene calentita en los días fríos."
                },
                {
                  name: "Rocky",
                  owner: "Miguel A.",
                  image: "https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?q=80&w=600",
                  quote: "La calidad de la ropa es excelente. Rocky se ve genial con su nueva chaqueta y es muy resistente."
                },
                {
                  name: "Mia",
                  owner: "Ana P.",
                  image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=600",
                  quote: "El disfraz de Mia fue un éxito en la fiesta. La tela es de gran calidad y le quedó perfecto."
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-2 duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name}, mascota de ${testimonial.owner}`} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"<span className="font-medium">{testimonial.quote}</span>"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">Mascota de {testimonial.owner}</p>
                      </div>
                      <Heart size={22} className="text-primary transition-transform hover:scale-125 cursor-pointer" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* New Arrivals with enhanced design */}
        <section className="py-16 bg-pastel-purple/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-3 font-heading">Nuevas Llegadas</h2>
                <p className="text-gray-600 max-w-2xl text-lg">
                  Las últimas tendencias en moda para mascotas. Productos recién llegados a nuestra tienda 
                  que combinarán estilo y comodidad para tu mejor amigo.
                </p>
              </div>
              <Link 
                to="/new-arrivals" 
                className="mt-4 md:mt-0 group flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Ver más
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.slice(0, 4).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link 
                    to={`/product/${product.id}`} 
                    className="block bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute top-3 left-3 bg-primary text-white text-sm font-medium py-1 px-2 rounded-full z-10">
                        Nuevo
                      </div>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg truncate">{product.name}</h3>
                      <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">S/ {product.price.toFixed(2)}</span>
                        <div className="flex items-center gap-1">
                          <ShieldCheck size={16} className="text-green-600" /> 
                          <span className="text-xs text-gray-500">Garantía</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits section with enhanced visuals */}
        <Benefits />
        
        {/* On Sale Products */}
        <section className="py-16 bg-gradient-to-b from-white to-pastel-yellow/20">
          <div className="container mx-auto px-4">
            <FeaturedProducts 
              title="Ofertas Especiales" 
              products={onSale} 
              linkTo="/sale" 
              linkText="Ver todas las ofertas"
            >
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg mb-8 border border-primary/10">
                <p className="text-gray-700 flex items-center text-lg">
                  <Star className="text-primary mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Aprovecha nuestros descuentos especiales por tiempo limitado. ¡No te los pierdas!</span>
                </p>
              </div>
            </FeaturedProducts>
          </div>
        </section>
      </div>
      
      <InstagramFeed />
    </Layout>
  );
};

export default Index;
