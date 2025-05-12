
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dog, Cat } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Perros",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600",
      link: "/dogs",
      color: "bg-pastel-green/20",
      icon: <Dog className="w-6 h-6" />,
      description: "Descubre nuestra colección exclusiva para perros"
    },
    {
      name: "Gatos",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600",
      link: "/cats",
      color: "bg-pastel-blue/20",
      icon: <Cat className="w-6 h-6" />,
      description: "Explora nuestra selección para gatos"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-pastel-purple/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Nuestras Colecciones</h2>
          <p className="text-gray-600 text-lg">
            Moda exclusiva para tus mascotas. Encuentra las mejores prendas y accesorios para 
            perros y gatos con estilo único y máxima comodidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-3xl shadow-xl group ${category.color} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
            >
              <Link to={category.link} className="block">
                <div className="flex flex-col md:flex-row items-center p-8 h-full">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <h3 className="text-3xl font-bold mb-3">{category.name}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{category.description}</p>
                    <div className="w-12 h-1 bg-primary rounded mb-4"></div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="rounded-xl overflow-hidden aspect-square">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
