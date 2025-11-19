import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "./ProductCard";
import { Cpu, HardDrive, MemoryStick, Laptop, MessageCircle } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, open, onClose }: ProductModalProps) => {
  if (!product) return null;

  const handleWhatsApp = () => {
    const message = `Olá! Tenho interesse no notebook ${product.brand} ${product.model}`;
    const whatsappUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border/50 shadow-2xl animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pr-8">
            {product.brand} {product.model}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-4">
          <div className="space-y-3 sm:space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden bg-secondary/30 shadow-card">
              <img
                src={product.image}
                alt={`${product.brand} ${product.model}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gradient-primary rounded-lg p-4 sm:p-6 text-center">
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">Preço</p>
              <p className="text-3xl sm:text-4xl font-bold text-foreground">
                R$ {product.price.toLocaleString('pt-BR')}
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Especificações Completas</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary/30 rounded-lg border border-border/30 transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50">
                  <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                    <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Processador</p>
                    <p className="font-semibold text-foreground text-sm sm:text-base">{product.processor}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary/30 rounded-lg border border-border/30 transition-all duration-300 hover:border-accent/50 hover:bg-secondary/50">
                  <div className="p-1.5 sm:p-2 bg-accent/20 rounded-lg flex-shrink-0">
                    <MemoryStick className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Memória RAM</p>
                    <p className="font-semibold text-foreground text-sm sm:text-base">{product.ram}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary/30 rounded-lg border border-border/30 transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50">
                  <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                    <HardDrive className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Armazenamento</p>
                    <p className="font-semibold text-foreground text-sm sm:text-base">{product.storage}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary/30 rounded-lg border border-border/30 transition-all duration-300 hover:border-accent/50 hover:bg-secondary/50">
                  <div className="p-1.5 sm:p-2 bg-accent/20 rounded-lg flex-shrink-0">
                    <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Marca</p>
                    <p className="font-semibold text-foreground text-sm sm:text-base">{product.brand}</p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={handleWhatsApp}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-glow transition-all duration-300 gap-2 h-11 sm:h-12 text-sm sm:text-base"
              size="lg"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Falar com o vendedor
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
