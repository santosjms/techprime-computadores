import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import FilterSection, { FilterState } from "./FilterSection";

interface FilterDrawerProps {
  onFilterChange: (filters: FilterState) => void;
  productCount: number;
}

const FilterDrawer = ({ onFilterChange, productCount }: FilterDrawerProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          className="fixed bottom-6 right-6 z-40 lg:hidden shadow-glow bg-primary hover:bg-primary/90 w-14 h-14 rounded-full p-0"
          size="icon"
        >
          <SlidersHorizontal className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[85vw] sm:w-[400px] bg-background/95 backdrop-blur-xl border-border/50 overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Filtros
          </SheetTitle>
          <p className="text-sm text-muted-foreground">
            {productCount} {productCount === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </p>
        </SheetHeader>
        <FilterSection onFilterChange={onFilterChange} />
      </SheetContent>
    </Sheet>
  );
};

export default FilterDrawer;
