
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { getProductsByCategory } from "@/data/products";
import { Product } from "@/types";

// Import the new component files
import DogHero from "@/components/dogs/DogHero";
import ProductsSection from "@/components/dogs/ProductsSection";
import SizingGuide from "@/components/dogs/SizingGuide";

interface Filters {
  sizes: string[];
  priceRange: { min: number; max: number };
  categories: string[];
}

const DogsPage = () => {
  const animalType = "dog";
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
      <DogHero />
      <ProductsSection 
        products={products}
        filteredProducts={filteredProducts}
        animalType={animalType}
        onFilterChange={handleFilterChange}
      />
      <SizingGuide />
    </Layout>
  );
};

export default DogsPage;
