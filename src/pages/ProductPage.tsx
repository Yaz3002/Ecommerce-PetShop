
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import { getProductById, getProductsBySubcategory } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";
import ProductGrid from "@/components/product/ProductGrid";
import { formatPrice } from "@/lib/format";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const product = productId ? getProductById(productId) : undefined;
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          <p className="mb-8">Lo sentimos, el producto que buscas no existe.</p>
          <Button onClick={() => navigate(-1)}>
            <ArrowLeft size={16} className="mr-2" />
            Volver
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedProducts = getProductsBySubcategory(product.subcategory).filter(
    (p) => p.id !== product.id
  ).slice(0, 4);

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Selecciona una talla",
        description: "Por favor, selecciona una talla antes de añadir al carrito.",
        variant: "destructive",
      });
      return;
    }

    if (!selectedColor) {
      toast({
        title: "Selecciona un color",
        description: "Por favor, selecciona un color antes de añadir al carrito.",
        variant: "destructive",
      });
      return;
    }

    addToCart(product, quantity, selectedSize, selectedColor);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-2" />
          Volver
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover aspect-square"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 capitalize">
                  {product.category === 'dog' ? 'Perros' : 'Gatos'} / {product.subcategory}
                </span>
                {product.isNew && (
                  <span className="px-2 py-0.5 bg-primary text-white text-xs rounded-full">
                    Nuevo
                  </span>
                )}
                {product.isOnSale && (
                  <span className="px-2 py-0.5 bg-orange-500 text-white text-xs rounded-full">
                    Oferta
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
              
              <div className="mt-4 flex items-center space-x-3">
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-600">{product.description}</p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Talla</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    type="button"
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <Select 
                value={selectedColor} 
                onValueChange={setSelectedColor}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {product.colors.map((color) => (
                      <SelectItem key={color} value={color} className="capitalize">
                        {color}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-2">Cantidad</label>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 10}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="flex-1"
                size="lg" 
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} className="mr-2" />
                Añadir al carrito
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1 sm:flex-none"
              >
                <Heart size={18} className="mr-2" />
                Favorito
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Productos relacionados</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
