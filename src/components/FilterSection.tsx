import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface FilterSectionProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  brands: string[];
  processors: string[];
  ram: string[];
  storage: string[];
  priceRange: [number, number];
}

const FilterSection = ({ onFilterChange }: FilterSectionProps) => {
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    processors: [],
    ram: [],
    storage: [],
    priceRange: [0, 15000],
  });

  const brands = ["Dell", "Lenovo", "HP", "Asus", "Acer"];
  const processors = ["Intel Core i5", "Intel Core i7", "AMD Ryzen 5", "AMD Ryzen 7"];
  const ramOptions = ["8GB", "16GB", "32GB"];
  const storageOptions = ["256GB SSD", "512GB SSD", "1TB SSD"];

  const handleCheckboxChange = (category: keyof FilterState, value: string, checked: boolean) => {
    const newFilters = { ...filters };
    const currentArray = newFilters[category] as string[];
    
    if (checked) {
      newFilters[category] = [...currentArray, value] as any;
    } else {
      newFilters[category] = currentArray.filter(item => item !== value) as any;
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (value: number[]) => {
    const newFilters = { ...filters, priceRange: value as [number, number] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <aside className="w-full space-y-6">
      <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50 shadow-card">
        <h3 className="text-lg font-semibold mb-4 text-foreground lg:block hidden">Filtros</h3>

        {/* Marca */}
        <div className="mb-6">
          <Label className="text-sm font-medium mb-3 block text-foreground">Marca</Label>
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2 group">
                <Checkbox
                  id={`brand-${brand}`}
                  onCheckedChange={(checked) => handleCheckboxChange('brands', brand, checked as boolean)}
                  className="transition-all duration-200 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor={`brand-${brand}`}
                  className="text-sm text-muted-foreground cursor-pointer group-hover:text-foreground transition-colors duration-200"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Processador */}
        <div className="mb-6">
          <Label className="text-sm font-medium mb-3 block text-foreground">Processador</Label>
          <div className="space-y-2">
            {processors.map((processor) => (
              <div key={processor} className="flex items-center space-x-2 group">
                <Checkbox
                  id={`proc-${processor}`}
                  onCheckedChange={(checked) => handleCheckboxChange('processors', processor, checked as boolean)}
                  className="transition-all duration-200 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor={`proc-${processor}`}
                  className="text-sm text-muted-foreground cursor-pointer group-hover:text-foreground transition-colors duration-200"
                >
                  {processor}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* RAM */}
        <div className="mb-6">
          <Label className="text-sm font-medium mb-3 block text-foreground">Memória RAM</Label>
          <div className="space-y-2">
            {ramOptions.map((ram) => (
              <div key={ram} className="flex items-center space-x-2 group">
                <Checkbox
                  id={`ram-${ram}`}
                  onCheckedChange={(checked) => handleCheckboxChange('ram', ram, checked as boolean)}
                  className="transition-all duration-200 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor={`ram-${ram}`}
                  className="text-sm text-muted-foreground cursor-pointer group-hover:text-foreground transition-colors duration-200"
                >
                  {ram}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Armazenamento */}
        <div className="mb-6">
          <Label className="text-sm font-medium mb-3 block text-foreground">Armazenamento</Label>
          <div className="space-y-2">
            {storageOptions.map((storage) => (
              <div key={storage} className="flex items-center space-x-2 group">
                <Checkbox
                  id={`storage-${storage}`}
                  onCheckedChange={(checked) => handleCheckboxChange('storage', storage, checked as boolean)}
                  className="transition-all duration-200 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor={`storage-${storage}`}
                  className="text-sm text-muted-foreground cursor-pointer group-hover:text-foreground transition-colors duration-200"
                >
                  {storage}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <Label className="text-sm font-medium mb-3 block text-foreground">
            Preço: R$ {filters.priceRange[0].toLocaleString('pt-BR')} - R$ {filters.priceRange[1].toLocaleString('pt-BR')}
          </Label>
          <Slider
            min={0}
            max={15000}
            step={500}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            className="mt-2"
          />
        </div>
      </div>
    </aside>
  );
};

export default FilterSection;
