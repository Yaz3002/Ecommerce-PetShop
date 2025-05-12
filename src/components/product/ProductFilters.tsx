
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/lib/format";

interface PriceRange {
  min: number;
  max: number;
}

interface ProductFiltersProps {
  onFilterChange: (filters: {
    sizes: string[];
    priceRange: PriceRange;
    categories: string[];
  }) => void;
  animalType: 'dog' | 'cat';
}

const ProductFilters = ({ onFilterChange, animalType }: ProductFiltersProps) => {
  // Define available sizes based on animal type
  const availableSizes = animalType === 'dog' 
    ? ["XS", "S", "M", "L", "XL"] 
    : ["XS", "S", "M"];
  
  // Define available categories based on animal type
  const availableCategories = animalType === 'dog'
    ? ["sweaters", "shirts", "coats", "formal", "costumes", "pajamas"]
    : ["sweaters", "shirts", "costumes", "formal", "pajamas", "jackets"];
  
  // Filter states
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 50 });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Handle size checkbox change
  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) => {
      const newSizes = prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size];
      
      onFilterChange({
        sizes: newSizes,
        priceRange,
        categories: selectedCategories,
      });
      
      return newSizes;
    });
  };

  // Handle category checkbox change
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category];
      
      onFilterChange({
        sizes: selectedSizes,
        priceRange,
        categories: newCategories,
      });
      
      return newCategories;
    });
  };

  // Handle price slider change
  const handlePriceChange = (values: number[]) => {
    const newRange = { min: values[0], max: values[1] };
    setPriceRange(newRange);
    
    onFilterChange({
      sizes: selectedSizes,
      priceRange: newRange,
      categories: selectedCategories,
    });
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedSizes([]);
    setPriceRange({ min: 0, max: 50 });
    setSelectedCategories([]);
    
    onFilterChange({
      sizes: [],
      priceRange: { min: 0, max: 50 },
      categories: [],
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium text-lg">Filtros</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleClearFilters}
          className="text-xs"
        >
          Limpiar filtros
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["sizes", "price", "categories"]} className="space-y-4">
        {/* Size filter */}
        <AccordionItem value="sizes" className="border-b">
          <AccordionTrigger className="text-base font-medium">Tallas</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2 pt-2">
              {availableSizes.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`size-${size}`} 
                    checked={selectedSizes.includes(size)}
                    onCheckedChange={() => handleSizeChange(size)}
                  />
                  <Label 
                    htmlFor={`size-${size}`}
                    className="text-sm cursor-pointer"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price range filter */}
        <AccordionItem value="price" className="border-b">
          <AccordionTrigger className="text-base font-medium">Precio</AccordionTrigger>
          <AccordionContent>
            <div className="pt-2 px-2">
              <Slider 
                defaultValue={[priceRange.min, priceRange.max]} 
                max={50} 
                step={1} 
                minStepsBetweenThumbs={1}
                onValueChange={handlePriceChange}
                className="my-6"
              />
              <div className="flex items-center justify-between mt-2 text-sm">
                <span>{formatPrice(priceRange.min)}</span>
                <span>{formatPrice(priceRange.max)}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Categories filter */}
        <AccordionItem value="categories" className="border-b">
          <AccordionTrigger className="text-base font-medium">Categorías</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {availableCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category}`} 
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label 
                    htmlFor={`category-${category}`}
                    className="text-sm cursor-pointer capitalize"
                  >
                    {category === 'sweaters' ? 'Suéteres' :
                     category === 'shirts' ? 'Camisetas' :
                     category === 'coats' ? 'Abrigos' :
                     category === 'formal' ? 'Ropa formal' :
                     category === 'costumes' ? 'Disfraces' :
                     category === 'pajamas' ? 'Pijamas' :
                     category === 'jackets' ? 'Chaquetas' : category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductFilters;
