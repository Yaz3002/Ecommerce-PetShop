
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/product/ProductGrid";
import ProductFilters from "@/components/product/ProductFilters";
import { getProductsByCategory } from "@/data/products";
import { Product } from "@/types";

interface Filters {
  sizes: string[];
  priceRange: { min: number; max: number };
  categories: string[];
}

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const animalType = category === 'dogs' ? 'dog' : 'cat';
  const products = getProductsByCategory(animalType);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filters, setFilters] = useState<Filters>({
    sizes: [],
    priceRange: { min: 0, max: 50 },
    categories: [],
  });

  // Filter products based on selected filters
  useEffect(() => {
    const filtered = products.filter((product) => {
      // Filter by size if any sizes are selected
      if (filters.sizes.length > 0) {
        const hasMatchingSize = product.sizes.some((size) =>
          filters.sizes.includes(size)
        );
        if (!hasMatchingSize) return false;
      }

      // Filter by price range
      if (
        product.price < filters.priceRange.min ||
        product.price > filters.priceRange.max
      ) {
        return false;
      }

      // Filter by subcategory if any categories are selected
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(product.subcategory)) {
          return false;
        }
      }

      return true;
    });

    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">
          Ropa para {animalType === 'dog' ? 'Perros' : 'Gatos'}
        </h1>
        <p className="text-gray-600 mb-8">
          Encuentra la ropa perfecta para tu {animalType === 'dog' ? 'perro' : 'gato'} con nuestra amplia selección de productos de alta calidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar with filters */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <ProductFilters onFilterChange={handleFilterChange} animalType={animalType} />
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
    </Layout>
  );
};

export default CategoryPage;
