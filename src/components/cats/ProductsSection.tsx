
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductGrid from "@/components/product/ProductGrid";
import ProductFilters from "@/components/product/ProductFilters";
import { Product } from "@/types";

interface Filters {
  sizes: string[];
  priceRange: { min: number; max: number };
  categories: string[];
}

interface ProductsSectionProps {
  products: Product[];
  filteredProducts: Product[];
  animalType: 'dog' | 'cat';  // Explicitly typed as 'dog' | 'cat' instead of string
  onFilterChange: (filters: Filters) => void;
}

const ProductsSection = ({
  products,
  filteredProducts,
  animalType,
  onFilterChange,
}: ProductsSectionProps) => {
  return (
    <section className="py-16" id="products-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold mb-4 font-heading">Nuestros Productos</h2>
          <p className="text-gray-600 max-w-3xl">
            Explora nuestra selección de prendas y accesorios diseñados especialmente para gatos.
            Utilizamos materiales de alta calidad que garantizan comodidad y estilo para tu mascota.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ProductFilters
                onFilterChange={onFilterChange}
                animalType={animalType}
              />
            </div>
          </div>

          {/* Product grid */}
          <div className="lg:col-span-3">
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
