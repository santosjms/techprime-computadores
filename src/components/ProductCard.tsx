import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Laptop, Cpu, HardDrive, MemoryStick } from "lucide-react";

export interface Product {
  id: number;
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  index: number;
}

const ProductCard = ({ product, onClick, index }: ProductCardProps) => {
  return (
    <Card
      className="group bg-gradient-card border-border/50 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow hover:border-primary/50 animate-fade-in active:scale-100"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      <div className="relative aspect-video bg-secondary/30 overflow-hidden">
        <img
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
          {product.brand}
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {product.model}
        </h3>

        <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2 group-hover:text-foreground transition-colors duration-300">
            <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
            <span className="line-clamp-1">{product.processor}</span>
          </div>
          <div className="flex items-center gap-2 group-hover:text-foreground transition-colors duration-300">
            <MemoryStick className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
            <span>{product.ram} RAM</span>
          </div>
          <div className="flex items-center gap-2 group-hover:text-foreground transition-colors duration-300">
            <HardDrive className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
            <span>{product.storage}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border/50 gap-2">
          <div className="flex-1">
            <p className="text-xs sm:text-sm text-muted-foreground">A partir de</p>
            <p className="text-xl sm:text-2xl font-bold text-primary">
              R$ {product.price.toLocaleString('pt-BR')}
            </p>
          </div>
          <Button
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300 text-xs sm:text-sm whitespace-nowrap"
          >
            Detalhes
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
