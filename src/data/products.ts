
import { Product } from "../types";

export const products: Product[] = [
  {
    id: "dog-1",
    name: "Suéter Clásico para Perro",
    price: 24.99,
    description: "Suéter clásico para perro, perfecto para los días fríos. Hecho con materiales de alta calidad y disponible en varios colores.",
    image: "https://i.pinimg.com/736x/2d/82/d0/2d82d0e57f9427f1ca35a2e1288f928e.jpg?q=80&w=600",
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
    image: "https://i.pinimg.com/736x/96/14/04/96140499f76315cf9eab82e19f24e3e0.jpg?q=80&w=600",
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
    image: "https://i.pinimg.com/736x/17/6e/ef/176eeff96465b7aad5f34c50ea0a6008.jpg?q=80&w=600",
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
    image: "https://i.pinimg.com/736x/65/a9/92/65a99281ddb6909f98aea82ba0b4fec4.jpg?q=80&w=600",
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
    image: "https://i.pinimg.com/736x/11/80/c7/1180c7c07d345cbf311f37f3b0b0adfb.jpg?q=80&w=600",
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
    image: "https://i.pinimg.com/736x/89/db/10/89db1091dc58d1a8d11ae1b9535a12f1.jpg?q=80&w=600",
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
    image: "https://i.pinimg.com/736x/9a/6e/0a/9a6e0ab4d1f6144e5630cfc9e67a0cb1.jpg?q=80&w=600",
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
    image: "https://i.pinimg.com/736x/2a/e8/ce/2ae8cea5474bd823cf6fc81d96ee00cc.jpg?q=80&w=600",
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
    image: "https://i.pinimg.com/736x/77/a9/04/77a9042c9c3198a887ec749968a95f06.jpg?q=80&w=600",
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
    image: "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/o/24/03aff770-ab2f-4523-a974-a8eae4a8019c.jpg?q=80&w=600",
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
    image: "https://i.pinimg.com/736x/55/be/e9/55bee99f0b94bab09dada740b1dcef04.jpg?q=80&w=600",
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
    image: "https://i.pinimg.com/736x/da/30/c9/da30c9249dc6e34e210da55f66d1d6ae.jpg?q=80&w=600",
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
