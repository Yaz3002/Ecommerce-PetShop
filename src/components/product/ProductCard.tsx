
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/format";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="product-card card-hover bg-white rounded-xl overflow-hidden shadow"
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="product-card__image-container">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-card__image"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Badges */}
      {product.isNew && (
        <span className="product-card__badge bg-primary">Nuevo</span>
      )}
      {product.isOnSale && (
        <span className="product-card__badge bg-orange-500">Oferta</span>
      )}

      {/* Content */}
      <div className="product-card__content p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="product-card__title font-medium text-gray-800 mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Categories */}
        <div className="text-xs text-gray-500 mb-2">
          {product.category === 'dog' ? 'Perros' : 'Gatos'} / {product.subcategory.charAt(0).toUpperCase() + product.subcategory.slice(1)}
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mt-2">
          <div>
            {product.originalPrice ? (
              <div className="flex items-center space-x-2">
                <span className="product-card__price text-primary text-lg font-semibold">
                  S/ {product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  S/ {product.originalPrice.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="product-card__price text-primary text-lg font-semibold">
                S/ {product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <Link to={`/product/${product.id}`}>
            <Button 
              size="icon" 
              variant="ghost" 
              aria-label="Ver producto"
              className="hover:bg-primary/10 transition-colors"
            >
              <ShoppingCart size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
