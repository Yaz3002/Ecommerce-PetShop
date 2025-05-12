
import { motion } from "framer-motion";
import { Dog } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryCard {
  name: string;
  image: string;
  description: string;
}

interface FeaturedCategoriesProps {
  categories: CategoryCard[];
}

const FeaturedCategories = ({ categories }: FeaturedCategoriesProps) => {
  return (
    <section className="py-16 bg-pastel-purple/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center font-heading">Categorías Destacadas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-medium mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                  <Dog className="mr-2 h-4 w-4" />
                  Explorar
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
