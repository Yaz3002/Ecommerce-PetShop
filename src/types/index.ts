
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: 'dog' | 'cat';
  subcategory: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isOnSale?: boolean;
  rating?: number;
  stock?: number; // Cantidad disponible
  sku?: string;  // Código único para el mercado peruano
  freeShipping?: boolean; // Envío gratuito
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
