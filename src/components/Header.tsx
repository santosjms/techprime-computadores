import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/90"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-8">
          <div className="flex items-center gap-2 animate-fade-in">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-lg sm:text-xl">T</span>
            </div>
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap">
              TechPrime
            </h1>
          </div>

          <div className="relative flex-1 max-w-md animate-slide-in">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
            <Input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-8 sm:pl-10 text-sm bg-secondary/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-9 sm:h-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
