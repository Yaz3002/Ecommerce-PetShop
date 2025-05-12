
import { useState } from "react";
import ProductGrid from "@/components/product/ProductGrid";
import ProductFilters from "@/components/product/ProductFilters";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";

interface ProductsSectionProps {
  products: Product[];
  filteredProducts: Product[];
  animalType: "dog" | "cat";
  onFilterChange: (filters: {
    sizes: string[];
    priceRange: { min: number; max: number };
    categories: string[];
  }) => void;
}

const ProductsSection = ({ 
  products, 
  filteredProducts, 
  animalType, 
  onFilterChange 
}: ProductsSectionProps) => {
  const [showFilters, setShowFilters] = useState(false);
  
  const toggleFilters = () => {
    setShowFilters(prev => !prev);
  };

  return (
    <section id="products-section" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2 font-heading">Ropa para Perros</h2>
            <p className="text-gray-600">
              Encuentra la ropa perfecta para tu perro con nuestra amplia selección de productos de alta calidad.
            </p>
          </div>
          
          <Button 
            onClick={toggleFilters} 
            variant="outline" 
            className="mt-4 md:mt-0 bg-pastel-blue text-gray-800 border-0 hover:bg-pastel-blue/80 md:hidden"
          >
            {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Mobile Filters */}
          <div className={`md:hidden ${showFilters ? 'block' : 'hidden'}`}>
            <ProductFilters onFilterChange={onFilterChange} animalType={animalType} />
          </div>
          
          {/* Desktop Sidebar with filters */}
          <div className="hidden md:block md:col-span-1">
            <div className="sticky top-24 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <ProductFilters onFilterChange={onFilterChange} animalType={animalType} />
            </div>
          </div>

          {/* Product grid */}
          <div className="md:col-span-3">
            <ProductGrid 
              products={filteredProducts} 
              emptyMessage="No se encontraron productos con los filtros seleccionados."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
