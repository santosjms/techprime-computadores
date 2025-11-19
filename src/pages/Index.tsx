import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterSection, { FilterState } from "@/components/FilterSection";
import FilterDrawer from "@/components/FilterDrawer";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Product } from "@/components/ProductCard";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    processors: [],
    ram: [],
    storage: [],
    priceRange: [0, 15000],
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.processor.toLowerCase().includes(searchQuery.toLowerCase());

      // Brand filter
      const matchesBrand =
        filters.brands.length === 0 || filters.brands.includes(product.brand);

      // Processor filter
      const matchesProcessor =
        filters.processors.length === 0 ||
        filters.processors.some((proc) => product.processor.includes(proc));

      // RAM filter
      const matchesRam =
        filters.ram.length === 0 || filters.ram.includes(product.ram);

      // Storage filter
      const matchesStorage =
        filters.storage.length === 0 || filters.storage.includes(product.storage);

      // Price filter
      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];

      return (
        matchesSearch &&
        matchesBrand &&
        matchesProcessor &&
        matchesRam &&
        matchesStorage &&
        matchesPrice
      );
    });
  }, [searchQuery, filters]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header onSearch={setSearchQuery} />
      <Hero />

      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSection onFilterChange={setFilters} />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Catálogo de Notebooks
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product)}
                  index={index}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12 sm:py-20 animate-fade-in col-span-full">
                <p className="text-xl sm:text-2xl text-muted-foreground">
                  Nenhum produto encontrado
                </p>
                <p className="text-sm sm:text-base text-muted-foreground mt-2">
                  Tente ajustar os filtros ou a busca
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <FilterDrawer 
        onFilterChange={setFilters}
        productCount={filteredProducts.length}
      />

      <Footer />

      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Index;
