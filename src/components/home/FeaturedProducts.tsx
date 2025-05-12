
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import ProductGrid from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { ArrowRight } from "lucide-react";

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  linkTo?: string;
  linkText?: string;
  children?: ReactNode;
}

const FeaturedProducts = ({
  title,
  products,
  linkTo,
  linkText = "Ver todo",
  children,
}: FeaturedProductsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          {linkTo && (
            <Button variant="ghost" asChild>
              <Link to={linkTo} className="flex items-center gap-1">
                {linkText} <ArrowRight size={16} />
              </Link>
            </Button>
          )}
        </div>

        {children}

        <ProductGrid products={products} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
