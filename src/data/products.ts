
import { Product } from "../types";

export const products: Product[] = [
  {
    id: "dog-1",
    name: "Suéter Clásico para Perro",
    price: 24.99,
    description: "Suéter clásico para perro, perfecto para los días fríos. Hecho con materiales de alta calidad y disponible en varios colores.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600",
    category: "dog",
    subcategory: "sweaters",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["rojo", "azul", "verde", "amarillo"],
    isNew: true,
  },
  {
    id: "dog-2",
    name: "Camiseta Veraniega",
    price: 19.99,
    description: "Camiseta ligera y fresca para perros, ideal para el verano. Diseñada con telas transpirables para mantener a tu mascota cómoda.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600",
    category: "dog",
    subcategory: "shirts",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["blanco", "azul claro", "rosa"],
  },
  {
    id: "dog-3",
    name: "Abrigo Impermeable",
    price: 34.99,
    originalPrice: 39.99,
    description: "Abrigo impermeable para perros, perfecto para los días lluviosos. Con forro polar para mantener a tu mascota caliente y seca.",
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?q=80&w=600",
    category: "dog",
    subcategory: "coats",
    sizes: ["S", "M", "L", "XL"],
    colors: ["negro", "azul marino", "rojo"],
    isOnSale: true,
  },
  {
    id: "dog-4",
    name: "Traje Elegante",
    price: 29.99,
    description: "Traje elegante para perros, perfecto para ocasiones especiales. Fabricado con materiales de alta calidad y con detalles refinados.",
    image: "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?q=80&w=600",
    category: "dog",
    subcategory: "formal",
    sizes: ["XS", "S", "M", "L"],
    colors: ["negro", "gris", "azul marino"],
    rating: 4.9,
  },
  {
    id: "dog-5",
    name: "Disfraz de Halloween",
    price: 22.99,
    description: "Divertido disfraz para perros para celebrar Halloween. Cómodo de llevar y seguro para tu mascota.",
    image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=600",
    category: "dog",
    subcategory: "costumes",
    sizes: ["S", "M", "L"],
    colors: ["naranja", "negro"],
  },
  {
    id: "dog-6",
    name: "Pijama a Rayas",
    price: 27.99,
    originalPrice: 32.99,
    description: "Pijama cómodo a rayas para perros, ideal para dormir. Hecho con algodón suave y agradable al tacto.",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=600",
    category: "dog",
    subcategory: "pajamas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["azul/blanco", "rojo/blanco", "verde/blanco"],
    isOnSale: true,
  },
  {
    id: "cat-1",
    name: "Suéter Elegante para Gato",
    price: 22.99,
    description: "Suéter elegante y cómodo diseñado específicamente para gatos. Material suave que no irrita la piel de tu mascota.",
    image: "https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=600",
    category: "cat",
    subcategory: "sweaters",
    sizes: ["XS", "S", "M"],
    colors: ["gris", "beige", "rosa"],
    isNew: true,
  },
  {
    id: "cat-2",
    name: "Camiseta con Estampado",
    price: 18.99,
    description: "Camiseta ligera para gatos con estampados divertidos. Perfecta para fotos y momentos especiales.",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=600",
    category: "cat",
    subcategory: "shirts",
    sizes: ["XS", "S", "M"],
    colors: ["blanco", "negro", "azul claro"],
  },
  {
    id: "cat-3",
    name: "Disfraz de Dinosaurio",
    price: 24.99,
    originalPrice: 29.99,
    description: "Divertido disfraz de dinosaurio para gatos. Fácil de poner y cómodo de llevar.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600",
    category: "cat",
    subcategory: "costumes",
    sizes: ["XS", "S", "M"],
    colors: ["verde", "azul"],
    isOnSale: true,
  },
  {
    id: "cat-4",
    name: "Túnica Elegante",
    price: 26.99,
    description: "Túnica elegante para gatos, ideal para ocasiones especiales. Diseño sofisticado y materiales premium.",
    image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=600",
    category: "cat",
    subcategory: "formal",
    sizes: ["XS", "S", "M"],
    colors: ["negro", "blanco", "rojo"],
    rating: 4.8,
  },
  {
    id: "cat-5",
    name: "Pijama Acogedor",
    price: 23.99,
    description: "Pijama acogedor para gatos, perfecto para las noches frías. Material súper suave y cálido.",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=600",
    category: "cat",
    subcategory: "pajamas",
    sizes: ["XS", "S"],
    colors: ["azul", "rosa", "gris"],
  },
  {
    id: "cat-6",
    name: "Chaqueta con Capucha",
    price: 28.99,
    originalPrice: 34.99,
    description: "Chaqueta con capucha para gatos, estilo moderno y urbano. Protección contra el viento y lluvia ligera.",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=600",
    category: "cat",
    subcategory: "jackets",
    sizes: ["XS", "S", "M"],
    colors: ["negro", "gris", "azul marino"],
    isOnSale: true,
  }
];

export const featuredProducts = [
  products[0],
  products[2],
  products[6],
  products[8]
];

export const newArrivals = [
  products[0],
  products[6],
  products[4],
  products[1]
];

export const onSale = [
  products[2],
  products[5],
  products[8],
  products[11]
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'dog' | 'cat'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return products.filter(product => product.subcategory === subcategory);
};
